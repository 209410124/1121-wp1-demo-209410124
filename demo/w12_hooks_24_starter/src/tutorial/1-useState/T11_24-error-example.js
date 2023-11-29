import React from 'react';

const T11_24_ErrorExample = () => {
  let title ='random text';
const handleclick =()=>{
title ='hello world';
console.log('title',title);

}

  return(
    <>
    <h2>Random text</h2>
    <button type='button' className='btn' onClick={handleclick}>
        change title
    </button>
    </>
  )
};

export default T11_24_ErrorExample;
