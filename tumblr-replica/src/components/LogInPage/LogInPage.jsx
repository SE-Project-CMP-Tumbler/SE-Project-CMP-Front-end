import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogInButton from '../LogOutHomePage/subcomponents/LogInButton/LogInButton';
import ContinueWithGoogleButton from '../LogOutHomePage/subcomponents/ContinueWithGoogleButton/ContinueWithGoogleButton';
import EmailInputTextField from '../SignUpPage/subcomponents/EmailInputTextField/EmailInputTextField';
import PasswordInputTextField from '../SignUpPage/subcomponents/PasswordInputTextField/PasswordInputTextField';
import background from '../LogOutHomePage/placeholder.jpg';
import {
  selectUser, selectStatusMessage, logInThunk, logInThunkR, setStatusMessage,
} from '../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

const theme = createTheme();

const LogInPage = () => {
  const title = 'tumblr';
  const text1 = 'Forgot your password?';
  const text2 = 'New to Tumblr? ';
  const text3 = 'Sign up!';
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const message = useSelector(selectStatusMessage);
  useEffect(() => {
    dispatch(setStatusMessage());
  }, []);
  if (user.loggedIn === true) {
    return <Navigate to="/dashboard" />;
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
            a: { display: 'inline' },
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
        </Box>
        <Box component="div">
          <form
            id="loginform"
            onSubmit={(e) => {
              e.preventDefault();
              if (SERVICETYPE === MOCK) {
                dispatch(logInThunk({
                  email: user.email,
                  password: user.password,
                }));
              } else if (SERVICETYPE === REAL) {
                dispatch(logInThunkR({
                  email: user.email,
                  password: user.password,
                }));
              }
            }}
          >
            { message === '' ? (<Box />)
              : (
                <Box
                  sx={{
                    borderRadius: 1,
                    marginBottom: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: '#FFFFFF',
                    padding: '14px 15px',
                    backgroundColor: '#00000040',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    font: '"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="0.875rem"
                    font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'
                  >
                    {message}
                  </Typography>
                </Box>
              )}
            <EmailInputTextField />
            <PasswordInputTextField />
            <LogInButton worksAsLink={false} bgColor="#00b8ff" />
            <Box sx={{
              marginTop: 0.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
              <Link to="/forgot_password" style={{ textDecoration: 'none', alignItems: 'center' }}>
                <Typography component="h4" color="white" fontSize="1rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
                  {text1}
                </Typography>
              </Link>
            </Box>
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
            <Box sx={{
              marginTop: 0.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
              <Typography component="h4" color="white" fontSize="1rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
                {text2}
                <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                  {text3}
                </Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogInPage;
