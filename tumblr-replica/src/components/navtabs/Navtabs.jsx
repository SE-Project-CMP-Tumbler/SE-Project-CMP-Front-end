import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
// import NativeSelect from '@mui/material/NativeSelect';

// import Trending from '../trending/Trending';

export default function NavTabs({ tapnum, selsected }) {
  const [value, setValue] = React.useState(tapnum);
  const white = {
    color: 'white',
    fontWeight: 'bolder',
    textTransform: 'none',
    fontSize: 'large',
  };
  return (
    <div style={{ backgroundColor: '#001935' }}>
      <Box sx={{
        width: '100%', typography: 'body1', borderBottom: 1, borderColor: 'primary.main',
      }}
      >
        <Tabs
          data-testid="tabs"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <Tab style={white} label="For You 💖" to="/explore/recommended-for-you" component={Link} />
          <Tab style={white} label="Trending 🚀" to="/explore/trending" component={Link} />
          <Tab style={white} label="Staff Picks 🌟" to="/explore/staff-picks" component={Link} />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label" style={white}>{selsected}</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem to="/explore/text" component={Link}>Texts</MenuItem>
              <MenuItem to="explore/photos" component={Link}>Photos</MenuItem>
              <MenuItem to="/explore/gifs" component={Link}>GIFs</MenuItem>
              <MenuItem to="/explore/quotes" component={Link}>Quotes</MenuItem>
              <MenuItem to="/explore/chats" component={Link}>Chats</MenuItem>
              <MenuItem to="/explore/Audio" component={Link}>Audio</MenuItem>
              <MenuItem to="/explore/Video" component={Link}>Video</MenuItem>
              <MenuItem to="/explore/Asks" component={Link}>Asks</MenuItem>
            </Select>
          </FormControl>
        </Tabs>
      </Box>
    </div>
  );
}

NavTabs.propTypes = {
  tapnum: PropTypes.number.isRequired,
  selsected: PropTypes.string.isRequired,
};
