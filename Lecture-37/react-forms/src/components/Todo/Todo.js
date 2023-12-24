import React from 'react';
import styles from "./Todo.module.css";
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({ todo, markCompleted, deleteTodo }) => {
  
  const inputChangeHandler = () => {
    markCompleted(todo.id);
  }

  const deleteBtnClickHandler = () => {
    deleteTodo(todo.id);
  }

  return (
      <li className={styles.Todo}>
          <input onChange={inputChangeHandler} type="checkbox" defaultChecked={todo.completed} />
          {todo.task}
          <span onClick={deleteBtnClickHandler} className={styles.TodoDeletBtn}><FaTrashAlt /></span>
    </li>
  )
}

export default Todo