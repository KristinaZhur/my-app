import React from "react";
import { useState } from 'react';

function GreetingInput () {
    const [firstName, setName] = useState ('')
    const [message, setMessage] = useState('');
    
    const handleInput =  (e) => {
        e.preventDefault()
        setMessage(`hi ${firstName}`)
        setName('')
    }
    
   
    return (
    <div>
        <form onSubmit={handleInput}> 
        < input type = 'text' 
            name = 
            onChange={(e) => setName(e.target.value)}
        />
            
            <button type = 'submit'>submit</button>
        </form>
        <p>{name}</p>
    </div>
    )
}
export default GreetingInput;