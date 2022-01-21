import React, { useEffect, useState } from 'react';
import If from './If';
import Genres from './Genres';
function LivreCard(props) {
  const livre = props.livre;
  const [asyncAuteur, setAuteur] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://restdao/personne?personne_id=' + livre.auteur_id);
        setAuteur(await response.json());
      } catch (error) {
        console.error(error);
      }
    })()
  }, []);
  return (
    <div className="card md-3 box-shadow">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{livre.titre}</h4>
      </div>
      <div className="card-body">
        <h5 className="card-title" onClick={() => props.onClicked(asyncAuteur)}>{asyncAuteur.prenom} {asyncAuteur.nom}</h5>
        <ul className="list-unstyled">
          <li>{livre.saga}</li>
          <li>Tome {livre.tome}</li>
        </ul>
        <Genres livre_id={livre.livre_id} onClicked={(genre) => props.onClicked(genre)} />
      </div>
    </div>
  );
}

export default LivreCard;
