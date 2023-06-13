import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { signUpThunk } from 'store/auth/authThunk';
import { useNavigate } from 'react-router-dom';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate('');
  const dispatch = useDispatch();
  const { token, error } = useSelector(state => state.auth);
  React.useEffect(() => {
    token && navigate('/');
  }, [token, navigate]);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
    dispatch(signUpThunk(user));
    navigate('/');
  };

  return (
    <>
      {error && NotificationManager.error(error)}
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
        <NotificationContainer />
      </ThemeProvider>
    </>
  );
}

// function SignUp() {
//   return (
//     <div>
//       <h1>Sing Up</h1>
//       <form>
//         <label htmlFor="inputSingUpEmail">Email</label>
//         <input name="email" type="email" id="inputSingUpEmail" />
//         <label htmlFor="inputSingUpPassword">Password</label>
//         <input name="password" type="password" id="inputSingUpPassword" />
//         <button>SingUp</button>
//       </form>
//     </div>
//   );
// }
// export default SignUp;
