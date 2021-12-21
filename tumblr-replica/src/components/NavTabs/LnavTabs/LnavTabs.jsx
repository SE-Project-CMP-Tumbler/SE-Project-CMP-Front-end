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
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { tosmall, tolarge } from '../../../states/features/postview/postviewSlice';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

/**
 * Component for The navTabs which show in the top os explor section.
 *
 * @component
 * @name
 * NavTabs
 * @example
 * const tapnum = 1
 * const selected = 'More'
 * return (
 *   <NavTabs tapnum={tapnum} selected={selected} />
 * )
 */
export default function LnavTabs({ tapnum, selsected }) {
  const [value, setValue] = React.useState(tapnum);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  // const [view, setView] = React.useState('list');

  // const handleChange = (event, nextView) => {
  //  setView(nextView);
  // };
  const dispatch = useDispatch();
  const white = {
    color: 'white',
    fontWeight: 'bolder',
    textTransform: 'none',
    fontSize: 'large',
  };
  const width = {
    color: 'white',
    fontWeight: 'bolder',
    textTransform: 'none',
    fontSize: 'large',
    width: '25.7%',
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
          <Tab style={width} label="For You 💖" to="/explore/recommended-for-you" component={Link} />
          <Tab style={width} label="Trending 🚀" to="/explore/trending" component={Link} />
          <Tab style={width} label="Staff Picks 🌟" to="/explore/staff-picks" component={Link} />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
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
          {isDesktopOrLaptop && (
          <>
            <ViewModuleIcon
              sx={{
                color: white,
                fontSize: 30,
                mt: 3,
                cursor: 'pointer',
              }}
              onClick={() => dispatch(tosmall())}
            />
            <ViewListIcon
              sx={{
                color: white,
                fontSize: 30,
                mt: 3,
                cursor: 'pointer',
              }}
              onClick={() => dispatch(tolarge())}
            />
          </>
          )}
        </Tabs>
      </Box>
    </div>
  );
}

LnavTabs.propTypes = {
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
