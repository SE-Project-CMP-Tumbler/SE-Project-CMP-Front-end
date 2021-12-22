import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  selectUser, setVerified, verifyEmailThunk, verifyEmailThunkR,
} from '../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

const theme = createTheme();

const VerifyEmailPage = () => {
  const title = 'Congratulations';
  const message1 = 'Now you\'re a real user.';
  const message2 = 'You deserve an app.';
  const note = 'Or, skip to your dashboard';
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector(selectUser);
  const [btnDisabled, setBtnDisabled] = useState(true);
  // console.log(user.verified);
  return (
    <ThemeProvider theme={theme}>
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
            },
          }}
        />
        { user.verified ? (
          <Box sx={{ marginTop: 20 }}>
            <Typography component="h1" color="white" fontSize="2.25rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography component="h2" color="#FFFFFF" fontSize="1.125rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
              {message1}
            </Typography>
            <Typography component="h2" color="#FFFFFF" fontSize="1.125rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
              {message2}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', m: 2 }}>
              <Button
                fullWidth
                sx={{
                  height: 59, backgroundColor: '#21374f', float: 'left',
                }}
              >
                <a
                  target="_blank"
                  href="http://download.tumbler.social/cross"
                  style={{
                    color: '#FFFFFF',
                  }}
                  rel="noreferrer"
                >
                  Flutter
                </a>
              </Button>
              <Button
                fullWidth
                sx={{
                  height: 59, backgroundColor: '#21374f', float: 'right',
                }}
              >
                <a
                  target="_blank"
                  href="
                  http:// download.tumbler.social/android"
                  style={{
                    color: '#FFFFFF',
                  }}
                >
                  Android
                </a>
              </Button>
            </Box>
            <Link to="/dashboard">
              <Typography component="h3" color="#FFFFFF99" fontSize="1rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'>
                {note}
              </Typography>
            </Link>
          </Box>
        ) : (
          <Box
            component="div"
            sx={{
              display: 'inline-block',
              color: '#FFFFFF',
              textAlign: 'center',
              padding: 2.5,
              height: 144,
              marginTop: 25,
            }}
          >
            <ReCAPTCHA
              sitekey="6Lf95LsdAAAAAHh_fPk9_5a2Qz1_Fk7166vtyuUa"
              onChange={(/* value */) => {
                setBtnDisabled(!btnDisabled);
                // console.log('Captcha value:', value);
              }}
            />
            <Box sx={{ width: 260 }}>
              <Button
                id="verify-btn"
                fullWidth
                disableRipple
                disabled={btnDisabled}
                variant="contained"
                size="large"
                font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                style={{
                  backgroundColor: '#00b8ff', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'none',
                }}
                sx={{
                  spacing: 8, mt: 1.5, mr: 1, ml: 1, mb: 1,
                }}
                type="submit"
                onClick={() => {
                  if (SERVICETYPE === MOCK) {
                    dispatch(setVerified(true));
                    dispatch(verifyEmailThunk({
                      id: params.id,
                      hash: params.hash,
                    }));
                  } else if (SERVICETYPE === REAL) {
                    dispatch(verifyEmailThunkR({
                      id: params.id,
                      hash: params.hash,
                    }));
                  }
                }}
              >
                Verify Email
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default VerifyEmailPage;
