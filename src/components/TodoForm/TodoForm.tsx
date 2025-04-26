import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import { addTodo } from "../../store/todosSlice";
import plusIcon from "../../assets/plus.svg";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="new-todo" className={styles.label}>
          Новая задача
        </label>
        <input
          id="new-todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          <img src={plusIcon} alt="Add todo" width={20} />
          Добавить
        </button>
      </div>
    </form>
  );
};
