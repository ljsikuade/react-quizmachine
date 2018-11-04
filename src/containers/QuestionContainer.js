import { connect } from "react-redux";
import { nextQuestion } from "../actions";
import Question from "../components/Question";

const mapStateToProps = state => {
  return {
    questions: state.handleQuestions,
    gameRunning: state.gameRunning,
    difficulty: state.lobbyControl.difficulty
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAnswer: (givenAnswer, correctAnswer, counter) =>
      dispatch(nextQuestion(givenAnswer, correctAnswer, counter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
