import React from 'react';


function GetForm() {
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');
   
    function handleSubmit(event) {
      event.preventDefault();
      console.log('name:', name);
      console.log('message:', message);
    }
   
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default GetForm;
  