import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';
import Filter from '../Filter/Filter';

export default class ContactsList extends Component {
  onChange = e => {
    this.props.findContact(e.currentTarget.value);
  };

  render() {
    const { filter } = this.props.state;

    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="name"
          onChange={this.onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <ul>
          {!filter ? (
            <ContactsListItem
              contacts={this.props.state.contacts}
              deleteContact={this.props.deleteContact}
            />
          ) : (
            <Filter
              state={this.props.state}
              deleteContact={this.props.deleteContact}
            />
          )}
        </ul>
      </>
    );
  }
}

ContactsList.propTypes = {
  state: PropTypes.object,
  findContact: PropTypes.func,
  deleteContact: PropTypes.func,
};
