import React, { useState } from 'react';


function NewTaskForm ({onTaskFormSubmit}) {
    const [text, setText] = useState('')
    function hansleSumbit (e) {
        e.preventDefault ()
        onTaskFormSubmit({text})
        setText('')

    }
return (

)
}

export default NewTaskForm