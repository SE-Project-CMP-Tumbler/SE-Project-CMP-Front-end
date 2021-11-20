import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { createSlice } from '@reduxjs/toolkit';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Logo } from './7123025_logo_google_g_icon.svg';

function ContinueWithGoogleButton() {
  return (
    <Box
      sx={{ spacing: 8, mt: 1.5 }}
    >
      <Link to="/auth/google" style={{ textDecoration: 'none' }}>
        <Button
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
      </Link>
    </Box>
  );
}

// TO DO: Implement the ContinueWithGoogleButtonSlice to manage its parameters
export const ContinueWithGoogleButtonSlice = createSlice({
  name: 'ContinueWithGoogle',
});

export default ContinueWithGoogleButton;
