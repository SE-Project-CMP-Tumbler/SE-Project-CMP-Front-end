import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

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
