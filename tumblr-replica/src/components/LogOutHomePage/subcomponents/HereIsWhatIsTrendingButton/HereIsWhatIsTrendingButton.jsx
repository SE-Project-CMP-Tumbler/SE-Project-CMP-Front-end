import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import ExploreIconOutlined from '@mui/icons-material/ExploreOutlined';

const HereIsWhatIsTrendingButton = () => (
  <Box
    sx={{ spacing: 8, mt: 1.5 }}
  >
    <Link to="/explore/trending" style={{ textDecoration: 'none' }}>
      <Button
        startIcon={<ExploreIconOutlined />}
        fullWidth
        disableRipple
        variant="text"
        size="large"
        font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;'
        style={{
          color: '#FFFFFF', fontWeight: 'bold', textTransform: 'none',
        }}
      >
        Here&apos;s what&apos;s trending
      </Button>
    </Link>
  </Box>
);

export default HereIsWhatIsTrendingButton;
