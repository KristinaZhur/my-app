import React from "react";

const GreetingInput = (props) => (
    <div>
        < input type = 'text' 
            value = {props.value}/>
            onChange={(event) => console.log("value changed!")}
    </div>
)
export default GreetingInput;