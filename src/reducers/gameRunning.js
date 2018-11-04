function gameRunning(state = true, action) {
  switch (action.type) {
    case "PRESENT_NEXT_QUESTION":
      console.log(action.counter);
      return action.counter < 8;
    default:
      return state;
  }
}
export default gameRunning;
