import React from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Logo } from './7123025_logo_google_g_icon.svg';
import { continueWithGoogle } from '../../../../states/User/UserSlice';

const ContinueWithGoogleButton = () => {
  const dispatch = useDispatch();
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
          // console.log(`Result: ${result}\nToken Id: ${token}\nAccess Token: ${accessToken}`);
          // window.location.replace('/dashboard');
        } catch (error) {
          console.log(error);
        }
      })}
      onFailure={() => console.log('Google Log In Failure! Try Again Later.')}
      cookiePolicy="single_host_origin"
      render={(renderProps) => (
        <Box
          sx={{ spacing: 8, mt: 1.5 }}
        >
          <Button
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
            Continue with Google
          </Button>
        </Box>
      )}
    />
  );
};
export default ContinueWithGoogleButton;
