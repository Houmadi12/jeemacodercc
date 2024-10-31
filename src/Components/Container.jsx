import React from 'react';
import FormAdd from './FormAdd';
import Tableau from './Tableau';

class Container extends React.Component {
  constructor(props) {
    super(props);
    
    // Initialize state in the constructor
    this.state = {
      users: [],
      messageErreur: ""
    };
  }

  // Equivalent to useEffect with empty dependency array
  componentDidMount() {
    const reccup = JSON.parse(localStorage.getItem("users"));

    if (reccup) {
      this.setState({ users: reccup });
    }
  }

  // Ajouter un User
  addNewUser = (newUser) => {
    const updateUsers = [...this.state.users, newUser];
    this.setState({ 
      users: updateUsers 
    }, () => {
    //   Rappel pour garantir que l'état est mis à jour avant localStorage
      localStorage.setItem('users', JSON.stringify(updateUsers));
    });
  }

  errMessage = (message) => {
    this.setState({ messageErreur: message });
  }

  deleteUser = (index) => {
    // Suppression d'un élément tableau
    const updateUsers = this.state.users.filter((_, indice) => indice !== index);
    this.setState({ 
      users: updateUsers 
    }, () => {
      // Callback to ensure state is updated before localStorage
      localStorage.setItem('users', JSON.stringify(updateUsers));
    });
  }

  render() {
    const { users, messageErreur } = this.state;

    return (
      <div className="w-full justify-center h-screen pt-8">
        <h1 className="text-center font-medium">Jeemacoder gestion utilisateurs</h1>
        {/* Formulaire */}
        <div className="flex w-7/10 justify-center pt-3">
          <FormAdd 
            onSubmit={this.addNewUser} 
            users={users} 
            err={this.errMessage} 
          />
          {/* Uncomment if you want to display error message
          {messageErreur && (
            <div>{messageErreur}</div>
          )}
          */}
        </div>
        <div className='w-full px-0 sm:px-10 ms:px-32 pt-8'>
          <Tableau 
            users={users} 
            onclick={this.deleteUser} 
          />
        </div>
      </div>
    );
  }
}

export default Container;