//import React from 'react'
import React, { useState } from 'react';


function App() {
  const[inputarr,setInputArr] = useState([])
  const [inputdata, SetInputData] = useState({
  name: ''})

  function changeHandle (e) {
    SetInputData({...inputdata,[e.target.name]:e.target.value})

  }
  let {name} = inputdata
  function changHandl () {
    setInputArr([...inputarr,{name}])
    SetInputData({name:''})

  }
  return (
    <div className="App">
     <input type = 'text' name = 'name' value = {inputdata.name} onChange = {changeHandle} />
     <button onClick = {changHandl}>Add</button>
    
    {
      inputarr.map(
        (info,ind) => {
        return (<div key = {ind}><div>{info.name}</div></div>)
      })
    }
    </div>
  );
}


export default App;

