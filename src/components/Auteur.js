function Auteur(props) {
  console.log('auteur', props);
  return (
    <div className="accordion-item">
      <input type="radio" id={props.auteur.prenom + props.auteur.nom} name="auteurs" class="d-none accordion-input" checked />
      <label for={props.auteur.prenom + props.auteur.nom} className="d-block">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button">
            {props.auteur.prenom} {props.auteur.nom}
          </button>
        </h2>
      </label>
      <div className="accordion-collapse">
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  );
}

export default Auteur;
