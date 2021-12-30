import { React } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { GlobalStyles } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser, selectShowReVerify, hideReVerify, resendVerificationThunk, resendVerificationThunkR,
} from '../../../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../../../apis/globalAPI';

const theme = createTheme();

const ResendVerificationPrompt = () => {
  const resendVerificationMessage = 'All the finest Tumblr users verify their email address. Check your inbox for the message we just sent.';
  const user = useSelector(selectUser);
  const showReVerify = useSelector(selectShowReVerify);
  // const [showReVerify, setReVerify] = useState(true);
  const dispatch = useDispatch();
  const onClickHideVerify = () => {
    // setReVerify(false);
    dispatch(hideReVerify());
  };
  return (
    <ThemeProvider theme={theme}>
      { user.loggedin && user.verified === false
    && (
    <Grid
      item
      container
      fullWidth
    //   justifyContent="center"
    // //   alignItems="middle"
      sx={{ mt: 2, display: showReVerify ? '' : 'none', width: '490px' }}
    >
      <Box
        sx={{
          padding: '14px 16px',
          backgroundColor: '#00B8FF',
          width: '490px',
          color: '#FFFFFF',
          borderRadius: '6px',

        }}
      >
        <Typography component="h2" color="white" fontSize="1rem" fontFamily="Favorit, Helvetica Neue, HelveticaNeue, Helvetica, Arial, sans-serif">
          {resendVerificationMessage}
        </Typography>
        <Box
          sx={{
            margin: '10px 0px 0px',
            display: 'flex',
            flexDirection: 'row',
            direction: 'rtl',
            alignItems: 'center',
          }}
        >
          <Button
            disableRipple
            disableElevation
            variant="contained"
            size="large"
            font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
            style={{
              backgroundColor: '#FFFFFF',
              textTransform: 'none',
              borderRadius: 3,
            }}
            sx={{
              padding: '6px 12px',
              margin: '0px 0px 0px 10px',
            }}
            onClick={() => {
              if (SERVICETYPE === MOCK) {
                dispatch(resendVerificationThunk(user.accessToken));
              } else if (SERVICETYPE === REAL) {
                dispatch(resendVerificationThunkR(user.accessToken));
              }
            }}
          >
            <Typography component="h2" color="#00B8FF" fontSize="1rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
              Resend
            </Typography>
          </Button>
          <Link
            to="/settings/account/email"
            target="_blank"
            style={{
              color: '#FFFFFF',
              fontWeight: 'normal',
              fontFamily: "'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif",
            }}
            onClick={onClickHideVerify}
          >
            Update Email
          </Link>
        </Box>
      </Box>
    </Grid>
    )}
    </ThemeProvider>
  );
};

export default ResendVerificationPrompt;
