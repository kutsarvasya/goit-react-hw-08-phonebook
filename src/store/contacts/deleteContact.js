import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContacts } from 'fetchContacts/fetchContacts';

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContacts(id);
  }
);
