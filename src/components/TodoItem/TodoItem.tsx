import React, { useState } from "react";
import { toggleTodo, removeTodo } from "../../store/todosSlice";
import { Todo } from "../../types/types";
import styles from "./TodoItem.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import trashIcon from "../../assets/trashBin.svg";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        className={styles.checkbox}
        onChange={handleToggle}
      />

      <span
        className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
      >
        {todo.text}
      </span>
      <div className={styles.actions}>
        <button
          onClick={handleRemove}
          className={styles.actionButton}
          aria-label="Удалить задачу"
        >
          <img src={trashIcon} alt="Delete" width={18} />
        </button>
      </div>
    </li>
  );
};
