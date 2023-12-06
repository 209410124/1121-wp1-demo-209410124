import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// React
// value, onChange

const T41_24_ControlledInputs = () => {
  const[name,setName] =useState('');
  const[email,setEmail] =useState('');
  const[people,setPeople]=useState([]);

  const handleSubmit =(e) =>{}
  return (
    <>
    <article>
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">name:</label>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}>name</input>
        </div>

        <div className="form-control">
          <label htmlFor="email">email:</label>
          <input type="text" name="name" value={name} onChange={(e)=>setEmail(e.target.value)}>email</input>
        </div>
        <button type='submit'>Add Person</button>
      </form>

    </article>
    </>
  )
};


export default T41_24_ControlledInputs;
