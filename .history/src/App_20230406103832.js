import React from 'react'
import Form  from './components/Form';



function App() {
  const [formActive,setFormActive] = {UseState: true}
  return (
    <div className="App">
      <main>
        <p>
          Creation tabs
        </p>
        <button className = 'open--btn'>Open form</button>
      </main>
      <Form active = {formActive} setActive = {setFormActive} />
    </div>
  );
}


export default App;

