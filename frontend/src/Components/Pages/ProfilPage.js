import { getAuthenticatedUser } from '../../utils/auths';
import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import logoProfil from '../../img/userImage.png';

const profilPage = () => {
    if(!getAuthenticatedUser()) Navigate('/');
    clearPage();
    renderProfilPage();
};

async function renderProfilPage() {
    const user = getAuthenticatedUser();
    const {username} = user;
    
    const url = `/api/scores/allGames?username=${encodeURIComponent(username)}`;
    const response = await fetch(url);
    const games = await response.json();

    let gamesPlayed;

    if(!games) gamesPlayed = 0;
    else gamesPlayed = games.length

    let highestWave = 0;
    let bestScore = 0;

    games.forEach(game => {
      highestWave = Math.max(highestWave, game.wave);
      bestScore = Math.max(bestScore, game.score);
  });

    const main = document.querySelector('main');
    
    const title = document.createElement('h1');

    const baseSection = document.createElement('section');

    baseSection.className = 'vh-100';

  baseSection.innerHTML = `<div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-md-9 col-lg-7 col-xl-5">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body p-4">
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img src="${logoProfil}" alt="You" class="img-fluid" style="width: 180px; height: 180px; border-radius: 10px;">
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="mb-1">${username}</h5>
                <p class="mb-2 pb-1" style="color: #2b2a2a;">Player</p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style="background-color: #efefef;">
                  <div>
                    <p class="small text-muted mb-1">Games</p>
                    <p class="mb-0">${gamesPlayed}</p>
                  </div>
                  <div class="px-3">
                    <p class="small text-muted mb-1">Best Round</p>
                    <p class="mb-0">${highestWave}</p>
                  </div>
                  <div>
                    <p class="small text-muted mb-1">Best Score</p>
                    <p class="mb-0">${bestScore}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  main.appendChild(title);
  main.appendChild(baseSection);
}

export default profilPage;
