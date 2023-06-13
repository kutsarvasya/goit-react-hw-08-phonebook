import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { actions } from 'store/contacts/ContactsSlice';

const defaultTheme = createTheme();

export function Filter() {
  const dispatch = useDispatch();

  function changeFilter(evt) {
    dispatch(actions.changeFilter(evt.target.value));
  }

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
          <Typography component="h1" variant="h4">
            Contacts
          </Typography>
          <Typography component="h1" variant="h5">
            <p>Find contacts by name</p>
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="filter"
                  label="Filter"
                  type="filter"
                  id="filter"
                  autoComplete="new-filter"
                  onChange={changeFilter}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
