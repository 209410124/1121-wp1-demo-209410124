import React, { useState } from 'react';

const T14_24_UseStateObject = () => {
  const[person ,setPerson] =useState({
    name:'何書維',
    id:209410124,
    message:'random message'
  });

const changeMessage =()=>{
  setPerson({...person,message:`Welcome to learn react` });
}

  return( 
  <>
  <h3>{person.name}</h3>
  <h3>{person.id}</h3>
  <h3>{person.message}</h3>
  <button className='btn' onClick={changeMessage}>changeMessage</button>
  </>
  );
};

export default T14_24_UseStateObject;
