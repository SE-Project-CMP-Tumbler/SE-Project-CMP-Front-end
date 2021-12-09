import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

const SignUpButton = ({ handleClick, worksAsLink }) => (
  <Box
    sx={{ spacing: 8, mt: 1.5 }}
  >
    { worksAsLink ? (
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
          sx={{
            spacing: 8, mt: 1.5, mr: 1, ml: 1, mb: 1,
          }}
          type="submit"
          onClick={() => handleClick()}
        >
          Sign up
        </Button>
      </Link>
    ) : (
      <Button
        fullWidth
        disableRipple
        variant="contained"
        size="large"
        font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
        style={{
          backgroundColor: '#00b8ff', color: '#000000', fontWeight: 'bold', textTransform: 'none',
        }}
        sx={{
          spacing: 8, mt: 1.5, mr: 1, ml: 1, mb: 1,
        }}
        type="submit"
        onClick={() => handleClick()}
      >
        Sign up
      </Button>
    )}
  </Box>
);

SignUpButton.propTypes = {
  handleClick: PropTypes.func,
  worksAsLink: PropTypes.bool,
};

SignUpButton.defaultProps = {
  handleClick: () => {},
  worksAsLink: true,
};

export default SignUpButton;
