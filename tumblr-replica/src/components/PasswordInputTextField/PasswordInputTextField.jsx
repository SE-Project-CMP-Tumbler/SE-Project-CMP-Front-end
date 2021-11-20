import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { setPassword } from '../../states/user/UserSlice';

// TO DO: Add the password difficulty feature
// and pass whether it will be there or not through an argument

/**
 * Component to be used in the {@link LogInPage} & {@link SignUpPage}
 * It takes the user's password as input to be used later on and stored in the User State.
 * @component
 * @name
 * PasswordInputTextField
 * @example
 * return (
 *   <PasswordInputTextField  />
 * )
 */
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
          // console.log('Inside the onChange Function!');
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
