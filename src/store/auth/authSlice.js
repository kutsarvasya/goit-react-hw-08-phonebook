import { loginThunk, signUpThunk } from './authThunk';

const { createSlice } = require('@reduxjs/toolkit');
const handlePending = (state, { payload }) => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.user = payload.user;
};
const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: '',
    isLoading: false,
    error: '',
  },
  reducers: {
    logOut: state => {
      state.user = null;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handlePending)
      .addCase(signUpThunk.fulfilled, handleFulfilled)
      .addCase(signUpThunk.rejected, handleRejected)
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { actions } = authSlice;
