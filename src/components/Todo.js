import React from 'react'

export default function Todo({ text, todo, todos, setTodos }) {
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }
    const completedHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item;
        }))
    }
    return (
        <div  className="subWrapper">
            <input onClick={completedHandler} type="checkbox"/>
            <div className={`${todo.completed ? 'completed' : ''}`}>{text}</div>
            <button onClick={deleteHandler}>delete</button>
        </div>
    )
}
