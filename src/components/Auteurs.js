import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Tableau from './Tableau';

function Auteurs(props) {
  const [asyncAuteurs, setAuteurs] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        // TODO : fix les data qui sortent d'ici dans le projet back
        const response = await fetch('http://restdao/auteur');
        const json = await response.json();
        let allauteurs = [];
        // TODO : il est un peu velu celui là...
        /**
         * Pour chaque livre retourné par le fetch
         */
        json.forEach(livre => {
          /**
           * Si l'auteur n'est pas présent dans le tableau allauteurs
           * On l'ajoute
           */
          if (!allauteurs[livre.auteur_id]) {
            allauteurs[livre.auteur_id] = {
              id: livre.auteur_id,
              nom: livre.nom,
              prenom: livre.prenom,
              oeuvres: []
            }
          }

          /**
           * Pour chaque 
           */
          allauteurs[livre.auteur_id].oeuvres.push({
            livre_id: livre.livre_id,
            img: (livre.img !== 'null') ? <img src={livre.img} width="100px" alt={livre.titre} /> : '',
            titre: livre.titre,
            tome: livre.tome,
            saga: livre.saga,
            auteur_id: livre.auteur_id
          })
        });

        setAuteurs(allauteurs);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [props]);
  return (
    <>
      <Accordion defaultActiveKey="1" className="text-start">
        {asyncAuteurs.map((auteur, k) =>
          <Accordion.Item eventKey={auteur.id} key={k}>
            <Accordion.Header>#{auteur.id} - {auteur.prenom} {auteur.nom}</Accordion.Header>
            <Accordion.Body>
              <Tableau data={auteur.oeuvres} onClicked={(v) => props.onClicked(v)} />
            </Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>
    </>
  );
}

export default Auteurs;