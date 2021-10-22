import React from "react";

const Todo = ({text, id, removeTodo})=>{
    return (
        <li>
            <span>{text}</span>
            <button onClick={()=>removeTodo(id)}>X</button>
        </li>
    )
}

export default Todo;