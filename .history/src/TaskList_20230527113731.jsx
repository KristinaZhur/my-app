import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask }) {
    // create a new array of components (from 'tasks', via parent)
    const taskList = tasks.map((task) => (
      <Task tasks = {task} /> 
    ));
    return (
        <div className="tasks">{taskList}</div>
    )

  }
export default TaskList;
