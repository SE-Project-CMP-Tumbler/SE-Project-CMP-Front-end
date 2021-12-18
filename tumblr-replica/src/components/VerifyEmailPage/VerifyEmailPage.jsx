import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
        {// TO DO: Remove the following after testing
        // }
        // <Button
        //   onClick={() => {
        //     dispatch(setVerified(true));
        //   }}
        // >
        //   True
        // </Button>
        // <Button
        //   onClick={() => {
        //     dispatch(setVerified(false));
        //   }}
        // >
        //   False
        // </Button>
        }
        { user.verified && user.loggedin ? (
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
                  href="http://download.tumbler.social/cross"
                  style={{
                    color: '#FFFFFF',
                  }}
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
                  href="http://download.tumbler.social/android"
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
            <Box sx={{ width: 260 }}>
              <Button
                fullWidth
                disableRipple
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
