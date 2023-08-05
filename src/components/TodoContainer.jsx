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
           for (const object of newArray) {
            if (object.id===editItemId) {
                console.log("Editing"+ object.text + object.id);
                object.text=newItemText;
            }
           }
            setAllItems(newArray);
            setNewItemText("");
            setIsEdit(false);
            setEditItemId(null);
        }
        else {
           
            const newArray = [...allItems, {text:newItemText,id:new Date().getTime().toString()}];
            setAllItems(newArray);
            setNewItemText("");

        }

    }

    const deleteItem = (index) => {


        const newArray = allItems.filter((currentElement)=>{
            return currentElement.id!==index;
        })
        
        
        setAllItems(newArray);
    }


    const editItem=(index)=>{

       
       const currentElement= allItems.find((currentElement)=>{
            return currentElement.id===index;
        });

        setIsEdit(true);
        setNewItemText(currentElement.text);
        setEditItemId(index)

    }

    return (
        <div className="todo-container">

            <TodoButton newItemText={newItemText} onChange={handleInputChange} onSubmit={addNewItemToList} isEdit={isEdit} />

            {allItems.map((currentElement) => <TodoItem key={currentElement.id} itemText={currentElement.text} itemId={currentElement.id} deleteItem={deleteItem} editItem={editItem} />)}

        </div>
    )
}

export default TodoContainer;