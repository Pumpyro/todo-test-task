import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import { localStorageMiddleware } from "./middleware";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
