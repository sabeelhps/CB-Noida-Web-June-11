import React from 'react';
import Todo from '../Todo/Todo';
import classes from "./TodoList.module.css";

const TodoList = ({todos, markCompleted, deleteTodo}) => {
  return (
    <ul className={classes.TodoList}>
      {
        todos.map((todo) => {
          return <Todo
            key={todo.id}
            todo={todo}
            markCompleted={markCompleted}
            deleteTodo={deleteTodo} />
        })
      }
    </ul>
  )
}

export default TodoList