import React from "react";

import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";

const TodoContainer = () => {

    return (
        <div className="todo-container">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoButton />
        </div>
    )
}

export default TodoContainer;