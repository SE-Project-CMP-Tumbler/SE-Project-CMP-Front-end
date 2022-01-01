import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Logo } from './7123025_logo_google_g_icon.svg';
import {
  selectUser, selectGoogle, logInWithGoogleThunk, logInWithGoogleThunkR,
  continueWithGoogle,
} from '../../../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../../../apis/globalAPI';

const ContinueWithGoogleButton = () => {
  const dispatch = useDispatch();
  const google = useSelector(selectGoogle);
  const user = useSelector(selectUser);
  if (google === '404') {
    return <Navigate to="/onboarding" />;
  } if (google === '424') {
    return <Navigate to="/linkAccount" />;
  } if (user.googleAccessToken !== '') {
    if (SERVICETYPE === MOCK) {
      dispatch(logInWithGoogleThunk({
        google_access_token: user.googleAccessToken,
      }));
    } else if (SERVICETYPE === REAL) {
      dispatch(logInWithGoogleThunkR({
        google_access_token: user.googleAccessToken,
      }));
    }
  }
  return (
    <GoogleLogin
      clientId="908939893136-ubgj8ndsa88trvvg3hqj0kha5kr1uf7h.apps.googleusercontent.com"
      // uxMode="redirect"
      onSuccess={(async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        const accessToken = res?.accessToken;
        try {
          dispatch(continueWithGoogle({
            type: 'AUTH',
            data: { result, token, accessToken },
          }));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      })}
      // eslint-disable-next-line no-console
      onFailure={() => console.log('Google Log In Failure! Try Again Later.')}
      cookiePolicy="single_host_origin"
      render={(renderProps) => (
        <Box
          sx={{ spacing: 8, mt: 1.5 }}
        >
          <Button
            id="google-login-button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            fullWidth
            disableRipple
            variant="contained"
            size="large"
            font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'
            style={{
              backgroundColor: '#FFFFFF', color: '#000000', fontWeight: 'bold', textTransform: 'none',
            }}
          >
            <SvgIcon>
              <Logo />
            </SvgIcon>
            <span style={{ color: 'black' }}>Continue with Google</span>
          </Button>
        </Box>
      )}
    />
  );
};
export default ContinueWithGoogleButton;
