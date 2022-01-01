import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

/**
 * Component for The MnavTabs which show in the top os explor section in mobile view.
 *
 * @component
 * @name
 * MnavTabs
 * @example
 * const tapnum = 1
 * const selected = 'More'
 * return (
 *   <MnavTabs tapnum={tapnum} selected={selected} />
 * )
 */
export default function MnavTabs({ tapnum, selsected }) {
  const [value, setValue] = React.useState(tapnum);
  const white = {
    color: 'white',
    fontWeight: 'bolder',
    textTransform: 'none',
    fontSize: 'large',
    width: '50%',
  };
  return (
    <div>
      <Box sx={{
        width: '100%', typography: 'body1', borderBottom: 1, borderColor: 'primary.main', margin: '20px 0px',
      }}
      >
        <Tabs
          data-testid="tabs"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >

          <Tab style={white} label="For You 💖" to="/explore/recommended-for-you" component={Link} />
          <Tab style={white} label="Trending 🚀" to="/explore/trending" component={Link} />
        </Tabs>
        <Tabs
          data-testid="tabs"
          value={value - 2}
          onChange={(event, newValue) => setValue(newValue + 2)}
        >
          <Tab style={white} label="Staff Picks 🌟" to="/explore/staff-picks" component={Link} />
          <FormControl variant="standard" sx={{ margin: 'auto', minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label" style={white}>{selsected}</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem to="/explore/text" component={Link}>Text</MenuItem>
              <MenuItem to="/explore/photos" component={Link}>Photos</MenuItem>
              <MenuItem to="/explore/gifs" component={Link}>GIFs</MenuItem>
              <MenuItem to="/explore/quotes" component={Link}>Quotes</MenuItem>
              <MenuItem to="/explore/chats" component={Link}>Chats</MenuItem>
              <MenuItem to="/explore/audio" component={Link}>Audio</MenuItem>
              <MenuItem to="/explore/video" component={Link}>Video</MenuItem>
              <MenuItem to="/explore/asks" component={Link}>Asks</MenuItem>
            </Select>
          </FormControl>
        </Tabs>
      </Box>
    </div>
  );
}

MnavTabs.propTypes = {
  /**
   * @param {tapnum}
   * tapnum the tab should have blue underline
   */
  tapnum: PropTypes.number.isRequired,
  /**
   * @param {selsected}
   * selected is the type of post selected to show ex: Gif,Photo..More
  */
  selsected: PropTypes.string.isRequired,
};
