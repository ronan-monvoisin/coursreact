import React, { useEffect, useState } from 'react';
import Genres from './Genres';

function LivreCard(props) {
  const [asyncAuteur, setAuteur] = useState([]);
  const [livre, setLivre] = useState(props.livre);
  useEffect(() => {
    if (!props.livre.titre && Number.isInteger(Number(props.livre))) {
      (async () => { // Flex premiere methode
        try {
          const fetchlivre = await fetch('http://restdao/livre?livre_id=' + props.livre);
          let livrejson = await fetchlivre.json();
          setLivre(livrejson);
          const fetchauteur = await fetch('http://restdao/personne?personne_id=' + livrejson.auteur_id);
          let auteur = await fetchauteur.json();
          auteur.auteur_id = auteur.personne_id;
          setAuteur(auteur);
        } catch (error) {
          console.error(error);
        }
      })()
    } else {
      (async () => {// Flex deuxieme methode
        try {
          const fetchauteur = await fetch('http://restdao/personne?personne_id=' + props.livre.auteur_id);
          let auteur = await fetchauteur.json();
          auteur.auteur_id = auteur.personne_id;
          setAuteur(auteur);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [props.livre]);
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
