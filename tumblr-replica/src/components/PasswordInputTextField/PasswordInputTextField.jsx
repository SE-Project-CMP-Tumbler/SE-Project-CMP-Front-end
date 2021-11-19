import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { createSlice } from '@reduxjs/toolkit';

// TO DO: Add the password difficulty feature
// and pass whether it will be there or not through an argument
function PasswordInputTextField() {
  return (
    <Box fullWidth sx={{ mb: 1 }}>
      <TextField
        id="password"
        type="password"
        placeholder="Password"
        variant="outlined"
        fullWidth
        autoComplete="current-password"
        disableRipple
        disableElevation
        style={{
          backgroundColor: '#E8F0FE',
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
  );
}

export default PasswordInputTextField;
