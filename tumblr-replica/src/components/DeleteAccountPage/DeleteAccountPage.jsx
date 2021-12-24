import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailInputTextField from '../SignUpPage/subcomponents/EmailInputTextField/EmailInputTextField';
import PasswordInputTextField from '../SignUpPage/subcomponents/PasswordInputTextField/PasswordInputTextField';
import SignUpButton from '../LogOutHomePage/subcomponents/SignUpButton/SignUpButton';
import { selectUser, deleteAccountThunk, deleteAccountThunkR } from '../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

const theme = createTheme();

const DeleteAccountPage = () => {
  const title = 'Now just a minute.';
  const message = 'Are you sure you want to delete your whole account? You’ll lose access to everything. All of your blogs, original posts, themes, the love we shared, likes, and messages. This can’t be undone.';
  const note = 'If you’re sure, confirm by logging in below.';
  const gone = 'It’s gone.';
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <ThemeProvider theme={theme}>
      {user.loggedin ? (
        <Container
          sx={{ width: 345, alignItems: 'center' }}
        >
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: { backgroundColor: '#001935', height: '100%' },
            }}
          />
          <Box
            component="div"
            sx={{
              marginTop: 17,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#FFFFFF',
              width: 345,
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            <Typography component="h2" color="white" fontSize="1.625rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography component="h2" color="#FFFFFFBF" fontSize="1rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
              {message}
            </Typography>
            <Typography component="h2" color="#FFFFFFBF" fontSize="1rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
              {note}
            </Typography>
          </Box>
          <Box
            sx={{ width: 345 }}
          >
            <form
              id="deleteaccountform"
              onSubmit={(e) => {
                e.preventDefault();
                if (SERVICETYPE === MOCK) {
                  dispatch(deleteAccountThunk({
                    accessToken: user.accessToken,
                    body: {
                      email: user.email,
                      password: user.password,
                    },
                  }));
                } else if (SERVICETYPE === REAL) {
                  console.log({
                    accessToken: user.accessToken,
                    body: {
                      email: user.email,
                      password: user.password,
                    },
                  });
                  dispatch(deleteAccountThunkR({
                    accessToken: user.accessToken,
                    body: {
                      email: user.email,
                      password: user.password,
                    },
                  }));
                }
              }}
            >
              <Box sx={{
                mx: 5.313,
              }}
              >
                <EmailInputTextField marginOff />
                <PasswordInputTextField />
                <Button
                  disableRipple
                  disableElevation
                  fullWidth
                  variant="contained"
                  size="large"
                  font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                  style={{
                    backgroundColor: '#ff492f',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderRadius: 2,
                  }}
                  type="submit"
                >
                  Delete everything
                </Button>
                <Link to="/settings/account" style={{ textDecoration: 'underline', color: 'white', textAlign: 'center' }}>
                  <Typography component="h2" fontSize="0.875rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ m: 1.875 }}>
                    Nevermind
                  </Typography>
                </Link>
              </Box>
            </form>
          </Box>
        </Container>
      ) : (
        <Container
          sx={{ alignItems: 'center', width: 340 }}
        >
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: {
                // TO DO: Fix page centering vertically
                backgroundColor: '#001935',
                textAlign: 'center',
                verticalAlign: 'center',
              },
            }}
          />
          <Box
            component="div"
            sx={{
              display: 'inline-block',
              color: '#FFFFFF',
              textAlign: 'center',
              padding: 2.5,
              height: 144,
            }}
          >
            <Typography component="h2" color="white" fontSize="1.625rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
              {gone}
            </Typography>
            <Box sx={{ width: 260 }}>
              <SignUpButton again />
            </Box>
          </Box>
        </Container>
      )}
    </ThemeProvider>
  );
};

export default DeleteAccountPage;
