export const initialState = {
  questions: [],
  current: {},
  correct: [],
  counter: 0,
  currentAnswers: [],
  score: 0,
  gameRunning: true
};
function handleQuestions(state = initialState, action) {
  switch (action.type) {
    case "STORE_QUESTIONS":
      const allAnswersPostFetch = [
        action.questions[0].incorrect_answers[0],
        action.questions[0].incorrect_answers[1],
        action.questions[0].incorrect_answers[2],
        action.questions[0].correct_answer
      ];
      //DISABLED FOR TESTING
      //let currentAnswersAfterFetch = shuffle(allAnswersPostFetch);

      return Object.assign(
        {},
        {
          questions: action.questions,
          current: action.questions[0],
          correct: state.correct,
          counter: 0,
          currentAnswers: allAnswersPostFetch,
          score: 0,
          gameRunning: true
        }
      );
    case "PRESENT_NEXT_QUESTION":
      const currentQuestion = state.questions[state.counter + 1];
      const allAnswersNext = [
        currentQuestion.incorrect_answers[0],
        currentQuestion.incorrect_answers[1],
        currentQuestion.incorrect_answers[2],
        currentQuestion.correct_answer
      ];
      //DISABLED DUE TO TESTING
      //let currentAnswersNext = shuffle(allAnswersNext);
      if (!currentQuestion) {
        return state;
      }
      const next = Object.assign(
        {},
        {
          questions: state.questions,
          current: currentQuestion,
          currentAnswers: allAnswersNext,
          correct: state.correct,
          counter: state.counter + 1,
          score: state.score,
          gameRunning: true
        }
      );

      if (action.givenAnswer === action.correctAnswer) {
        return Object.assign(next, {
          correct: state.correct.concat(action.correctAnswer),
          score: state.score + 1
        });
      } else {
        return Object.assign(next, { score: state.score });
      }

    default:
      return state;
  }
}

function shuffle(array) {
  let returnArray = array;
  for (let i = returnArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [returnArray[i], returnArray[j]] = [returnArray[j], returnArray[i]];
  }
  return returnArray;
}

export default handleQuestions;
