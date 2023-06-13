import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/ContactsSlice';
import { authReducer } from './auth/authSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});
