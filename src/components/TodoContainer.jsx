import React, { useState, useEffect } from "react";

import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";






const TodoContainer = () => {

    const getLocalStorageTodoList = () => {

        const todoList = JSON.parse(localStorage.getItem("todoList"));
        return (todoList) ? todoList : [];

    }

    const [newItemText, setNewItemText] = useState("");
    const [allItems, setAllItems] = useState(getLocalStorageTodoList());
    const [isEdit,setIsEdit]=useState(false);
    const [editItemId,setEditItemId]=useState(null);


    useEffect(() => {

        localStorage.setItem("todoList", JSON.stringify(allItems));

    }, [allItems])
    

    const handleInputChange = (event) => {

        setNewItemText(event.target.value);
    }

    const addNewItemToList = (event) => {

        event.preventDefault();

        if (newItemText === "") {
            alert("Please write Something");
        }
        else if(newItemText!=="" && isEdit===true){

            const newArray=[...allItems];
            newArray.splice(editItemId,1,newItemText);
            setAllItems(newArray);
            setNewItemText("");
            setIsEdit(false);
            setEditItemId(null);
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


    const editItem=(index)=>{

       
       const currentElement= allItems.find((currentElement,currentIndex)=>{
            return currentIndex===index;
        });

        setIsEdit(true);
        setNewItemText(currentElement);
        setEditItemId(index)

    }

    return (
        <div className="todo-container">

            <TodoButton newItemText={newItemText} onChange={handleInputChange} onSubmit={addNewItemToList} isEdit={isEdit} />

            {allItems.map((currentValue, currentIndex) => <TodoItem key={currentIndex} itemText={currentValue} itemId={currentIndex} deleteItem={deleteItem} editItem={editItem} />)}

        </div>
    )
}

export default TodoContainer;