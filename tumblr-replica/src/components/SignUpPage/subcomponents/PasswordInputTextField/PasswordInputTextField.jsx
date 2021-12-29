import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { setPassword } from '../../../../states/User/UserSlice';

// TO DO: Add the password difficulty feature
// and pass whether it will be there or not through a prop

const PasswordInputTextField = ({
  marginOff, showDifficulty, newPassword, confirmPassword,
}) => {
  const [password, setPasswordh] = useState('');
  const dispatch = useDispatch();
  let marginBottomValue = 1;
  if (marginOff) {
    marginBottomValue = -0.25;
  }
  if (showDifficulty) {
    // eslint-disable-next-line no-console
    console.log('Testing Difficulty');
  }
  return (
    <Box fullWidth sx={{ mb: marginBottomValue }}>
      <TextField
        id="password"
        type="password"
        // eslint-disable-next-line no-nested-ternary
        placeholder={newPassword ? 'New password' : confirmPassword ? 'Confirm password' : 'Password'}
        value={password}
        onChange={(e) => {
          setPasswordh(e.target.value);
          dispatch(setPassword(e.target.value));
        }}
        variant="outlined"
        fullWidth
        autoComplete={confirmPassword ? '' : 'current-password'}
        disableRipple
        disableElevation
        style={{
          backgroundColor: '#FFFFFF', // '#E8F0FE',
          borderRadius: 3,
          fontSize: '1rem',
          border: 'none',
        }}
        inputProps={{
          style: {
            padding: '11px 13px',
          },
        }}
        // endIcon = showDifficulty ?
      />
    </Box>
  );
};

PasswordInputTextField.propTypes = {
  marginOff: PropTypes.bool,
  showDifficulty: PropTypes.bool,
  newPassword: PropTypes.bool,
  confirmPassword: PropTypes.bool,
};

PasswordInputTextField.defaultProps = {
  marginOff: false,
  showDifficulty: false,
  newPassword: false,
  confirmPassword: false,
};

export default PasswordInputTextField;
