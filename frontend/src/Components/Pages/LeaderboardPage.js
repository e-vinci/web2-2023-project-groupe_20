import { clearPage } from '../../utils/render';
import 'bootstrap/dist/css/bootstrap.min.css';

const LeaderboardPage = () => {
  clearPage();
  renderLeaderboard();
};

async function renderLeaderboard() {
  const response = await fetch('/scores');
  const responseText = await response.text();
  console.log('Full Response:', responseText);

  const scores = parseJson(responseText);

  if (scores) {
    console.log('Parsed Scores:', scores);

    const leaderboardTable = createLeaderboardTable(scores);
    const main = document.querySelector('main');
    main.innerHTML += leaderboardTable;
  } else {
    console.error('Error parsing JSON');
  }
}

function parseJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
    return null;
  }
}

function createLeaderboardTable(scores) {
  const tableLines = scores.map((score) => createTableRow(score)).join('');

  return `
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
}

function createTableRow(score) {
  return `
    <tr>
      <td>${score.username}</td>
      <td>${score.wave}</td>
      <td>${score.score}</td>
    </tr>
  `;
}

export default LeaderboardPage;
