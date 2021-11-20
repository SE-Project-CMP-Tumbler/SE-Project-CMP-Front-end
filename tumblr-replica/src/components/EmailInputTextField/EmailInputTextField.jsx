import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { setEmail } from '../../states/user/UserSlice';

/**
 * Component to be used in the {@link LogInPage}, {@link SignUpPage} & {@link ForgotPasswordPage}.
 * It takes the user's email as input to be used later on and stored in the User State.
 * @component
 * @name
 * EmailInputTextField
 * @example
 * return (
 *   <EmailInputTextField  />
 * )
 */
const EmailInputTextField = () => {
  const [email, setEmailh] = useState('');
  // const { email } = useSelector((state) => state.user);
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
          // console.log('Inside the onChange Function!');
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
