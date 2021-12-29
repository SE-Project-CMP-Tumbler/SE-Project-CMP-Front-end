import React from 'react';
import { /* useDispatch, */ useSelector } from 'react-redux';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import {
  selectUser,
} from '../../../../states/User/UserSlice';

const theme = createTheme();

const SettingsSideMenu = () => {
  const user = useSelector(selectUser);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#001935', height: '100%' },
          a: { display: 'inline' },
        }}
      />
      <Box
        sx={{
          marginLeft: '30px',
        }}
      >
        <Box
          component="ul"
          sx={{
            marginBottom: '38px',
            width: '320px',
            color: '#FFFFFF',
            //   alignItems: 'flex-end',
            //   display: 'flex',
            //   flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              borderTop: '1px solid rgba(255,255,255,.07)',
              padding: '8px 12px',
              backgroundColor: '#FFFFFF12',
            }}
          >
            <Link to="/settings/account">
              <Typography
                component="h2"
                fontSize="18px"
                fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                color="#FFFFFF"
              >
                Account
              </Typography>
              <Typography
                component="h2"
                fontSize="13px"
                fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                color="#FFFFFFA6"
              >
                The essentials
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography
            component="h2"
            fontSize="21px"
            fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
            color="#FFFFFF"
            fontWeight="700"
            sx={{
              padding: '0px 10px 10px',
              borderBottom: '2px solid rgba(255,255,255,.13)',
            }}
          >
            Blogs
          </Typography>
          <Box
            component="ul"
            sx={{
              marginBottom: '0px',
              width: '320px',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                padding: '8px 10px',
                borderTop: '1px solid rgba(255,255,255,.07)',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Link to={'/settings/blog/' + user.blogName}>
                <Box
                  component="img"
                  sx={{
                    width: '37px',
                    height: '37px',
                    borderRadius: '3px',
                    marginRight: '11px',
                  }}
                  src={user.primaryBlogAvatar}
                  alt="Primary blog icon"
                />
                <Box
                  sx={{
                    flexDirection: 'column',
                    display: 'inline-block',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="14px"
                    fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    color="#FFFFFF"
                  >
                    {user.blogName}
                  </Typography>
                  <Typography
                    component="h2"
                    fontSize="14px"
                    fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    color="#FFFFFFA6"
                  >
                    Blog Title
                  </Typography>
                </Box>
                <Box sx={{
                  color: '#FFFFFF',
                  display: 'inline-block',
                  paddingRight: '14px',
                  paddingLeft: '150px',
                  position: 'relative',
                  textAlign: 'right',
                }}
                >
                  <StarIcon sx={{ width: '12px', height: '12px' }} />
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SettingsSideMenu;
