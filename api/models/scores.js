const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  username: { type: String, required: true },
  wave: { type: Number, required: true },
  score: { type: Number, required: true },
});

const Score = mongoose.model('Score', scoreSchema);

async function readBestScores() {
  await mongoose.connect('mongodb+srv://WebProjectVinci2023:WebProjectVinci2023@ShadowFortressGame.trlvgrx.mongodb.net/ShadowFortressGame?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  return Score.aggregate([
    {
      $group: {
        _id: '$username',
        bestResult: {
          $max: {
            score: '$score',
            wave: '$wave',
          },
        },
      },
    },
    {
      $project: {
        username: '$_id',
        score: '$bestResult.score',
        wave: '$bestResult.wave',
        _id: 0,
      },
    },
    {
      $sort: {
        score: -1,
      },
    },
  ]);
}

async function createOneScore(username, wave, score) {
  await mongoose.connect('mongodb+srv://WebProjectVinci2023:WebProjectVinci2023@ShadowFortressGame.trlvgrx.mongodb.net/ShadowFortressGame?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  return Score.create({ username, wave, score });
}

async function deleteOneScore(id) {
  await mongoose.connect('mongodb+srv://WebProjectVinci2023:WebProjectVinci2023@ShadowFortressGame.trlvgrx.mongodb.net/ShadowFortressGame?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  return Score.findByIdAndRemove(id);
}

async function getAllGamesFromUser(username) {
  await mongoose.connect('mongodb+srv://WebProjectVinci2023:WebProjectVinci2023@ShadowFortressGame.trlvgrx.mongodb.net/ShadowFortressGame?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  const games = await Score.find({ username });
  const gamesTable = [];

  games.forEach((game) => {
    gamesTable.push({
      username: game.username, wave: game.wave, score: game.score,
    });
  });

  return gamesTable;
}

module.exports = {
  readBestScores,
  createOneScore,
  deleteOneScore,
  getAllGamesFromUser,
};
