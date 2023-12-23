import React, { useState } from 'react';

const T12_24_UseStateBasics = () => {

  const[title, setTitle] =useState('random title');
  const handleclick =() =>{
    setTitle('Hello world');
    console.log('title',title);
  }
  return(
    <>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleclick}>
        change title
    </button>
    </>
  )
};

export default T12_24_UseStateBasics;
