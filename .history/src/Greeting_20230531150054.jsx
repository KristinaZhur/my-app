import React from "react";

import GreetingInput from "./GreetingInput";

function Greeting (props) {
    
   
    return (
        <div>
            <p>Hello {props.name} </p>
           
            <GreetingInput value = {props.name}/>
        </div>
    )

}

export default Greeting;