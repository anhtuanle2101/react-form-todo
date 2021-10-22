import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from 'uuid';

const TodoList = ()=>{
    const INITIAL_DATA = [];
    const [todos, setTodos] = useState(INITIAL_DATA);
    const addTodo =  (todo)=>{
        const newTodo = {...todo, id: uuid()};
        setTodos(todos=>([...todos, newTodo]));
    }
    const removeTodo = (id)=>{
        console.log("removing");
        setTodos(todos=>todos.filter(todo=>todo.id!==id));
    }
    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo}/>
            {todos.map(todo=>(<Todo text={todo.todo} key={todo.id} id={todo.id} removeTodo={removeTodo}/>))}
        </div>
    )
}

export default TodoList;