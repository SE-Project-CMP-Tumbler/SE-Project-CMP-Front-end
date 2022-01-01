import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { setEmail, selectUser } from '../../../../states/User/UserSlice';

/**
 * Component for The EmailInputTextField component which is used to get the Email of the user.
 *
 * @component
 * @name
 * @example
 * EmailInputTextField
 * const marginOff = true;
 * const readonly = false;
 * const editEmail = true;
 * return (
 *   <EmailInputTextField marginOff={marginOff} readonly={readonly} editEmail={editEmail} />
 * )
* */

const EmailInputTextField = ({ marginOff, readonly, editEmail }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [email, setEmailh] = useState(editEmail ? user.email : '');
  let marginBottomValue = 1;
  if (marginOff) {
    marginBottomValue = -0.25;
  }
  return (
    <Box fullWidth sx={{ mb: marginBottomValue }}>
      { readonly ? (
        <TextField
          id="email"
          type="email"
          disabled
          placeholder="Email"
          value={user.email}
          variant="outlined"
          fullWidth
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
            // TO DO: Later remove the hover and focus effects
            },
          }}
        />
      ) : (
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
            backgroundColor: '#FFFFFF', // '#E8F0FE',
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
      ) }
    </Box>
  );
};

EmailInputTextField.propTypes = {
  marginOff: PropTypes.bool,
  readonly: PropTypes.bool,
  editEmail: PropTypes.bool,
};

EmailInputTextField.defaultProps = {
  marginOff: false,
  readonly: false,
  editEmail: false,
};

export default EmailInputTextField;
