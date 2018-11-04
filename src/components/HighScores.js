import React from "react";

function HighScores({
  inputValue,
  submitHighScore,
  handleHighScoreInput,
  playerScore,
  scoreBoard,
  submitted
}) {
  return (
    <section>
      <form
        className="highscores"
        onSubmit={event => {
          event.preventDefault();
          submitHighScore(inputValue, playerScore);
        }}
      >
        <input
          className="highscores__input"
          value={inputValue}
          onChange={event => handleHighScoreInput(event.target.value)}
        />
        <button className="highscores__button" type="submit">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="top__scores">
          <h1>Top Scores</h1>
          <ul className="top__scores__list">
            {scoreBoard.map(entry => (
              <li key={entry.name}>
                {entry.name}
                {" : "} {entry.score}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
export default HighScores;
