const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/scores.json');

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

function readAllScores() {
  const scores = parse(jsonDbPath, Leaderboard);

  return scores;
}

function createOneScore(username, wave, score) {
  const scores = parse(jsonDbPath, Leaderboard);

  const createdScore = {
    id: getNextId(),
    username,
    wave,
    score,
  };

  scores.push(createdScore);

  serialize(jsonDbPath, scores);

  return createdScore;
}

function getNextId() {
  const scores = parse(jsonDbPath, Leaderboard);
  const lastItemIndex = scores?.length !== 0 ? scores.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = scores[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function deleteOneScore(id) {
  const idNumber = parseInt(id, 10);
  const scores = parse(jsonDbPath, Leaderboard);
  const foundIndex = scores.findIndex((score) => score.id === idNumber);
  if (foundIndex < 0) return undefined;
  const deletedScores = scores.splice(foundIndex, 1);
  const deletedScore = deletedScores[0];
  serialize(jsonDbPath, scores);

  return deletedScore;
}

module.exports = {
  readAllScores,
  createOneScore,
  deleteOneScore,
};
