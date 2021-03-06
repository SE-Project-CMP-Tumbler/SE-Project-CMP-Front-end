import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogInButton from './subcomponents/LogInButton/LogInButton';
import SignUpButton from './subcomponents/SignUpButton/SignUpButton';
import ContinueWithGoogleButton from './subcomponents/ContinueWithGoogleButton/ContinueWithGoogleButton';
import HereIsWhatIsTrendingButton from './subcomponents/HereIsWhatIsTrendingButton/HereIsWhatIsTrendingButton';
import background from './placeholder.jpg';

const theme = createTheme();

const LogOutHomePage = () => {
  const title = 'tumblr';
  const subTitle = 'Make stuff, look at stuff, talk about stuff, find your people.';
  const loggedInUser = localStorage.getItem('user');
  if (loggedInUser) {
    const foundUser = JSON.parse(loggedInUser);
    if (foundUser.loggedin === true) {
      return <Navigate to="/dashboard" />;
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ width: 320 }}
      >
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: '#001935',
              height: '100%',
              backgroundImage: `url(${background})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            },
          }}
        />
        <Box
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
          <Typography component="h2" fontSize="1.3125rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
            {subTitle}
          </Typography>
        </Box>
        <Box>
          <SignUpButton />
          <LogInButton />
          <Divider
            variant="fullWidth"
            sx={{
              spacing: 8,
              mt: 1,
              '&.MuiDivider-root': {
                '&::before': {
                  borderTop: 'thin solid #FFFFFF',
                },
                '&::after': {
                  borderTop: 'thin solid #FFFFFF',
                },
              },
            }}
            style={{
              color: '#FFFFFF',
              textTransform: 'none',
              borderColor: '#FFFFFF',
            }}
          >
            or
          </Divider>
          <ContinueWithGoogleButton />
          <HereIsWhatIsTrendingButton />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogOutHomePage;
