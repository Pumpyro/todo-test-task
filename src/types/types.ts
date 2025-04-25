export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface RootState {
  todos: Todo[];
}

export type FilterStatus = "all" | "active" | "completed";
export type SortOption = "name" | "status";
