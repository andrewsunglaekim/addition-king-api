const db = require('./db/connection');

class Score {
  static async getAll() {
    const scores = await db.any('SELECT * FROM scores;');
    return scores;
  }
  static async createOne(scoreObject) {
    await db.none('INSERT INTO scores(userName, numSeconds, numQuestions, numCorrect, answerRange) VALUES($1, $2, $3, $4, $5)', [
      scoreObject.userName,
      scoreObject.numSeconds,
      scoreObject.numQuestions,
      scoreObject.numCorrect,
      scoreObject.answerRange,
    ]);
  }
  static async getLeaderboard(answerRange) {
    const scores = await db.any('SELECT * FROM scores WHERE answerRange = $1 ORDER BY numCorrect DESC, numSeconds ASC LIMIT 10;', [answerRange]);
    return scores;
  }
  static async getTopPlayedModes() {
    const scores = await db.any('SELECT answerRange, COUNT(*) from scores GROUP BY answerRange ORDER BY COUNT(*) desc;');
    return scores;
  }
}

module.exports = Score;
