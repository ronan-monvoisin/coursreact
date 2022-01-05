function Modal(props) {
  return (
    <>
      <div className="modal d-flex pe-none">
        <div className="modal-dialog">
          <div className="modal-content pe-auto">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={props.onClicked}></button>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
          </div>
        </div>
      </div>
        <div className="modal-backdrop" onClick={props.onClicked}></div>
    </>
  );
}

export default Modal;
