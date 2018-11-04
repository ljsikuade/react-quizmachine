function lobbyControl(
  state = { difficultySelected: true, difficulty: "" },
  action
) {
  switch (action.type) {
    case "DIFFICULTY_SELECTED":
      return Object.assign(
        {},
        { difficultySelected: false, difficulty: action.difficulty }
      );
    default:
      return state;
  }
}
export default lobbyControl;
