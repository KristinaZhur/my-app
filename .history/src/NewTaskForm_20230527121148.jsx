import React, { useState } from 'react';


function NewTaskForm ({onTaskFormSubmit}) {
    const [text, setText] = useState('')
    function handleSumbit (e) {
        e.preventDefault ()
        onTaskFormSubmit({text})
        setText('')

    }
return (
    <form className="new-task-form" onSubmit={handleSumbit}>
    <label>
      Details
    <input
        type = 'text'
        value = {text}
        onChange = {(e) => setText (e.target.value)}
    />
    </label>
    <input type="submit" value="Add task" /> <div>{text}</div>
    </form>
    
    
)
}

export default NewTaskForm