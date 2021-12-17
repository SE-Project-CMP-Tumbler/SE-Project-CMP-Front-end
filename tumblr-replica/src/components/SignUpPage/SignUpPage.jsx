import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUpButton from '../LogOutHomePage/subcomponents/SignUpButton/SignUpButton';
import ContinueWithGoogleButton from '../LogOutHomePage/subcomponents/ContinueWithGoogleButton/ContinueWithGoogleButton';
import HereIsWhatIsTrendingButton from '../LogOutHomePage/subcomponents/HereIsWhatIsTrendingButton/HereIsWhatIsTrendingButton';
import EmailInputTextField from './subcomponents/EmailInputTextField/EmailInputTextField';
import PasswordInputTextField from './subcomponents/PasswordInputTextField/PasswordInputTextField';
import {
  setBlogName, setAge, selectUser, selectStep, signUpThunk, signUpThunkR,
  checkCredentialsThunk, checkCredentialsThunkR,
} from '../../states/User/UserSlice';
import background from '../LogOutHomePage/placeholder.jpg';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

const theme = createTheme();

const SignUpPage = () => {
  const title = 'tumblr';
  const [blogName, setBlogNameh] = useState('');
  const [age, setAgeh] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const step = useSelector(selectStep);
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
          { step === 1 ? (
            <form
              id="signupform1"
              onSubmit={(e) => {
                e.preventDefault();
                if (SERVICETYPE === MOCK) {
                  dispatch(checkCredentialsThunk({
                    email: user.email,
                    blog_username: user.blogName,
                    password: user.password,
                  }));
                } else if (SERVICETYPE === REAL) {
                  dispatch(checkCredentialsThunkR({
                    email: user.email,
                    blog_username: user.blogName,
                    password: user.password,
                  }));
                }
              }}
            >
              <Box>
                <EmailInputTextField />
                <PasswordInputTextField />
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
                <SignUpButton worksAsLink={false} />
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
              </Box>
            </form>

          ) : (
            <form
              id="signupform2"
              onSubmit={(e) => {
                e.preventDefault();
                if (SERVICETYPE === MOCK) {
                  dispatch(signUpThunk({
                    email: user.email,
                    blog_username: user.blogName,
                    password: user.password,
                    age: user.age,
                  }));
                } else if (SERVICETYPE === REAL) {
                  dispatch(signUpThunkR({
                    email: user.email,
                    blog_username: user.blogName,
                    password: user.password,
                    age: user.age,
                  }));
                }
              }}
            >
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
          )}
          <HereIsWhatIsTrendingButton />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUpPage;
