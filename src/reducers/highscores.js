function highscores(
  state = { text: "", scoreBoard: [], submitted: false },
  action
) {
  switch (action.type) {
    case "STORE_HIGHSCORE_NAME_INPUT":
      return Object.assign({}, { text: action.text });
    case "STORE_FINAL_INPUT":
      //localstorage code goes here
      let totalScores = [];
      const scoreObject = { name: action.name, score: action.score };
      //Does a score list exist?
      let scoreGet = JSON.parse(localStorage.getItem("scoreList"));
      if (scoreGet) {
        totalScores = scoreGet;
      } else {
        localStorage.setItem("scoreList", JSON.stringify(totalScores));
        totalScores = JSON.parse(localStorage.getItem("scoreList"));
      }
      totalScores.push(scoreObject);
      localStorage.setItem("scoreList", JSON.stringify(totalScores));
      return Object.assign({}, state, {
        scoreBoard: sortedScores(totalScores),
        submitted: true
      });
    default:
      return state;
  }
}

function sortedScores(scores) {
  const descendingScores = scores.sort((obj1, obj2) => obj1.score - obj2.score);
  return descendingScores.reverse();
}

export default highscores;
