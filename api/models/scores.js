const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  username: { type: String, required: true },
  wave: { type: Number, required: true },
  score: { type: Number, required: true },
});

const Score = mongoose.model('Score', scoreSchema);

function readAllScores() {
  return Score.find();
}

function createOneScore(username, wave, score) {
  return Score.create({ username, wave, score });
}

function deleteOneScore(id) {
  return Score.findByIdAndRemove(id);
}

module.exports = {
  readAllScores,
  createOneScore,
  deleteOneScore,
};
