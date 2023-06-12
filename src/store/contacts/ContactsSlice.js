import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContactsThunk } from './getContactsThunk';
import { deleteContactsThunk } from './deleteContact';
import { addContactsThunk } from './addContact';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleFulfilledGet = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = payload;
  state.contacts.error = '';
};
const handleFulfilledAdd = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(payload);
  state.contacts.error = '';
};
const handleFulfilledDelete = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    el => el.id !== payload.id
  );
  state.contacts.error = '';
};
const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: { items: [], isLoading: false, error: null },
    filter: '',
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },

  extraReducers: builder => {
    builder

      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          deleteContactsThunk.pending,
          addContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          deleteContactsThunk.rejected,
          addContactsThunk.rejected
        ),
        handleRejected
      );
  },
});

export default contactsSlice.reducer;

export const { actions } = contactsSlice;
