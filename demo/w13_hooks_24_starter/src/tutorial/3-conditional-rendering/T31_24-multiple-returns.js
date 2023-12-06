import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarsonii';

const T31_24_MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const userData = await resp.json(); 
        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>There was an error ...</h2>;
  }


  const{name} =user
  return (
    <>
     <h2>{user.name}</h2>
    </>
  );
};

export default T31_24_MultipleReturns;
