import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'fetchContacts/fetchContacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);
