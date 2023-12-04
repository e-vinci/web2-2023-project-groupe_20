const express = require('express');
const {
  readAllScores,
  createOneScore,
  deleteOneScore,
} = require('../models/scores');
const { authorize, isAdmin } = require('../utils/auths');

const router = express.Router();

/* Read all the scores from the leaderboard
*/
router.get('/', (req, res) => {
  const scores = readAllScores();
  const ordererLeaderboard = [...scores].sort((a, b) => b.scora - a.score);

  return res.json(ordererLeaderboard);
});

// Create a score to be added to the leaderboard.
router.post('/', authorize, (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const wave = req?.body?.wave?.length !== 0 ? req.body.wave : undefined;
  const score = req?.body?.score?.length !== 0 ? req.body.score : undefined;

  if (!username || !wave || !score) return res.sendStatus(400); // error code '400 Bad request'

  const createdScore = createOneScore(username, wave, score);

  return res.json(createdScore);
});

// Delete a score from the leaderboard based on its id
router.delete('/:id', authorize, isAdmin, (req, res) => {
  const deletedScore = deleteOneScore(req.params.id);

  if (!deletedScore) return res.sendStatus(404);

  return res.json(deletedScore);
});

module.exports = router;
