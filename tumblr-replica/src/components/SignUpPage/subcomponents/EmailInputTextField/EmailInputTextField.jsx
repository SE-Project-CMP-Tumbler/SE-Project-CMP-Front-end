import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { setEmail } from '../../../../states/User/UserSlice';

const EmailInputTextField = () => {
  const [email, setEmailh] = useState('');
  const dispatch = useDispatch();
  return (
    <Box fullWidth sx={{ mb: 1 }}>
      <TextField
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmailh(e.target.value);
          dispatch(setEmail(e.target.value));
        }}
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
};

export default EmailInputTextField;
