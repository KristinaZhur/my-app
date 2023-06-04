import React from "react";
import { useState } from 'react';

function GreetingInput () {
    const [name, setName] = useState ('')
    
    const handleInput =  (e) => {
        e.preventDefault()
        setName('')
    }
    
   
    return (
    <div>
        <form onSubmit={handleInput}> 
        < input type = 'text' 
        

            onChange={(e) => setName(e.target.value)}
        />
            
            <button type = 'submit'>submit</button>
        </form>
        <p>{name}</p>
    </div>
    )
}
export default GreetingInput;