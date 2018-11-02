export function storeInState(body) {
  return {
    type: "STORE_QUESTIONS",
    questions: body
  };
}

export function fetchQuestion() {
  return function(dispatch) {
    fetch("https://opentdb.com/api.php?amount=10&category=23&type=multiple")
      .then(results => results.json())
      .then(body => dispatch(storeInState(body.results)));
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
