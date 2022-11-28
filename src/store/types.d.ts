import { Action, AnyAction, Middleware } from "redux";

export type ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction extends Action> = (
  dispatch: ThunkDispatch<State, ExtraThunkArg, BasicAction>,
  getState: () => State,
  extraArgument: ExtraThunkArg
) => ReturnType;

export interface ThunkDispatch<State, ExtraThunkArg, BasicAction extends Action> {
  <ReturnType>(thunkAction: ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>): ReturnType;
  <Action extends BasicAction>(action: Action): Action;
  <ReturnType, Action extends BasicAction>(
    action: Action | ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>
  ): Action | ReturnType;
}

export type ThunkMiddleware<
  State = any,
  BasicAction extends Action = AnyAction,
  ExtraThunkArg = undefined
> = Middleware<
  ThunkDispatch<State, ExtraThunkArg, BasicAction>,
  State,
  ThunkDispatch<State, ExtraThunkArg, BasicAction>
>;
