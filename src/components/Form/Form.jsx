// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'store/contacts/addContact';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MuiTelInput } from 'mui-tel-input';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const defaultTheme = createTheme();

export function Form() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts.contacts);
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const { user } = useSelector(state => state.auth);
  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!user) {
      NotificationManager.success('PLEASE LOG IN');

      return;
    }
    if (name.length < 4 || number.length < 4) return;
    const data = {
      name: name,
      number: number,
    };

    items.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? NotificationManager.success(data.name + 'is already in contacts')
      : dispatch(addContactsThunk(data));
    setName('');
    setNumber('');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Phonebook
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  type="text"
                  id="name"
                  autoComplete="new-text"
                  onChange={handleChangeName}
                  value={name}
                />
              </Grid>
              <Grid item xs={12}>
                <MuiTelInput
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="new-phone"
                  value={number}
                  onChange={handleChangeNumber}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SAVE
            </Button>
          </Box>
        </Box>
      </Container>
      <NotificationContainer />
    </ThemeProvider>
  );
}
