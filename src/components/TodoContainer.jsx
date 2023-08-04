import React, { useState, useEffect } from "react";

import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";






const TodoContainer = () => {

    const getLocalStorageTodoList = () => {

        const todoList = JSON.parse(localStorage.getItem("todoList"));
        console.log("Function Run");
        return (todoList) ? todoList : [];

    }

    const [newItemText, setNewItemText] = useState("");
    const [allItems, setAllItems] = useState(getLocalStorageTodoList());


    useEffect(() => {

        localStorage.setItem("todoList", JSON.stringify(allItems));

    }, [allItems])
    

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

    const deleteItem = (index) => {

        const newArray = [...allItems];
        newArray.splice(index, 1);
        setAllItems(newArray);
    }


    return (
        <div className="todo-container">

            <TodoButton newItemText={newItemText} onChange={handleInputChange} onSubmit={addNewItemToList} />

            {allItems.map((currentValue, currentIndex) => <TodoItem key={currentIndex} itemText={currentValue} itemId={currentIndex} deleteItem={deleteItem} />)}

        </div>
    )
}

export default TodoContainer;