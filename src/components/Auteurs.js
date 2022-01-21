import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Tableau from './Tableau';

function Auteurs(props) {
  const [asyncAuteurs, setAuteurs] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://restdao/auteur');
        const json = await response.json();
        let allauteurs = [];
        json.forEach(auteur => {
          if (!allauteurs[auteur.auteur_id]) {
            allauteurs[auteur.auteur_id] = {
              id: auteur.auteur_id,
              nom: auteur.nom,
              prenom: auteur.prenom
            }
          }
          if (!allauteurs[auteur.auteur_id].oeuvres) {
            allauteurs[auteur.auteur_id].oeuvres = [];
          }
          allauteurs[auteur.auteur_id].oeuvres.push({
            livre_id: auteur.livre_id,
            img: (auteur.img != 'null') ? <img src={auteur.img} width="100px" /> : '',
            titre: auteur.titre,
            tome: auteur.tome,
            saga: auteur.saga,
            auteur_id:auteur.auteur_id
          })
        });
        setAuteurs(allauteurs);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      <h1>Auteurs</h1>
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