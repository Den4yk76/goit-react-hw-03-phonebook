import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form/Form';
import ContactsList from './ConatctsList/ConatctsList';
import './styles.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = (userName, userNumber) => {
    const contactsArr = [];
    this.state.contacts.forEach(el => {
      contactsArr.push(el.name, el.number);
    });
    if (contactsArr.includes(userNumber || userName.toLowerCase())) {
      return alert('This person or number is already in contacts');
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { name: userName, id: uuidv4(), number: userNumber },
        ],
      }));
    }
  };

  findContact = name => {
    this.setState({ filter: name });
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== e.target.id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList
          state={this.state}
          findContact={this.findContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
