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
            name = 'firstName'
            value = {firstName}
            onChange={(e) => setName(e.target.value)}
        />
            
            <button type = 'submit'>submit</button>
        </form>
        <p>{message}</p> 
        {/* как мне message отобразить в отделтном другом новом компоненте???*/}
    </div>
    )
}
export default GreetingInput;