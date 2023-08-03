import React, { useState } from "react";

import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";

const TodoContainer = () => {

    const [newItemText, setNewItemText] = useState("");
    const [allItems, setAllItems] = useState([]);

    const handleInputChange = (event) => {

        setNewItemText(event.target.value);
    }

    const addNewItemToList = (event) => {

        event.preventDefault();

        if (newItemText == "") {
            alert("Please write Something");
        }
        else {
            const newArray = [...allItems, newItemText];
            setAllItems(newArray);
            setNewItemText("");
        }


    }


    return (
        <div className="todo-container">

            <TodoButton newItemText={newItemText} onChange={handleInputChange} onSubmit={addNewItemToList} />

            {allItems.map((currentValue) => <TodoItem itemText={currentValue} />)}

        </div>
    )
}

export default TodoContainer;