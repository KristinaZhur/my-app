import React from 'react';

function Task ({ text, category, onDeleteTask }) {
    // add a callback handler
    function handleClick() {
      onDeleteTask(text);
    }
  
    return (
      <div className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        // use an event listener
        // when clicked, call the hander (which calls the callback)
        // this will send a message back up to the parent
        <button onClick={handleClick} className="delete">
          X
        </button>
      </div>
    )
export default Task;