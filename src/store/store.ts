import { createWrapper } from "next-redux-wrapper";
import { createStore, Store as ReduxStore } from "redux";
import { Action } from "redux-actions";

import { middlewares } from "./middleware";
import { rootReducer, RootState } from "./reducers";
import { ThunkAction } from "./types";

export type Store = ReduxStore<RootState>;

export function makeStore() {
  return createStore(rootReducer, middlewares);
}

export const wrapper = createWrapper(makeStore, { debug: true });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<any>>;
