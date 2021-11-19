import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogInButton from '../LogInButton/LogInButton';
import ContinueWithGoogleButton from '../ContinueWithGoogleButton/ContinueWithGoogleButton';

const theme = createTheme();

export default function LogOutHome() {
  const title = 'tumblr';
  const text1 = 'Forgot your password?';
  const text2 = 'New to Tumblr? ';
  const text3 = 'Sign up!';
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ width: 320 }}
      >
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#001935', height: '100%' },
          }}
        />
        <Box
          fullWidth
          component="form"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#FFFFFF',
          }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography component="h2" color="white" fontSize="4.5rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Link>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <LogInButton />
          <Link to="/forgot_password" style={{ textDecoration: 'none' }}>
            <Typography component="h4" color="white" fontSize="1rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
              {text1}
            </Typography>
          </Link>
          <Divider
            variant="fullWidth"
            sx={{ spacing: 8, mt: 1 }}
            style={{
              color: '#FFFFFF',
              textTransform: 'none',
              borderColor: '#FFFFFF',
            }}
          >
            or
          </Divider>
          <ContinueWithGoogleButton />
          <Typography component="h4" color="white" fontSize="1rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
            {text2}
            <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
              {text3}
            </Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
