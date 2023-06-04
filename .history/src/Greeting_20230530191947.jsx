import React from "react";

function Greeting (props) {
    const [names, setName] = useState ('')
    function handleInput (e) {
        e.preventDefault()
        const name = e.target.value;
    }
    return (
        <div>
            <p>Hello {props.names} </p>
            <form onSubmit={handleInput}>
                <input type = 'text'  value = {names} name = 'title'></input>
                <button type = 'submit'>Submit</button>
            </form>
        </div>
    )

}

export default Greeting;