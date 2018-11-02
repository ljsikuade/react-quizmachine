import { combineReducers } from "redux";
import handleQuestions from "./handleQuestions";
import gameRunning from "./gameRunning";

export default combineReducers({
  handleQuestions: handleQuestions,
  gameRunning: gameRunning
});
