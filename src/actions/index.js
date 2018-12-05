export function storeInState(body) {
  return {
    type: "STORE_QUESTIONS",
    questions: body
  };
}

export function storeTextInState(text) {
  return {
    type: "STORE_HIGHSCORE_NAME_INPUT",
    text: text
  };
}
export function storeSubmission(text, score) {
  return {
    type: "STORE_FINAL_INPUT",
    name: text,
    score: score
  };
}

export function closeLobby(difficulty) {
  return {
    type: "DIFFICULTY_SELECTED",
    difficulty: difficulty
  };
}

export function fetchQuestion(difficulty) {
  return function(dispatch) {
    return fetch(
      `https://opentdb.com/api.php?amount=10&category=23&difficulty=${difficulty}&type=multiple`
    )
      .then(results => results.json())
      .then(body => {
        dispatch(storeInState(body.results));
        dispatch(closeLobby(difficulty));
      });
  };
}

export function nextQuestion(givenAnswer, correctAnswer, counter) {
  return {
    type: "PRESENT_NEXT_QUESTION",
    givenAnswer: givenAnswer,
    correctAnswer: correctAnswer,
    counter: counter
  };
}
