import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailInputTextField from '../SignUpPage/subcomponents/EmailInputTextField/EmailInputTextField';
import PasswordInputTextField from '../SignUpPage/subcomponents/PasswordInputTextField/PasswordInputTextField';
import SettingsSideMenu from './subcomponents/SettingsSideMenu/SettingsSideMenu';
import {
  selectUser, initialCheck, selectStatus, selectStatusMessage, changeEmailThunk, changeEmailThunkR,
  selectEmailChanged, setEmailChanged, selectPasswordChanged, setPasswordChanged,
  changePasswordThunk, changePasswordThunkR,
} from '../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

const theme = createTheme();

const AccountSettingsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const emailChanged = useSelector(selectEmailChanged);
  const passwordChanged = useSelector(selectPasswordChanged);
  const status = useSelector(selectStatus);
  const message = useSelector(selectStatusMessage);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  console.log(status, message);
  if (status === '200' && emailChanged === false) {
    setEditEmail(false);
    dispatch(setEmailChanged(true));
  }
  if (status === '200' && passwordChanged === false) {
    setEditPassword(false);
    dispatch(setPasswordChanged(true));
    setCurrentPassword('');
    setConfirmNewPassword('');
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#001935', height: '100%' },
            a: { display: 'inline' },
          }}
        />
        <Box
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            margin: '40px auto 0',
            maxWidth: '990px',
            padding: '0 8px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              borderRadius: '3px',
              color: 'black',
              padding: '20px 24px',
              backgroundColor: '#FFFFFF',
              // alignItems: 'flex-end',
              display: 'flex',
              flexDirection: 'column',
              width: '625px',
            }}
          >
            <Typography
              component="h2"
              fontSize="24px"
              fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
              color="#000000"
              sx={{
                padding: '0px 0px 28px',
                borderBottom: '2px solid rgba(0,0,0,.13)',
              }}
              style={{
                filter: editEmail || editPassword ? 'blur(3px)' : 'none',
              }}
            >
              Account
            </Typography>
            <Box
              sx={{
                borderBottom: '1px solid rgba(0,0,0,.07)',
                display: 'flex',
                flexDirection: 'row',
                padding: '20px 0',
              }}
              style={{ filter: editPassword ? 'blur(3px)' : 'none' }}
            >
              <Typography
                component="h2"
                fontSize="16px"
                fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                color="#000000"
                fontWeight="700"
                sx={{
                  flex: '0 1 145px',
                  minWidth: '145px',
                  padding: '0 10px',
                }}
              >
                Email
              </Typography>
              <Box sx={{ margin: '0 10px' }}>
                { editEmail ? (
                  <Box
                    component="form"
                    sx={{ alignItems: 'flex-start' }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (SERVICETYPE === MOCK) {
                        dispatch(changeEmailThunk({
                          accessToken: user.accessToken,
                          body: {
                            password: user.password,
                            email: user.email,
                          },
                        }));
                      } else if (SERVICETYPE === REAL) {
                        dispatch(changeEmailThunkR({
                          accessToken: user.accessToken,
                          body: {
                            password: user.password,
                            email: user.email,
                          },
                        }));
                      }
                    }}
                  >
                    <Box sx={{ width: '350px' }}><EmailInputTextField editEmail /></Box>
                    <Box sx={{ width: '350px' }}><PasswordInputTextField confirmPassword /></Box>
                    <Button
                      disableRipple
                      disableElevation
                      variant="contained"
                      size="large"
                      font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                      style={{
                        backgroundColor: 'rgb(0 0 0 / 40%)',
                        color: '#FFFFFFFDE',
                        fontWeight: '700',
                        textTransform: 'none',
                        borderRadius: '3px',
                      }}
                      sx={{
                        padding: '6px 15px',
                        margin: '0 8px 0 0',
                      }}
                      onClick={() => {
                        dispatch(initialCheck);
                        setEditEmail(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      disableRipple
                      disableElevation
                      variant="contained"
                      size="large"
                      font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                      style={{
                        backgroundColor: '#00B8FF',
                        color: '#001935',
                        fontWeight: '700',
                        textTransform: 'none',
                        borderRadius: '3px',
                      }}
                      sx={{
                        padding: '6px 15px',
                      }}
                      type="submit"
                    >
                      Save
                    </Button>
                  </Box>
                ) : (
                  <Box sx={{ alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Typography
                      component="h2"
                      fontSize="16px"
                      fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                      color="#000000"
                      sx={{
                        display: 'flex',
                      }}
                    >
                      {user.email}
                      <Button
                        sx={{ alignItems: 'flex-end' }}
                        onClick={(e) => {
                          if (editPassword) {
                            e.preventDefault();
                          } else {
                            setEditEmail(true);
                          }
                        }}
                        endIcon={<CreateOutlinedIcon />}
                      />
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                borderBottom: '1px solid rgba(0,0,0,.07)',
                display: 'flex',
                flexDirection: 'row',
                padding: '20px 0',
              }}
              style={{ filter: editEmail ? 'blur(3px)' : 'none' }}
            >
              <Typography
                component="h2"
                fontSize="16px"
                fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                color="#000000"
                fontWeight="700"
                sx={{
                  flex: '0 1 145px',
                  minWidth: '145px',
                  padding: '0 10px',
                }}
              >
                Password
              </Typography>
              <Box sx={{ margin: '0 10px' }}>
                { editPassword ? (
                  <Box
                    component="form"
                    sx={{ alignItems: 'flex-start' }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      // setEditPassword(false);
                      if (SERVICETYPE === MOCK) {
                        dispatch(changePasswordThunk({
                          accessToken: user.accessToken,
                          body: {
                            current_password: currentPassword,
                            password: user.password,
                            password_confirmation: confirmNewPassword,
                          },
                        }));
                      } else if (SERVICETYPE === REAL) {
                        dispatch(changePasswordThunkR({
                          accessToken: user.accessToken,
                          body: {
                            current_password: currentPassword,
                            password: user.password,
                            password_confirmation: confirmNewPassword,
                          },
                        }));
                      }
                    }}
                  >
                    <Box fullWidth sx={{ mb: 1 }}>
                      <TextField
                        id="current-password"
                        type="password"
                        // eslint-disable-next-line no-nested-ternary
                        placeholder="Current password"
                        value={currentPassword}
                        onChange={(e) => {
                          setCurrentPassword(e.target.value);
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
                    <Box sx={{ width: '350px' }}><PasswordInputTextField newPassword /></Box>
                    <Box fullWidth sx={{ mb: 1 }}>
                      <TextField
                        id="confirm-new-password"
                        type="password"
                        // eslint-disable-next-line no-nested-ternary
                        placeholder="Confirm new password"
                        value={confirmNewPassword}
                        onChange={(e) => {
                          setConfirmNewPassword(e.target.value);
                        }}
                        variant="outlined"
                        fullWidth
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
                    <Button
                      disableRipple
                      disableElevation
                      variant="contained"
                      size="large"
                      font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                      style={{
                        backgroundColor: 'rgb(0 0 0 / 40%)',
                        color: '#FFFFFFFDE',
                        fontWeight: '700',
                        textTransform: 'none',
                        borderRadius: '3px',
                      }}
                      sx={{
                        padding: '6px 15px',
                        margin: '0 8px 0 0',
                      }}
                      onClick={() => {
                        dispatch(initialCheck);
                        setEditPassword(false);
                        setCurrentPassword('');
                        setConfirmNewPassword('');
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      disableRipple
                      disableElevation
                      variant="contained"
                      size="large"
                      font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                      style={{
                        backgroundColor: '#00B8FF',
                        color: '#001935',
                        fontWeight: '700',
                        textTransform: 'none',
                        borderRadius: '3px',
                      }}
                      sx={{
                        padding: '6px 15px',
                      }}
                      type="submit"
                    >
                      Change password
                    </Button>
                  </Box>
                ) : (
                  <Box sx={{ alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Typography
                      component="h2"
                      fontSize="20px"
                      fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                      color="#000000"
                      sx={{
                        display: 'flex',
                      }}
                    >
                      &#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
                      <Button sx={{ alignItems: 'flex-start' }} onClick={() => setEditPassword(true)} endIcon={<CreateOutlinedIcon />} />
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                margin: '20px 10px 0 0',
              }}
            >
              <Link
                to="/account/delete"
                onClick={(e) => {
                  if (editEmail || editPassword) {
                    e.preventDefault();
                  }
                }}
              >
                <Button
                  disableRipple
                  disableElevation
                  variant="contained"
                  font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                  style={{
                    backgroundColor: '#FF4930', // '#FFFFFF',
                    fontWeight: '700',
                    textTransform: 'none',
                    // border: '1px solid rgba(0,0,0,.4)',
                    border: '1px solid #FF4930',
                    borderRadius: '2px',
                    filter: editEmail || editPassword ? 'blur(3px)' : 'none',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="13px"
                    fontFamily='Favorit, "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    // color="#00000066"
                    color="#FFFFFF"
                  >
                    Delete account
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Box>
          <SettingsSideMenu />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AccountSettingsPage;
