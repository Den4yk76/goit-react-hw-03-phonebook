import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  onChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <label className="label">
          Name{' '}
          <input
            value={this.state.name}
            className="label"
            type="text"
            name="name"
            onChange={this.onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className="label">
          Phone{' '}
          <input
            value={this.state.number}
            className="label"
            type="tel"
            name="number"
            onChange={this.onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  addContact: PropTypes.func,
};
