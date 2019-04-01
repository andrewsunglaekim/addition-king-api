const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Score = require('./Score');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const scores = await Score.getAll();
  res.json(scores);
});

app.post('/scores', async (req, res) => {
  console.log(req.body);
  try {
    await Score.createOne(req.body);
    console.log('created!');
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

app.get('/leaderboards/:answerRange', async (req, res) => {
  console.log('getting leaderbaord');
  try {
    const scores = await Score.getLeaderboard(req.params.answerRange);
    res.json(scores);
  } catch (err) {
    console.log(err);
  }
});

app.get('/topPlayed', async (req, res) => {
  try {
    const scores = await Score.getTopPlayedModes();
    res.json(scores);
  } catch (err) {
    console.log(err);
  }
})


app.listen(4000);
