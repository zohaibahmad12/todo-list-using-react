import React from "react";

const TodoItem = ({itemText}) => {

    return (
        <div className="todoitem">
            <div className="todoitem-leftdiv">
                <input className="todoitem-checkbox" type="checkbox" />
                <p className="todoitem-name">{itemText}</p>
            </div>

            <div className="todoitem-rightdiv">
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}

export default TodoItem;