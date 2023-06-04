import React from "react";
import { useState } from 'react';

function GreetingInput (props) {
    const [name, setName] = useState ('')
   
    return (
    <div>
        < input type = 'text' 
            name = {name}

            value = {props.value}
            onChange={(e) =>  setName(e.target.value)} />
    </div>
    )
}
export default GreetingInput;