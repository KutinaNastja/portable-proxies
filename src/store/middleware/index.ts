import { Action, applyMiddleware, Dispatch } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { ThunkMiddleware } from "../types";

export const actionFn: ThunkMiddleware =
  ({ dispatch, getState }) =>
  (next: Dispatch) =>
  (action: (dispatch: Dispatch, getState: () => any) => void | Action) => {
    return action instanceof Function ? action(dispatch, getState) : next(action);
  };

export const middlewares = composeWithDevTools(applyMiddleware(actionFn));
