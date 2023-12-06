import React, { useState } from 'react';

const T33_24_ShowHide = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>Toggle Alert</button>
      {showAlert && <Alert />}
    </>
  );
};

const Alert = () => {
  return (
    <>
      <div className='alert alert-danger'>Hello World</div>
    </>
  );
};

export default T33_24_ShowHide;
