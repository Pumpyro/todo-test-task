import type { Middleware } from "@reduxjs/toolkit";
import type { RootState } from "../types/types";
import { saveTodos } from "../utils/localStorage";

/** Хотим обновлять информацию в localstorage
 * при каждом использовании хранилища */
export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);

    const state = store.getState();

    saveTodos(state.todos);

    return result;
  };
