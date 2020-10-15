import React from 'react'

export default function TodoForm({ setInputText, inputText, todos, setTodos }) {
    const inputTexthandler = (e) => {
        setInputText(e.target.value)
    }
    const submit = (e) => {
        if (inputText !== '') {
            e.preventDefault();
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
            ])
            setInputText("")
        }
    }

    return (
        <div>
            <input className="inputText" type="text" value={inputText} onChange={inputTexthandler}/>
            <button onClick={submit}>submit</button>
        </div>
    )
}
