function Livre(props) {
  console.log('livre', props);
  return (
    <div className="Livre modal-content rounded-6 shadow">
      <h2 className="fw-bold mb-0">{props.livre.titre}</h2>
      <div className="d-flex gap-4">
        <img loading="lazy" className='float-start' src={props.livre.img} alt={props.livre.titre} />
        <ul className="list-group">
          <li className="list-group-item">An item</li>
        </ul>
      </div>
    </div>
  );
}

export default Livre;
