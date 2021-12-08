import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

const LogInButton = ({ handleClick, worksAsLink }) => (
  <Box
    sx={{ spacing: 8, mt: 1.5 }}
  >
    { worksAsLink ? (
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
          type="submit"
          onClick={() => handleClick()}
        >
          Log in
        </Button>
      </Link>
    ) : (
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
        type="submit"
        onClick={() => handleClick()}
      >
        Log in
      </Button>
    )}
  </Box>
);

LogInButton.propTypes = {
  handleClick: PropTypes.func,
  worksAsLink: PropTypes.bool,
};

LogInButton.defaultProps = {
  handleClick: () => {},
  worksAsLink: true,
};

export default LogInButton;
