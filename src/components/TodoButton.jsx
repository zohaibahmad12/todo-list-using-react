import React from "react";

const TodoButton = ({ onChange, onSubmit, newItemText,isEdit }) => {

    return (
        <div className="todoform-div">
            <form onSubmit={onSubmit}>

                <input className="add-item-input" type="text" placeholder="Add Item Here..." value={newItemText} onChange={onChange} />
               {(isEdit)? <button type="submit" className="todo-button">Edit Task</button> : <button type="submit" className="todo-button">Add Task</button>}

            </form>
        </div>
    );
}

export default TodoButton;