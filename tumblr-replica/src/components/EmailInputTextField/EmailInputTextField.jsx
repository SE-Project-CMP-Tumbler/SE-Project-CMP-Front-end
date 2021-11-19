import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const EmailInputTextField = () => (
  <Box fullWidth sx={{ mb: 1 }}>
    <TextField
      id="email"
      type="email"
      placeholder="Email"
      variant="outlined"
      fullWidth
      autoComplete="email"
      autoFocus
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
          // TO DO: Later remove the hover and focus effects
        },
      }}
    />
  </Box>
);

export default EmailInputTextField;
