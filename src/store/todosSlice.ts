import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../types/types";
import { loadData } from "../utils/localStorage";

const initialState: Todo[] = loadData();

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (text: string) => {
        return {
          payload: {
            id: Date.now().toString(),
            text,
            completed: false,
          },
        };
      },
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
