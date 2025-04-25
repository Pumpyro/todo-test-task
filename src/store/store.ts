import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice.js";
import { localStorageMiddleware } from "./middleware.js";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.getState;
export type StoreState = ReturnType<typeof store.getState>;
