import React from "react";
import QuestionContainer from "../containers/QuestionContainer";
class App extends React.Component {
  componentDidMount() {
    this.props.fetchQuizQuestions();
  }

  render() {
    return <QuestionContainer />;
  }
}

export default App;
