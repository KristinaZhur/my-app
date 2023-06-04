import React from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';


function TaskList({ tasks, onDeleteTask }) {
    // create a new array of components (from 'tasks', via parent)
    const taskList = tasks.map((task) => (
      <Task onDeleteTask = {task} /> 
      
    ));
    return (
        <div className="tasks">{taskList}</div>
        
    )

  }
export default TaskList;
