import Greeting from "./Greeting"; 

const GreetingInput = props => (
    <div>
        <Greeting />
        <GreetingInput input = {props.input} />
    </div>
)