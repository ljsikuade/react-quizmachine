import { connect } from "react-redux";
import { storeTextInState, storeSubmission } from "../actions";
import HighScores from "../components/HighScores";

const mapStateToProps = state => {
  return {
    inputValue: state.highscores.text,
    playerScore: state.handleQuestions.score,
    scoreBoard: state.highscores.scoreBoard,
    submitted: state.highscores.submitted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleHighScoreInput: text => dispatch(storeTextInState(text)),
    submitHighScore: (text, score) => dispatch(storeSubmission(text, score))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighScores);
