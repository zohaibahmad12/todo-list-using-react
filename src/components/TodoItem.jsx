import React from "react";

const TodoItem = () => {

    return (
        <div className="todoitem">
            <div className="todoitem-leftdiv">
                <input className="todoitem-checkbox" type="checkbox" />
                <p className="todoitem-name">Task 1</p>
            </div>

            <div className="todoitem-rightdiv">
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}

export default TodoItem;