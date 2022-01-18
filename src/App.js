import React from 'react';
import './App.css';
import If from './components/If';
import Nav from './components/Nav';
import Modal from './components/Modal';
import Users from './components/Users';
import Livres from './components/Livres';
import Bibliotheque from './components/Bibliotheque';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
    this.state = {
      menu: {
        users:"Users",
        livres:"Livres",
        auteurs:"Auteurs"
      },
      page: 'Livres',
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
      <>
        <Nav menu={ this.state.menu } page={this.state.page} onClicked={(nav) => this.setPage(nav)}/>
        <main className="App container">
          <If condition={(this.state.modal) ? true : false}>
            <Modal title={this.state.modal.title} onClicked={this.setModal}>
              <If condition={(this.state.modal.object && this.state.modal.object.personne_id) ? true : false}>
                <Bibliotheque user={this.state.modal} onClicked={(item) => this.setModal(item)} />
              </If>
              <If condition={(this.state.modal.object && this.state.modal.object.livre_id) ? true : false}>
                
              </If>
            </Modal>
          </If>
          <If condition={this.state.page == 'Auteurs'}>
            <Users onClicked={(truc) => this.setModal(truc)}></Users>
          </If>
          <If condition={this.state.page == 'Livres'}>
            <Livres livre={this.state.modal.object} />
          </If>
          <If condition={this.state.page == 'Users'}>
            <Users onClicked={(truc) => this.setModal(truc)}></Users>
          </If>
        </main>
      </>
    );
  }
}
export default App;