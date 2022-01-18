import React, { useEffect, useState } from 'react';
import Tableau from './Tableau';
import If from './If';

function Users(props) {
  const [asyncPersonnes, setPersonnes] = useState([]);

  const GetUsers = async () => {
    try {
      const response = await fetch('http://restdao/personne');
      const json = await response.json();
      setPersonnes(json);
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(false);
    }
  }
  useEffect(() => {
    GetUsers();
  }, []);
  return (
    <>
      <Tableau data={asyncPersonnes} onClicked={(user) => props.onClicked(user)}></Tableau>
    </>
  );
}

export default Users;