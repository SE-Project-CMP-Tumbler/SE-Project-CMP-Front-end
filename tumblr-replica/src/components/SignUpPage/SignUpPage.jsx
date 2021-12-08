import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { GlobalStyles } from '@mui/material';
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
import { setBlogName, selectUser } from '../../states/User/UserSlice';
import background from '../LogOutHomePage/placeholder.jpg';

const theme = createTheme();

const SignUpPage = () => {
  const title = 'tumblr';
  const [blogName, setBlogNameh] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
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
            body: { // backgroundColor: '#001935',
              height: '100%',
              backgroundImage: `url(${background})`,
            },
          }}
        />
        {/* <h2>{user.email}</h2> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#FFFFFF',
          }}
        >
          <Link to="/logout" style={{ textDecoration: 'none' }}>
            <Typography component="h2" color="white" fontSize="4.5rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Link>
        </Box>
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
                // console.log('Inside the onChange Function!');
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
          <SignUpButton />
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

export default SignUpPage;
