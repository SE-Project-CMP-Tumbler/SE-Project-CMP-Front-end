import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HereIsWhatIsTrendingButton from '../LogOutHomePage/subcomponents/HereIsWhatIsTrendingButton/HereIsWhatIsTrendingButton';
import {
  setBlogName, setAge, selectUser, registerWithGoogleThunk, registerWithGoogleThunkR,
  selectStatusMessage, setStatusMessage,
} from '../../states/User/UserSlice';
import background from '../LogOutHomePage/placeholder.jpg';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

const theme = createTheme();

const RegisterWithGooglePage = () => {
  const title = 'tumblr';
  const [blogName, setBlogNameh] = useState('');
  const [age, setAgeh] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const message = useSelector(selectStatusMessage);
  useEffect(() => {
    dispatch(setStatusMessage());
  }, []);
  if (user.loggedIn === true) {
    window.location.replace('/dashboard');
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
        </Box>
        <Box component="div">
          <form
            id="registerwithgoogleform"
            onSubmit={(e) => {
              e.preventDefault();
              if (SERVICETYPE === MOCK) {
                dispatch(registerWithGoogleThunk({
                  google_access_token: user.googleAccessToken,
                  blog_username: user.blogName,
                  age: user.age,
                }));
              } else if (SERVICETYPE === REAL) {
                dispatch(registerWithGoogleThunkR({
                  google_access_token: user.googleAccessToken,
                  blog_username: user.blogName,
                  age: user.age,
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
            <Box fullWidth sx={{ mb: 1 }}>
              <TextField
                id="blog-name"
                type="text"
                placeholder="Blog name"
                value={blogName}
                onChange={(e) => {
                  setBlogNameh(e.target.value);
                  dispatch(setBlogName(e.target.value));
                }}
                variant="outlined"
                fullWidth
                autoComplete="off"
                style={{
                  backgroundColor: '#E8F0FE',
                  borderRadius: 3,
                  fontSize: '1rem',
                  border: 'none',
                }}
                inputProps={{
                  style: {
                    padding: '11px 13px',
                    // TO DO: Later remove the hover and focus effects
                  },
                }}
              />
            </Box>
            <Box fullWidth sx={{ mb: 1 }}>
              <TextField
                id="age"
                type="number"
                placeholder="How old are you?"
                value={age}
                autoFocus
                onChange={(e) => {
                  setAgeh(e.target.value);
                  dispatch(setAge(e.target.value));
                }}
                variant="outlined"
                fullWidth
                autoComplete="off"
                style={{
                  backgroundColor: '#E8F0FE',
                  borderRadius: 3,
                  fontSize: '1rem',
                  border: 'none',
                }}
                inputProps={{
                  style: {
                    padding: '11px 13px',
                    // TO DO: Later remove the hover and focus effects
                  },
                }}
              />
              <Box sx={{ marginTop: 1 }}>
                <Button
                  fullWidth
                  disableRipple
                  variant="contained"
                  size="large"
                  font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                  style={{
                    backgroundColor: '#00b8ff', color: '#000000', fontWeight: 'bold', textTransform: 'none',
                  }}
                  sx={{
                    spacing: 8, mt: 1.5, mr: 1, ml: 1, mb: 1,
                  }}
                  type="submit"
                >
                  Next
                </Button>
              </Box>
            </Box>
          </form>
          <HereIsWhatIsTrendingButton />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterWithGooglePage;
