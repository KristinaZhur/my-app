import React from "react";
import { useState } from 'react';

function GreetingInput () {
    const [name, setName] = useState ('')
    
    const handleInput =  (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    
   
    return (
    <div>
        <form onSubmit={handleInput}> 
        < input type = 'text' 
            name = {name}
            onChange={(e) => setName(e.target.value)}
        />
            
            <button type = 'submit'>submit</button>
        </form>
        <p>{name}</p>
    </div>
    )
}
export default GreetingInput;