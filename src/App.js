import React from 'react';
import './App.css';
import If from './components/If';
import Modal from './components/Modal';
import Users from './components/Users';
import Livre from './components/Livre';
import Bibliotheque from './components/Bibliotheque';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
    this.state = {
      page: 'users',
      modal: false
    };
  }
  setModal(props) {
    console.log('setModal', props);
    if (props.personne_id) {
      this.setState({
        modal: {
          title: props.prenom + ' ' + props.nom,
          object: props
        }
      });
    } else if (props.livre_id) {
      this.setState({
        modal: {
          title: props.titre,
          object: props
        }
      });
    } else {
      this.setState({ modal: false });
    }
  }
  setPage(props) {
    this.setState({ page: props });
  }
  render() {
    return (
      <main className="App">
        <If condition={(this.state.modal) ? true : false}>
          <Modal title={this.state.modal.title} onClicked={this.setModal}>
            <If condition={(this.state.modal.object && this.state.modal.object.personne_id) ? true : false}>
              <Bibliotheque user={this.state.modal} onClicked={(item) => this.setModal(item)} />
            </If>
            <If condition={(this.state.modal.object && this.state.modal.object.livre_id) ? true : false}>
              <Livre livre={this.state.modal.object} />
            </If>
          </Modal>
        </If>
        <If condition={this.state.page == 'users'}>
          <Users onClicked={(truc) => this.setModal(truc)}></Users>
        </If>
      </main>
    );
  }
}
export default App;