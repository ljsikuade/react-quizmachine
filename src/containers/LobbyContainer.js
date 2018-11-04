import Lobby from "../components/Lobby";
import { connect } from "react-redux";
import { fetchQuestion } from "../actions";

const mapStateToProps = state => {
  return {
    difficultyNotSet: state.lobbyControl.difficultySelected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    easySelected: () => dispatch(fetchQuestion("easy")),
    mediumSelected: () => dispatch(fetchQuestion("medium")),
    hardSelected: () => dispatch(fetchQuestion("hard"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
