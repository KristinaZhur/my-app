import React from 'react';

function TaskList({ tasks, onDeleteTask }) {
    // create a new array of components (from 'tasks', via parent)
    const taskList = tasks.map((task) => (
      <Task {task} /> // using prop passed in as value
    ));
    // use the newly created array
    return <div className="tasks">{taskList}</div>;
  }
export default TaskList
