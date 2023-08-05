import React from "react";

const TodoItem = ({itemText,itemId,isCheckbox,deleteItem,editItem,handleCheckboxChange}) => {

   
    return (
        <div className="todoitem">
            <div className="todoitem-leftdiv">
              { 
                (isCheckbox)?
                 <input className="todoitem-checkbox" type="checkbox" checked="true" onChange={()=>handleCheckboxChange(itemId)} /> :
                 <input className="todoitem-checkbox" type="checkbox" onChange={()=>handleCheckboxChange(itemId)} />
                  }
                <p className="todoitem-name">{itemText}</p>
            </div>

            <div className="todoitem-rightdiv">
                <i className="fas fa-edit" onClick={()=>editItem(itemId)}></i>
                <i className="fas fa-trash" onClick={()=>deleteItem(itemId)}></i>
            </div>
        </div>
    )
}

export default TodoItem;