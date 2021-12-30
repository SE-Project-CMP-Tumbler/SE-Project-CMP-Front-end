import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailInputTextField from '../SignUpPage/subcomponents/EmailInputTextField/EmailInputTextField';
import {
  selectUser, selectStatus, selectStatusMessage, forgotPasswordThunk, forgotPasswordThunkR,
} from '../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

const theme = createTheme();

const ForgotPasswordPage = () => {
  const title = 'tumblr';
  const successMessage1 = 'We\'ve sent you an email with instructions to reset your password.';
  const successMessage2 = 'Please make sure it didn\'t wind up in your Junk Mail. If you aren\'t receiving our password reset emails, see our ';
  const message404 = 'Please try again or ';
  const message4042nd = 'register a new account.';
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const message = useSelector(selectStatusMessage);
  const [forgotSent, setForgotSent] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  if (forgotSent === false && status === '200') {
    setForgotSent(true);
  }
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ width: 350 }}
      >
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#001935', height: '100%' },
            a: { display: 'inline' },
          }}
        />
        <Box
          component="form"
          sx={{
            marginTop: 17,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#FFFFFF',
          }}
        >
          <Typography component="h2" color="white" fontSize="4.5rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Box>
        { forgotSent ? (
          <Box>
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
                sx={{
                  paddingY: '7px',
                  paddingX: '20px',
                }}
                component="h2"
                fontSize="0.875rem"
                font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'
              >
                {successMessage1}
              </Typography>
              <Typography
                sx={{
                  paddingY: '7px',
                  paddingX: '20px',
                }}
                component="h2"
                fontSize="0.875rem"
                font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'
              >
                {successMessage2}
                <a
                  style={{
                    color: 'white', fontSize: '14px', textDecoration: 'underline', fontFamily: 'Favorit, Helvetica Neue, HelveticaNeue, Helvetica, Arial, sans-serif',
                  }}
                  href="https://tumblr.zendesk.com/hc/articles/226167067-Resetting-your-password"
                >
                  help documents.
                </a>
              </Typography>
            </Box>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                disableRipple
                disableElevation
                fullWidth
                variant="contained"
                size="large"
                font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                style={{
                  backgroundColor: '#00000054',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: 1,
                  float: 'left',
                }}
                sx={{
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent',
                  },
                }}
              >
                Done
              </Button>
            </Link>
          </Box>
        )
          : (
            <form
              id="forgotPasswordform"
              onSubmit={(e) => {
                e.preventDefault();
                if (SERVICETYPE === MOCK) {
                  dispatch(forgotPasswordThunk({
                    email: user.email,
                  }));
                } else if (SERVICETYPE === REAL) {
                  dispatch(forgotPasswordThunkR({
                    email: user.email,
                  }));
                }
              }}
            >
              <EmailInputTextField />
              { message === '' ? (<Box />)
                : (
                  <Box
                    sx={{
                      borderRadius: 1,
                      marginBottom: 1.2,
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
                    { status === '404' ? (
                      <Typography
                        component="h2"
                        fontSize="0.875rem"
                        font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'
                      >
                        {message404}
                        <Link
                          to="/register"
                          style={{
                            textDecoration: 'underline', color: 'white', textAlign: 'center', fontWeight: 'normal', fontSize: '14px',
                          }}
                        >
                          {message4042nd}
                        </Link>
                      </Typography>
                    )
                      : (<Box />)}
                  </Box>
                )}
              <ReCAPTCHA
                sitekey="6Lf95LsdAAAAAHh_fPk9_5a2Qz1_Fk7166vtyuUa"
                onChange={(/* value */) => {
                  setBtnDisabled(!btnDisabled);
                  // console.log('Captcha value:', value);
                }}
              />
              <Box
                sx={{ spacing: 8, mt: 1 }}
              >
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    disableRipple
                    disableElevation
                    variant="contained"
                    size="large"
                    font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.33)',
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      borderRadius: 1,
                      float: 'left',
                    }}
                    sx={{
                      '&.MuiButtonBase-root:hover': {
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  disableRipple
                  disableElevation
                  variant="contained"
                  size="large"
                  type="submit"
                  disabled={btnDisabled}
                  font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                  style={{
                    backgroundColor: '#ff492f',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderRadius: 1,
                    float: 'right',
                  }}
                >
                  Reset password
                </Button>
              </Box>
            </form>
          )}
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPasswordPage;
