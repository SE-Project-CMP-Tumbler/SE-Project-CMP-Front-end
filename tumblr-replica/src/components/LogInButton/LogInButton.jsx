import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

/**
 * Component to be used in the {@link LogOutHomePage}, {@link LogInPage},
 * & {@link NavigationBar} in case the User is logged out.
 * It routes the User to the /login and in case the User is already on that page,
 * it should submit the form containing the User info (email & password).
 * @component
 * @name
 * LogInButton
 * @example
 * return (
 *   <LogInButton />
 * )
 */
const LogInButton = () => (
  <Box
    sx={{ spacing: 8, mt: 1.5 }}
  >
    <Link to="/login" style={{ textDecoration: 'none' }}>
      <Button
        fullWidth
        disableRipple
        variant="contained"
        size="large"
        fontFamily="Arial"
        style={{
          backgroundColor: '#00cf35',
          color: '#000000',
          fontWeight: 'bold',
          textTransform: 'none',
        }}
      >
        Log in
      </Button>
    </Link>
  </Box>
);

export default LogInButton;
