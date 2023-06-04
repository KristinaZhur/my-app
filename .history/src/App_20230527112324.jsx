//import React from 'react'
import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';




function App() {
  const [tasks, setTasks] = useState(TASKS)
  function handleAddTask (newTask) {
    setTasks([...tasks, newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <div>
      <NewTaskForm
        onTaskFormSubmit = {handleAddTask}
      />
      <TaskList tasks = {TASKS} />
    </div>
    </div>
  );
}


export default App;

