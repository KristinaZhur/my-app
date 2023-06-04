import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Task from './Task';


function Page () {
  return (
      <div className = 'page--container'>
        <App />
        <Task />
        
      </div>
  )
}

ReactDOM.render (<Page />, document.getElementById('root'))
