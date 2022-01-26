import React from 'react';
import If from './components/If';
import Nav from './components/Nav';
import Modal from './components/Modal';
import Users from './components/Users';
import Livres from './components/Livres';
import Auteurs from './components/Auteurs';
import Livre from './components/Livre';
import Bibliotheque from './components/Bibliotheque';
import Genres from './components/Genres';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
    this.state = {
      menu: { //TODO : async menu
        users: "Users",
        auteurs: "Auteurs",
        livres: "Livres",
        genre: "Genres",
      },
      page: 'Users',
      modal: false
    };
  }

  setModal(props) {

    if (props.livre_id) {

      this.setState({
        modal: {
          type:'livre',
          title: 'Livre: ' + props.titre,
          object: props
        }
      });

    } else if (props.auteur_id) {

      this.setState({
        modal: {
          type:'auteur',
          title: 'Auteur: ' + props.prenom + ' ' + props.nom,
          object: props
        }
      });

    } else if (props.personne_id) {

      this.setState({
        modal: {
          type:'personne',
          title: 'Bibliotheque: ' + props.prenom + ' ' + props.nom,
          object: props
        }
      });

    } else if (props.genre_id) {

      this.setState({
        modal: {
          type:'genre',
          title: 'Genre: ' + props.nom,
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

          {/**
           *   MODALS 
           */}
          <If condition={(this.state.modal) ? true : false}>
            <Modal title={this.state.modal.title} onClicked={this.setModal}>

              <If condition={(this.state.modal.object && this.state.modal.type === 'personne') ? true : false}>
                <Bibliotheque user={this.state.modal} onClicked={(item) => this.setModal(item)} />
              </If>

              <If condition={(this.state.modal.object && this.state.modal.type === 'livre') ? true : false}>
                <Livre livre={this.state.modal.object} onClicked={(item) => this.setModal(item)} />
              </If>

              <If condition={(this.state.modal.object && this.state.modal.type === 'auteur') ? true : false}>
                <Livres auteur={this.state.modal.object} onClicked={(item) => this.setModal(item)} />
              </If>

              <If condition={(this.state.modal.object && this.state.modal.type === 'genre') ? true : false}>
                <Livres genre={this.state.modal.object} onClicked={(item) => this.setModal(item)} />
              </If>

            </Modal>
          </If>
          
          {/**
           *   PAGES 
           */}
          <h1>{this.state.page}</h1>

          <If condition={this.state.page === 'Auteurs'}>
            <Auteurs onClicked={(truc) => this.setModal(truc)} />
          </If>

          <If condition={this.state.page === 'Genres'}>
            <Genres onClicked={(truc) => this.setModal(truc)} />
          </If>

          <If condition={this.state.page === 'Livres'}>
            <Livres livre={this.state.modal.object} onClicked={(item) => this.setModal(item)} />
          </If>

          <If condition={this.state.page === 'Users'}>
            <Users onClicked={(truc) => this.setModal(truc)} />
          </If>

        </main>
      </>
    );
  }
}
export default App;