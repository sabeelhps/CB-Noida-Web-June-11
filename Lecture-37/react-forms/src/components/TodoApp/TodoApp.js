import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import classes from "./TodoApp.module.css";

const TodoApp = () => {

    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos') || '[]'));

    const addTodos = (todo) => {
        setTodos((prevState) => [...prevState, todo]);
    }

    const markCompleted = (todoId) => {
        setTodos((prevState) => {
            return prevState.map((todo) => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        });
    }

    const deleteTodo = (todoId) => {
        setTodos((prevState) => {
            return prevState.filter((todo) => todo.id !== todoId);
        })
    }

    // useEffect(() => {

    //     // callback function

    //     return () => {
    //         // cleanup function
    //     }
    // }, [dependency Array])

    useEffect(() => {
        console.log('first use effect');
    });

    useEffect(() => {
        console.log('second use effect : empty dependency');
    }, []);
    
    useEffect(() => {
        console.log('Third use effect : todos as dependency');
        window.localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    return (
        <section className={classes.TodoApp}>
            <Form addTodos={addTodos} />
            <TodoList todos={todos} markCompleted={markCompleted} deleteTodo={deleteTodo} />
        </section>
    )
}

export default TodoApp