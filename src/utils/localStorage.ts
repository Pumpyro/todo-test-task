import type { Todo } from "../types/types";

export const loadData = (): Todo[] => {
  try {
    const serializedData = localStorage.getItem("todos");
    return serializedData === null ? [] : JSON.parse(serializedData);
  } catch (err) {
    console.error("Todos loading error: ", err);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    const serializedData = JSON.stringify(todos);
    localStorage.setItem("todos", serializedData);
  } catch (err) {
    console.error("Todos saving error: ", err);
  }
};
