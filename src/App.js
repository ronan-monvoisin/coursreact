import React from 'react';
import './App.css';
import If from './components/If';
import Nav from './components/Nav';
import Modal from './components/Modal';
import Users from './components/Users';
import Livres from './components/Livres';
import Auteurs from './components/Auteurs';
import Bibliotheque from './components/Bibliotheque';
import Genres from './components/Genres';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
    this.state = {
      menu: {
        users: "Users",
        auteurs: "Auteurs",
        livres: "Livres",
        genre: "Genres",
      },
      page: 'Genres',
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
    } else if (props.genre_id) {
      this.setState({
        modal: {
          title: 'Genre: '+props.nom,
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
        <Nav menu={this.state.menu} page={this.state.page} onClicked={(nav) => this.setPage(nav)} />
        <main className="App container bg-dark rounded pb-2">
          <If condition={(this.state.modal) ? true : false}>
            <Modal title={this.state.modal.title} onClicked={this.setModal}>
              <If condition={(this.state.modal.object && this.state.modal.object.personne_id) ? true : false}>
                <Bibliotheque user={this.state.modal} onClicked={(item) => this.setModal(item)} />
              </If>
              <If condition={(this.state.modal.object && this.state.modal.object.livre_id) ? true : false}>

              </If>

              <If condition={(this.state.modal.object && this.state.modal.object.genre_id) ? true : false}>
                <Livres genre={this.state.modal.object} onClicked={(item) => this.setModal(item)} />
              </If>
            </Modal>
          </If>
          <If condition={this.state.page == 'Auteurs'}>
            <Auteurs onClicked={(truc) => this.setModal(truc)}></Auteurs>
          </If>
          <If condition={this.state.page == 'Genres'}>
            <Genres onClicked={(truc) => this.setModal(truc)}></Genres>
          </If>
          <If condition={this.state.page == 'Livres'}>
            <Livres livre={this.state.modal.object} onClicked={(item) => this.setModal(item)} />
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