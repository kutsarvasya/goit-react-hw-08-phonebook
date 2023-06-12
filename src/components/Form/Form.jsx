import React, { useState } from 'react';
import { BtnSubmit, FormContacts, LabelForm } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'store/contacts/addContact';

export function Form() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: name,
      number: number,
    };

    items.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(data.name + 'is already in contacts')
      : dispatch(addContactsThunk(data));
    setName('');
    setNumber('');
  };

  return (
    <FormContacts onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <input
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelForm>

      <LabelForm>
        Number
        <input
          onChange={handleChangeNumber}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelForm>
      <BtnSubmit type="submit">add contacts</BtnSubmit>
    </FormContacts>
  );
}
