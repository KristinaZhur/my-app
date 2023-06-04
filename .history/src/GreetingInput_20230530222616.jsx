import React from "react";
import { useState } from 'react';
const GreetingInput = (props) => (
    const [name, setName] = useState ('')
    const handleInput =  (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    return (
    <div>
        < input type = 'text' 

            value = {props.value}
            onChange={(event) => console.log("value changed!")} />
    </div>
    )
)
export default GreetingInput;