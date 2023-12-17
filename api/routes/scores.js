const express = require('express');
const Score = require('../models/scores');
const { authorize } = require('../utils/auths');

const router = express.Router();

// Read best scores from the leaderboard
router.get('/', async (req, res) => {
  const orderByScore = req?.query?.order?.includes('score') ? req.query.order : undefined;
  let orderedLeaderboard;

  const bestScores = await Score.readBestScores();

  if (orderByScore) {
    orderedLeaderboard = [...bestScores].sort((a, b) => a.bestScore - b.bestScore);
  }

  if (orderByScore === '-score') {
    orderedLeaderboard = orderedLeaderboard.reverse();
  }

  return res.json(orderedLeaderboard ?? bestScores);
});

// Create a score to be added to the leaderboard
router.post('/', authorize, async (req, res) => {
  const { username, wave, score } = req.body;

  if (typeof username !== 'string' || typeof wave !== 'number' || typeof score !== 'number') {
    return res.status(400).send('Bad Request: Invalid data types');
  }

  if (wave < 0 || score < 0) {
    return res.status(400).send('Bad Request: Waves and scores must be non-negative');
  }

  const createdScore = await Score.createOneScore(username, wave, score);
  return res.json(createdScore);
});

// Get all games for a user based on its username
router.get('/allGames', async (req, res) => {
  const username = req?.query?.username?.length !== 0 ? req.query.username : undefined;

  if (!username) return res.sendStatus(400); // 400 Bad Request

  const games = await Score.getAllGamesFromUser(username);

  return res.json(games);
});

module.exports = router;
