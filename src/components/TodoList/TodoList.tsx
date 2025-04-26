import React, { use, useState } from "react";
import styles from "./TodoList.module.css";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoFilters } from "../TodoFilters/TodoFilters";
import type { FilterStatus, SortOption } from "../../types/types";
import { useAppSelector } from "../../hooks/hooks";

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  const [status, setStatus] = useState<FilterStatus>("all");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  const handleFilterChange = (filter: FilterStatus) => {
    setStatus(filter);
  };

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
  };

  const filteredTodos = todos.filter((todo) => {
    if (status === "active") return !todo.completed;
    if (status === "completed") return todo.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortBy === "status") {
      return Number(a.completed) - Number(b.completed);
    }
    return a.text.localeCompare(b.text);
  });

  return (
    <div>
      <h2 className={styles.heading}>Список задач</h2>
      <div className={styles.container}>
        <div className={styles.todoList}>
          <ul className={styles.list}>
            {sortedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
            {sortedTodos.length === 0 && (
              <li className={styles.emptyMessage}>Нет задач</li>
            )}
          </ul>
        </div>
        <TodoFilters
          currentFilter={status}
          currentSort={sortBy}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </div>
    </div>
  );
};
