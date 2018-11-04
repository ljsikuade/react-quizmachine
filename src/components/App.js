import React from "react";
import QuestionContainer from "../containers/QuestionContainer";
import LobbyContainer from "../containers/LobbyContainer";
class App extends React.Component {
  componentDidMount() {
    this.props.fetchQuizQuestions();
  }

  render() {
    return <LobbyContainer />;
  }
}

export default App;
