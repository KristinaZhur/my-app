import React from "react";
import { useState } from 'react';
import GreetingInput from "./GreetingInput";

function Greeting (props) {
    const [name, setName] = useState ('')
    const handleInput =  (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    return (
        <div>
            <p>Hello {props.name} </p>
            <form onSubmit={handleInput}>
                <input type = 'text'  value = {name} ></input>
                <button type = 'submit'>Submit</button>
            </form>
            <GreetingInput />
        </div>
    )

}

export default Greeting;