import React, { useState } from 'react';
import style from './Form.module.css';
import { v4 as uuid } from 'uuid';

const Form = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      setIsValid(() => false);
      return;
    }

    props.addTodos(
      {
        id: uuid(),
        task: value,
        completed: false
      }
    )
  }

  const inputChangeHandler = (e) => {
    if (e.target.value && e.target.value.trim().length > 0) {
      setIsValid(() => true);
    }
    setValue(() => e.target.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <label className={style.TodoLabel} htmlFor="todo">Enter your Todo!</label>
      <input onChange={inputChangeHandler} className={`${style.TodoInp} ${isValid ? '': style.InvalidInp}`} type="text" id="todo" placeholder="Enter Todos" />
      <button className={style.AddBtn}>Add</button>
    </form>
  )
}

export default Form;