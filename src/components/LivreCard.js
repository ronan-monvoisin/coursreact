function LivreCard(props) {
  const livre = props.livre;
  return (
    <div className="col">
      <div className="Livre card">
        <img loading="lazy" className='cord-img-top' src={livre.img} alt={livre.titre} />
        <div className="card-body">
          <h5 className="card-title">{livre.titre}</h5>
          <div className="align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Voir</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Editer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivreCard;
