import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleAddTodos(todoValue)
            setTodoValue('')
        }
    }

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                onKeyDown={handleKeyDown}  
                placeholder="Enter todo..."
            />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}
