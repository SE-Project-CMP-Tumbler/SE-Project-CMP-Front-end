import React from 'react';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from './background.gif';

const theme = createTheme();

const NotFound = () => (
  <ThemeProvider theme={theme}>
    <Container
      sx={{ width: '65%' }}
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: '#001935',
            height: '100%',
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          },
        }}
      />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#FFFFFF',
          justifyContent: 'center',
          fontSize: 20,
        }}
      >
        <h3> There&apos;s nothing here.</h3>
        <p>
          Whatever you were looking for doesn&apos;t currently
          exist at this address. Unless you were looking for
          this error page, in which case: Congrats!
          You totally found it.
        </p>
      </Box>
    </Container>
  </ThemeProvider>
);

export default NotFound;
