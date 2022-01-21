import React, { useEffect, useState } from 'react';
import LivreCard from './LivreCard';
function Livres() {
  const [asyncLivres, setLivres] = useState([]);
  const GetLivres = async () => {
    try {
      const response = await fetch('http://restdao/livre');
      const json = await response.json();
      setLivres(json);
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(false);
    }
  }
  useEffect(() => {
    GetLivres();
  }, []);
  function ListLivres(props) {
    return <div className="card-deck mx-0">
      {props.livres.map((livre, k) =>
        <LivreCard key={k} livre={livre}></LivreCard>
      )}
    </div>
  }
  return (
    <>
      <h1>Livres</h1>
      <ListLivres livres={asyncLivres} />
    </>
  );
}

export default Livres;
