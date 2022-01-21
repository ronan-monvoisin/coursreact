import React, { useEffect, useState } from 'react';
import Tableau from './Tableau';

function Bibliotheque(props) {
  const [asyncBibliotheque, setBibliotheque] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://restdao/bibliotheque?personne_id='+props.user.object.personne_id);
        setBibliotheque(await response.json());
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      <Tableau data={asyncBibliotheque} onClicked={(livre) => props.onClicked(livre)}></Tableau>
    </>
  );
}

export default Bibliotheque;