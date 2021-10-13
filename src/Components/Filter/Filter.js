import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  findUsers = () => {
    const { contacts, filter } = this.props.state;

    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    return this.findUsers().map(el => {
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

Filter.propTypes = { state: PropTypes.object };
