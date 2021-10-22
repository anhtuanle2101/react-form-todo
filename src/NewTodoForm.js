import React, { useState } from "react";

const NewTodoForm= ({addTodo})=>{
    const INITIAL_DATA = {todo:""};
    const [formData, setFormData] = useState(INITIAL_DATA);
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_DATA);
    }
    const handleOnChange=(e)=>{
        const {name, value} = e.target;
        setFormData(data=>({...data, [name]:value}));
    }
    return (
        <form className="NewTodoForm" onSubmit={handleOnSubmit}>
            <label htmlFor="todo">Task</label>
            <input
                type="text"
                placeholder="new todo"
                id="todo"
                value={formData.todo}
                name="todo"
                onChange={handleOnChange}
            ></input>
            <button>Add new Todo</button>
        </form>
    )
}

export default NewTodoForm;