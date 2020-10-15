import React, { useState } from 'react';
import './App.css';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div className="wrapper">
      <TodoForm todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
