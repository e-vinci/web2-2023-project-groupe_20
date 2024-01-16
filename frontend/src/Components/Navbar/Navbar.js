// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import { isAuthenticated } from '../../utils/auths';

import logoImage from '../../img/logo.png';
import logoLogout from '../../img/logout.png';

const Navbar = () => {
  renderNavbar();
}
function renderNavbar() {
  // Not connected user
  const anonymousNavbar = `
  <nav class="navbar navbar-expand-lg me-auto">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="${logoImage}" style="height:50px; width:50px;" alt="Home" data-uri="/"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="navbutton nav-link active white-text" aria-current="page" href="#" data-uri="/game">Game</a>
          </li>
          <li class="nav-item">
            <a class="navbutton nav-link active white-text" aria-current="page" href="#" data-uri="/leaderboard">Leaderboard</a>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right">
         <li class="nav-item">
           <a class="navbutton nav-link active white-text" href="#" data-uri="/login">Login</a>
         </li>
         <li class="nav-item">
           <a class="navbutton nav-link active white-text" href="#" data-uri="/register">Register</a>
         </li>
       </ul>
      </div>
    </div>
  </nav>
  `;

  // Connected user
  const authenticatedNavbar = `
  <nav class="navbar navbar-expand-lg me-auto">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="${logoImage}" style="height:50px; width:50px;" alt="Home" data-uri="/"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="navbutton nav-link active white-text" aria-current="page" href="#" data-uri="/game">Game</a>
          </li>
          <li class="nav-item">
            <a class="navbutton nav-link active white-text" aria-current="page" href="#" data-uri="/leaderboard">Leaderboard</a>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right mb-2 mb-lg-0">
         <li class="nav-item">
           <a class="navbutton nav-link active white-text" aria-current="page" style="margin-top:25%"; href="#" data-uri="/profil">Profil</a>
         </li>
         <li class="nav-item">
           <a class="navbutton nav-link active white-text" href="#"><img src="${logoLogout}" style="height:50px; width:50px;" alt="Logout" data-uri="/logout"></a>
         </li>
       </ul>
      </div>
    </div>
  </nav>
  `;

  const navbar = document.querySelector('#navbarWrapper');

  navbar.innerHTML = isAuthenticated() ? authenticatedNavbar : anonymousNavbar;
};

export default Navbar;