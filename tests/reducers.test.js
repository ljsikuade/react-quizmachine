import handleQuestions, { initialState } from "../src/reducers/handleQuestions";
import * as actions from "../src/actions";

const stateBeforePresentQuestion = {
  questions: [
    { incorrect_answers: ["1", "2", "3"], correct_answer: "4" },
    { incorrect_answers: ["3", "4", "1"], correct_answer: "2" },
    { incorrect_answers: ["2", "3", "1"], correct_answer: "4" }, //*here
    { incorrect_answers: ["3", "4", "2"], correct_answer: "1" }
  ],
  current: { incorrect_answers: ["2", "3", "1"], correct_answer: "4" },
  correct: [],
  counter: 2,
  currentAnswers: ["2", "3", "1", "4"],
  score: 0,
  gameRunning: true
};

describe("handle questions reducer", () => {
  it("should return the initial state", () => {
    expect(handleQuestions(undefined, {})).toEqual(initialState);
  });
  it("should handle STORE_QUESTIONS", () => {
    expect(
      handleQuestions(undefined, {
        type: "STORE_QUESTIONS",
        questions: [
          { incorrect_answers: ["1", "2", "3"], correct_answer: "4" },
          { incorrect_answers: ["3", "4", "1"], correct_answer: "2" }
        ]
      })
    ).toEqual({
      questions: [
        { incorrect_answers: ["1", "2", "3"], correct_answer: "4" },
        { incorrect_answers: ["3", "4", "1"], correct_answer: "2" }
      ],
      current: { incorrect_answers: ["1", "2", "3"], correct_answer: "4" },
      correct: [],
      counter: 0,
      currentAnswers: ["1", "2", "3", "4"],
      score: 0,
      gameRunning: true
    });
  });

  it("should handle PRESENT_NEXT_QUESTION", () => {
    expect(
      handleQuestions(stateBeforePresentQuestion, {
        type: "PRESENT_NEXT_QUESTION",
        givenAnswer: "1",
        correctAnswer: "1",
        counter: 2
      })
    ).toEqual({
      questions: [
        { incorrect_answers: ["1", "2", "3"], correct_answer: "4" },
        { incorrect_answers: ["3", "4", "1"], correct_answer: "2" },
        { incorrect_answers: ["2", "3", "1"], correct_answer: "4" },
        { incorrect_answers: ["3", "4", "2"], correct_answer: "1" }
      ],
      current: { incorrect_answers: ["3", "4", "2"], correct_answer: "1" },
      correct: ["1"],
      counter: 3,
      currentAnswers: ["3", "4", "2", "1"],
      score: 1,
      gameRunning: true
    });
  });
});
