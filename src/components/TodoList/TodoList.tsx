import React from "react";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  return (
    <div>
      <h2 className={styles.heading}>Список задач</h2>
      <div className={styles.container}>
        <div className={styles.todoList}>
          <ul className={styles.list}>
            <li className={styles.emptyMessage}>Пу-пу-пу</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
