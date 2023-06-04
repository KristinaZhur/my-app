import React from "react";

function Greeting (props) {
    return (
        <div>
            <p>Hello {props.name} </p>
            <form>
                <input></input>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default Greeting;