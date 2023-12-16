const express = require('express');
const Score = require('../models/scores');
const { authorize, isAdmin } = require('../utils/auths');

const router = express.Router();

// Read all scores from the leaderboard
router.get('/', async (req, res) => {
  const orderByScore = req?.query?.order?.includes('score') ? req.query.order : undefined;
  let orderedLeaderboard;

  const scores = await Score.find();

  if (orderByScore) {
    orderedLeaderboard = [...scores].sort((a, b) => a.score - b.score);
  }

  if (orderByScore === '-score') {
    orderedLeaderboard = orderedLeaderboard.reverse();
  }

  res.json(orderedLeaderboard ?? scores);
});

// Create a score to be added to the leaderboard
router.post('/', authorize, async (req, res) => {
  const { username, wave, score } = req.body;

  // Validation des types pour wave et score
  if (!username) {
    return res.status(400).send('Bad Request');
  }

  const createdScore = await Score.createOneScore(username, wave, score);
  return res.json(createdScore);
});

// Delete a score from the leaderboard based on its id
router.delete('/:id', authorize, isAdmin, async (req, res) => {
  const { id } = req.params;

  const deletedScore = await Score.findByIdAndRemove(id);

  if (!deletedScore) {
    return res.status(404).send('Score not found');
  }

  return res.json(deletedScore);
});

module.exports = router;
