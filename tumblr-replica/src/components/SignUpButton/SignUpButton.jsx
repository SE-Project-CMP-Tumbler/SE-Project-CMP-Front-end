import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { createSlice } from '@reduxjs/toolkit';

function SignUpButton() {
  return (
    <Box
      sx={{ spacing: 8, mt: 1.5 }}
    >
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <Button
          fullWidth
          disableRipple
          variant="contained"
          size="large"
          font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
          style={{
            backgroundColor: '#00b8ff', color: '#000000', fontWeight: 'bold', textTransform: 'none',
          }}
          sx={{ spacing: 8, mt: 1.5 }}
        >
          Sign up
        </Button>
      </Link>
    </Box>

  );
}

export default SignUpButton;

// TO DO: Implement the signupSlice to manage the signup parameters
export const signupSlice = createSlice({
  name: 'SignUp',
});
