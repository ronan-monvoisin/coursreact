import React, { useEffect, useState } from 'react';
import Tableau from './Tableau';
import If from './If';

function Bibliotheque(props) {
  const [asyncBibliotheque, setBibliotheque] = useState([]);

  const GetUsers = async () => {
    try {
      const response = await fetch('http://dao/dao1/rest/bibliotheque?personne_id='+props.user.object.personne_id);
      setBibliotheque(await response.json());
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
      <Tableau data={asyncBibliotheque} onClicked={(livre) => props.onClicked(livre)}></Tableau>
    </>
  );
}

export default Bibliotheque;