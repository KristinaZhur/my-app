import React from "react";
import { useState } from 'react';

function GreetingInput (props) {
    const [name, setName] = useState ('')
    
    const handleInput =  (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    
   
    return (
    <div>
        <form onSubmit={handleInput}> 
        < input type = 'text' 
            name = {props.name}

            value = {props.value}
            onChange={(e) =>  setName(e.target.value)} />
            <button type = 'submit'>submit</button>
            
        </form>
        
    </div>
    )
}
export default GreetingInput;