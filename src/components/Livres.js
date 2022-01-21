import React, { useEffect, useState } from 'react';
import LivreCard from './LivreCard';
function Livres(props) {
  const [asyncLivres, setLivres] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        if (props.genre && props.genre.genre_id) {
          const response = await fetch('http://restdao/genre?genre_id=' + props.genre.genre_id);
          const json = await response.json();
          setLivres(json);
        } else {
          const response = await fetch('http://restdao/livre');
          const json = await response.json();
          setLivres(json);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [props]);
  return (
    <>
      <h1>Livres{(props.genre && props.genre.nom) ? ': ' + props.genre.nom : ''}</h1>
      <div className="card-deck mx-0">
        {asyncLivres?.map((livre, k) =>
          <LivreCard key={k} livre={livre} onClicked={(v) => props.onClicked(v)}></LivreCard>
        )}
      </div>
    </>
  );
}

export default Livres;
