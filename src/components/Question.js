import React from "react";
import { decode } from "he";
import HighScoresContainer from "../containers/HighScoresContainer.js";
import style from "../../style.scss";

function Question({ questions, gameRunning, handleAnswer, difficulty }) {
  console.log(questions);
  return (
    <main className="quiz">
      {gameRunning === true ? (
        <section className="quiz__ongoing">
          <label>{difficulty}</label>
          <h1 className="quiz__question">
            {questions.current.question
              ? decode(questions.current.question)
              : null}
          </h1>
          <ul className="quiz__answer__list">
            {questions.currentAnswers.map(answer => (
              <li
                className="quiz__answer__list__item"
                onClick={() =>
                  handleAnswer(
                    answer,
                    questions.current.correct_answer,
                    questions.counter
                  )
                }
                key={answer}
              >
                {answer ? decode(answer) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="score__page">
          <h1>Score: {questions.score} / 10</h1>
          <HighScoresContainer />
          <ol>
            {questions.questions.map(question => {
              return (
                <li key={question.correct_answer}>
                  {decode(question.question)} {" : "}{" "}
                  {questions.correct.includes(question.correct_answer) ? (
                    <b className="correct">{decode(question.correct_answer)}</b>
                  ) : (
                    <b className="incorrect">
                      {decode(question.correct_answer)}
                    </b>
                  )}
                </li>
              );
            })}
          </ol>
          {questions.score <= 3 ? (
            <img src="http://www.reactiongifs.com/r/no-signs.gif" />
          ) : questions.score < 7 ? (
            <img src="http://www.reactiongifs.com/wp-content/uploads/2013/06/Colin_Farrel-Disgusted.gif" />
          ) : (
            <img src="http://www.reactiongifs.com/wp-content/uploads/2013/10/conup.gif" />
          )}
        </section>
      )}
    </main>
  );
}
export default Question;
