import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HereIsWhatIsTrendingButton from '../LogOutHomePage/subcomponents/HereIsWhatIsTrendingButton/HereIsWhatIsTrendingButton';
import PasswordInputTextField from '../SignUpPage/subcomponents/PasswordInputTextField/PasswordInputTextField';
import { selectUser, checkCredentialsThunk, checkCredentialsThunkR } from '../../states/User/UserSlice';
import background from '../LogOutHomePage/placeholder.jpg';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

const theme = createTheme();

const SignUpPage = () => {
  const title = 'tumblr';
  const text1 = 'Looks like your account already exists.';
  const text2 = 'Please enter your password to link your account. If you forgot your password or don\'t have one for your account, click ';
  const text3 = ' to reset your password.';
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
            id="linkaccountform"
            onSubmit={(e) => {
              e.preventDefault();
              if (SERVICETYPE === MOCK) {
                // Will be changed later
                dispatch(checkCredentialsThunk({
                  email: user.email,
                  blog_username: user.blogName,
                  password: user.password,
                }));
              } else if (SERVICETYPE === REAL) {
                // Will be changed later
                dispatch(checkCredentialsThunkR({
                  email: user.email,
                  blog_username: user.blogName,
                  password: user.password,
                }));
              }
            }}
          >
            <Box>
              <Box
                sx={{
                  marginTop: 1,
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
                  {text1}
                </Typography>
                <Typography
                  component="h2"
                  fontSize="0.875rem"
                  font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'
                >
                  {text2}
                  <Link to="/forgot_password" style={{ textDecoration: 'underline', color: '#FFFFFF' }}>here</Link>
                  {text3}
                </Typography>
              </Box>
              <PasswordInputTextField />
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
                  Link Account
                </Button>
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <Button
                  fullWidth
                  disableRipple
                  variant="contained"
                  size="large"
                  font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                  style={{
                    backgroundColor: '#00cf35', color: '#000000', fontWeight: 'bold', textTransform: 'none',
                  }}
                  sx={{
                    spacing: 8, mt: 1.5, mr: 1, ml: 1, mb: 1,
                  }}
                  type="submit"
                >
                  Go Back
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

export default SignUpPage;
