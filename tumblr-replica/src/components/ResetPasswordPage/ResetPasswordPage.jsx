import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import EmailInputTextField from '../SignUpPage/subcomponents/EmailInputTextField/EmailInputTextField';
import PasswordInputTextField from '../SignUpPage/subcomponents/PasswordInputTextField/PasswordInputTextField';
import {
  selectUser, selectResetEmailReceived, getResetPasswordEmailThunk, getResetPasswordEmailThunkR,
  selectStatusMessage, resetPasswordThunk, resetPasswordThunkR,
} from '../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

const theme = createTheme();

const ResetPasswordPage = () => {
  const title = 'tumblr';
  const params = useParams();
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const message = useSelector(selectStatusMessage);
  const resetEmailReceived = useSelector(selectResetEmailReceived);
  if (user.email === '' && resetEmailReceived === false) {
    if (SERVICETYPE === MOCK) {
      dispatch(getResetPasswordEmailThunk({
        id: params.id,
        token: params.token,
      }));
    } else if (SERVICETYPE === REAL) {
      dispatch(getResetPasswordEmailThunkR({
        id: params.id,
        token: params.token,
      }));
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ width: 345 }}
      >
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#001935', height: '100%' },
          }}
        />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#FFFFFF',
            width: 360,
          }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography component="h2" color="white" fontSize="4.5rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{ width: 360 }}
        >
          <form
            id="resetpasswordform"
            onSubmit={(e) => {
              e.preventDefault();
              if (SERVICETYPE === MOCK) {
                dispatch(resetPasswordThunk({
                  token: params.token,
                  email: user.email,
                  password: user.password,
                  password_confirmation: confirmPassword,
                }));
              } else if (SERVICETYPE === REAL) {
                dispatch(resetPasswordThunkR({
                  token: params.token,
                  email: user.email,
                  password: user.password,
                  password_confirmation: confirmPassword,
                }));
              }
            }}
          >
            <Box sx={{
              mx: 5.313,
            }}
            >
              <EmailInputTextField marginOff readonly />
              <PasswordInputTextField marginOff newPassword />
              <Box fullWidth sx={{ mb: 2.5 }}>
                <TextField
                  id="password_confirm"
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  variant="outlined"
                  fullWidth
                  autoComplete="current-password"
                  disableRipple
                  disableElevation
                  style={{
                    backgroundColor: '#FFFFFF', // '#E8F0FE',
                    borderRadius: 3,
                    fontSize: '1rem',
                    border: 'none',
                  }}
                  inputProps={{
                    style: {
                      padding: '11px 13px',
                    },
                  }}
                />
              </Box>
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
              <Button
                disableRipple
                disableElevation
                fullWidth
                variant="contained"
                size="large"
                fontFamily="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif"
                style={{
                  backgroundColor: '#FFFFFF40',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: 2,
                }}
                type="submit"
              >
                Set new password
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ResetPasswordPage;
