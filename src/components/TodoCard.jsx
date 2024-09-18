import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props

    function handleKeyDown(event) {
        if (event.key === "Delete") {
            handleDeleteTodo(index)
        }
    }

    return (
        <li
            className='todoItem'
            tabIndex="0"  
            onKeyDown={handleKeyDown}  
        >
            {children}
            <div className='actionsContainer'>
                <button onClick={() => handleEditTodo(index)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDeleteTodo(index)}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
