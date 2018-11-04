import React from "react";
import QuestionContainer from "../containers/QuestionContainer";

function Lobby({
  difficultyNotSet,
  easySelected,
  mediumSelected,
  hardSelected
}) {
  return (
    <main className="lobby__container">
      {difficultyNotSet && (
        <section className="lobby">
          <h1 className="lobby__title">HISTORIA</h1>
          <h2>Choose Difficulty:</h2>
          <ul className="lobby__list">
            <li className="lobby__list__item" key="easy" onClick={easySelected}>
              Easy
            </li>
            <li
              className="lobby__list__item"
              key="medium"
              onClick={mediumSelected}
            >
              Medium
            </li>
            <li className="lobby__list__item" key="hard" onClick={hardSelected}>
              Hard
            </li>
          </ul>
        </section>
      )}
      {!difficultyNotSet && <QuestionContainer />}
    </main>
  );
}
export default Lobby;
