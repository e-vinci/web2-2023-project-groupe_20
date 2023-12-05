import { clearPage, renderImage } from '../../utils/render';
import 'bootstrap/dist/css/bootstrap.min.css';

const LeaderboardPage = () => {
    clearPage();
    renderLeaderboardFromString();
    getScoresAsString();
    addLinesToTableHeadersAndGet();
    getAllTableLinesAsString();
  };

const Leaderboard = [
    {
      id: 1,
      username: 'MohamedT',
      wave: 11,
      score: 1300,
    },
    {
      id: 2,
      username: 'Gab',
      wave: 15,
      score: 1600,
    },
    {
      id: 3,
      username: 'Trini',
      wave: 18,
      score: 1900,
    },
    {
      id: 4,
      username: 'Rayane',
      wave: 7,
      score: 800,
    },
    {
      id: 5,
      username: 'MohamedM',
      wave: 14,
      score: 1500,
    },
  ];

const body = document.querySelector('body');

renderLeaderboardFromString(Leaderboard);

function renderLeaderboardFromString(leaderboard) {
  const menuTableAsString = getScoresAsString(Leaderboard);

  const main = document.querySelector('main');

  main.innerHTML += menuTableAsString;
}

function getScoresAsString(leaderboard) {
  const leaderboardTableLines = getAllTableLinesAsString(Leaderboard);
  const leaderboardTable = addLinesToTableHeadersAndGet(leaderboardTableLines);
  return leaderboardTable;
}

function addLinesToTableHeadersAndGet(tableLines) {
  const leaderboardTable = `
  <div class="table-responsive pt-5">
    <table class="table table-danger">
      <tr>
        <th>Username</th>
        <th>Wave</th>
        <th>Score</th>
      </tr>
      ${tableLines}    
    </table>
  </div>
  `;
  return leaderboardTable;
}

function getAllTableLinesAsString(leaderboard) {
  let scoreTableLines = '';

  Leaderboard?.forEach((score) => {
    scoreTableLines += `<tr>
      <td>${score.username}</td>
      <td>${score.wave}</td>
      <td>${score.score}</td>
    </tr>`;
  });

  return scoreTableLines;
}

export default LeaderboardPage;