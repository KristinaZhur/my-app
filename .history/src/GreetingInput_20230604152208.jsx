import React from "react";
import { useState } from 'react';
import { Message } from "./components/Message";

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
        
        {/* как мне message отобразить в отделтном другом новом компоненте???*/}
        <Message message = {message} />
    </div>
        
    )
}
export default GreetingInput;