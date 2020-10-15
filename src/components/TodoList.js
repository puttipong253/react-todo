import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, setTodos }) {
    return (
        <div>
            {todos.map(todo => (
                <Todo todo={todo} text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    )
}
