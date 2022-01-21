import React, { useEffect, useState } from 'react';
import Tableau from './Tableau';

function Users(props) {
  const [asyncPersonnes, setPersonnes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://restdao/personne');
        const json = await response.json();
        setPersonnes(json);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      <h1>Users</h1>
      <Tableau data={asyncPersonnes} onClicked={(user) => props.onClicked(user)}></Tableau>
    </>
  );
}

export default Users;