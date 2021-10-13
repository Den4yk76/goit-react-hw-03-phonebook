import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form/Form';
import ContactsList from './ConatctsList/ConatctsList';
import './styles.css';

export default class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      console.log('Обновилось поле contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
          { id: uuidv4(), name: userName, number: userNumber },
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
