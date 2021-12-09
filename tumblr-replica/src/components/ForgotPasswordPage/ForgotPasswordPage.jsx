import React from 'react';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailInputTextField from '../SignUpPage/subcomponents/EmailInputTextField/EmailInputTextField';

const theme = createTheme();

const ForgotPasswordPage = () => {
  const title = 'tumblr';
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ width: 320 }}
      >
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#001935', height: '100%' },
          }}
        />
        <Box
          component="form"
          sx={{
            marginTop: 17,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#FFFFFF',
          }}
        >
          <Typography component="h2" color="white" fontSize="4.5rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Box>
        <EmailInputTextField />
        <Box
          sx={{ spacing: 8, mt: 1 }}
        >
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button
              disableRipple
              disableElevation
              variant="contained"
              size="large"
              font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.33)',
                color: '#FFFFFF',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: 1,
                float: 'left',
              }}
              sx={{
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              Cancel
            </Button>
          </Link>
          <Button
            disableRipple
            disableElevation
            variant="contained"
            size="large"
            font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
            style={{
              backgroundColor: '#ff492f',
              color: '#FFFFFF',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: 1,
              float: 'right',
            }}
          >
            Reset password
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPasswordPage;
