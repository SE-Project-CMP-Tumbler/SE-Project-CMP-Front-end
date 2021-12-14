import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { setPassword } from '../../../../states/User/UserSlice';

// TO DO: Add the password difficulty feature
// and pass whether it will be there or not through an argument

const PasswordInputTextField = () => {
  const [password, setPasswordh] = useState('');
  const dispatch = useDispatch();
  return (
    <Box fullWidth sx={{ mb: 1 }}>
      <TextField
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPasswordh(e.target.value);
          dispatch(setPassword(e.target.value));
        }}
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
};
export default PasswordInputTextField;
