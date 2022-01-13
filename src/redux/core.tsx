import { Action, Store, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { UsersSlice } from "./users";
import { createWrapper } from "next-redux-wrapper";

const devMode = process.env.NODE_ENV === "development";

export const store = configureStore({
  reducer: {
    [UsersSlice.name]: UsersSlice.reducer,
  },
  devTools: devMode,
});

export const makeStore = () => store;

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper(makeStore, {
  debug: devMode,
});
