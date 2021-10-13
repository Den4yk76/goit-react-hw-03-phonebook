import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactsListItem extends Component {
  render() {
    const { contacts } = this.props;

    return contacts.map(el => {
      return (
        <li key={el.id}>
          {el.name}: {el.number}
          <button
            className="button"
            type="button"
            id={el.id}
            onClick={this.props.deleteContact}
          >
            Delete
          </button>
        </li>
      );
    });
  }
}

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
