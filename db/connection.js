require('dotenv').config();

const pgp = require('pg-promise')({
  // possible initialization options
});

const cn = {
  host: process.env.DB_HOST,
  port: 5432,
  database: 'addition-king',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const db = pgp(cn);

module.exports = db;
