import React, { useEffect, useState } from 'react';
import Livre from './Livre';
function Livres(props) {
  const [asyncLivres, setLivres] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (props.genre && props.genre.genre_id) {

          const response = await fetch('http://restdao/genre?genre_id=' + props.genre.genre_id);
          setLivres(await response.json());

        } else if (props.auteur && props.auteur.auteur_id) {

          const response = await fetch('http://restdao/livre?auteur_id=' + props.auteur.auteur_id);
          setLivres(await response.json());

        } else {

          const response = await fetch('http://restdao/livre');
          setLivres(await response.json());

        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [props]);

  return (
    <>
      <div className="card-deck mx-0">
        {asyncLivres?.map((livre, k) =>
          <Livre key={k} livre={livre} onClicked={(v) => props.onClicked(v)}></Livre>
        )}
      </div>
    </>
  );
}

export default Livres;
