const express = require('express');
const cors = require('cors');
const Score = require('./Score');

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  const scores = await Score.getAll();
  res.json(scores);
});


app.listen(4000);
