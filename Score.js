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
}

module.exports = Score;
