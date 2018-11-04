import { combineReducers } from "redux";
import handleQuestions from "./handleQuestions";
import gameRunning from "./gameRunning";
import highscores from "./highscores";
import lobbyControl from "./lobbyControl";

export default combineReducers({
  handleQuestions: handleQuestions,
  gameRunning: gameRunning,
  highscores: highscores,
  lobbyControl: lobbyControl
});
