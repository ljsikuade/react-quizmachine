import { connect } from "react-redux";
import { fetchQuestion } from "../actions";
import App from "../components/App";

const mapDispatchToProps = dispatch => {
  return {
    fetchQuizQuestions: () => dispatch(fetchQuestion())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
