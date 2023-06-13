import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLogin, getSignUp } from 'fetchContacts/usersApi';

export const signUpThunk = createAsyncThunk('auth/singUp', async body => {
  return await getSignUp(body);
});

export const loginThunk = createAsyncThunk('auth/login', async body => {
  return await getLogin(body);
});
