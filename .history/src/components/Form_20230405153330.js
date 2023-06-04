import React, { useState }  from 'react';
//import React from 'react';

function loginForm( initialData, onSubmit ){
    const [logInData, setLogInData] = useState(initialData);
  
    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(logInData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <InputField
          label="Enter your nickname"
          value={logInData.nickname}
          onChange={nickname => setLogInData({ ...logInData, nickname })}
        />
        <InputField
          type="email"
          label="Enter your email"
          value={logInData.email}
          onChange={email => setLogInData({ ...logInData, email })}
        />
        <InputField
          type="password"
          label="Enter your password"
          value={logInData.password}
          onChange={password => setLogInData({ ...logInData, password })}
        />
        <button>Submit</button>
      </form>
    );
  };

export default loginForm
/*function GetForm() {
    const [name, setName] = React.useState('');
    const [text, setText] = React.useState('');
   
    function handleSubmit(e) {
      e.preventDefault();
      console.log('name:', name);
      console.log('text:', text);
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
          <label htmlFor="text">Message</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default GetForm;*/
  