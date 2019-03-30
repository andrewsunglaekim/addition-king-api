DROP TABLE IF EXISTS scores;

CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  userName varchar(10) NOT NULL,
	numSeconds integer NOT NULL,
	numQuestions integer NOT NULL,
	numCorrect integer NOT NULL,
	answerRange integer NOT NULL
);
