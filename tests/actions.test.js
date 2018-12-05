import {
  storeInState,
  storeTextInState,
  storeSubmission,
  closeLobby,
  fetchQuestion,
  nextQuestion
} from "../src/actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should store questions in state", () => {
    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(storeInState([1, 2, 3]));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: "STORE_QUESTIONS", questions: [1, 2, 3] };
    expect(actions).toEqual([expectedPayload]);
  });

  it('calls "store in state" and "close lobby" actions if the fetch response was successful', () => {
    const store = mockStore({ questions: [] });
    fetchMock.getOnce(
      `https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple`,
      {
        body: { results: ["question1", "question2"] },
        headers: { "content-type": "application/json" }
      }
    );
    const expectedActions = [
      {
        type: "STORE_QUESTIONS",
        questions: ["question1", "question2"]
      },
      {
        type: "DIFFICULTY_SELECTED",
        difficulty: "easy"
      }
    ];
    return store.dispatch(fetchQuestion("easy")).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
