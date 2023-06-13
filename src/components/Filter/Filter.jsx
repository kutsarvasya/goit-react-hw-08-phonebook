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

// export default function Login() {
//   const handleSubmit = event => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Login
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="filter"
//                   label="Filter"
//                   type="filter"
//                   id="filter"
//                   autoComplete="new-filter"
//                 />
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }

// import { useDispatch } from 'react-redux';
// import { LabelFilter } from './Filter.styled';
// import { actions } from 'store/contacts/ContactsSlice';

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
