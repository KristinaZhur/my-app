//import React from 'react'
import React, { useState } from 'react';


function App() {
  const [inputdata, SetInputData] = useState({
  name: ''})

  function changeHandle (e) {
    SetInputData({...inputdata,[e.target.name]:e.target.value})

  }

  return (
    <div className="App">
     <input type = 'text' name = 'name' value = {inputdata.name} onChange = {changeHandle} />
    </div>
  );
}


export default App;

