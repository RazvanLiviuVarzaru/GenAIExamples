// Copyright (C) 2025 Intel Corporation
// SPDX-License-Identifier: Apache-2.0

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@redux/User/userSlice";
import conversationReducer from "@redux/Conversation/ConversationSlice";
import promptReducer from "@redux/Prompt/PromptSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: combineReducers({
    userReducer,
    conversationReducer,
    promptReducer,
  }),
  devTools: import.meta.env.PROD || true,
  // preloadedState: loadFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// function saveToLocalStorage(state: ReturnType<typeof store.getState>) {
//   try {
//     const serialState = JSON.stringify(state);
//     localStorage.setItem("reduxStore", serialState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("reduxStore");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
