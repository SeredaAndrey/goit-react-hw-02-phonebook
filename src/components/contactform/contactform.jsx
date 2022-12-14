import React, { Component } from 'react';
import shortid from 'shortid';
import {
  ContactInputForm,
  LabelForm,
  InputForm,
  AddButon,
} from './contactform.styled';

class ContactForm extends Component {
  state = { name: '', number: '' };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };
  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactInputForm onSubmit={this.handleSubmit}>
        <LabelForm htmlFor={this.nameInputId}>
          Name
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </LabelForm>
        <LabelForm htmlFor={this.numberInputId}>
          Number
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </LabelForm>
        <AddButon type="submit">Add contact</AddButon>
      </ContactInputForm>
    );
  }
}

export default ContactForm;
