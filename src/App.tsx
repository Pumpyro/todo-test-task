import React from "react";
import styles from "./App.module.css";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoForm } from "./components/TodoForm/TodoForm";

function App() {
  return (
    <div className="container">
      <div className={styles.container}>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
