const db = require('./db/connection');

class Score {
  static async getAll() {
    const scores = await db.any('SELECT * FROM scores;');
    return scores;
  }
}

module.exports = Score;
