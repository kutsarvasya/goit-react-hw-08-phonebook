import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts } from 'fetchContacts/fetchContacts';

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async data => {
    return await addContacts(data);
  }
);
