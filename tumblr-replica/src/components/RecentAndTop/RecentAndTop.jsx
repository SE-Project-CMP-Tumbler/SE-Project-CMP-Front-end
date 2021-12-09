import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
export default function NavTabs({ value, setValue }) {
  const white = {
    color: 'white',
    fontWeight: 'bolder',
    textTransform: 'none',
    fontSize: 'large',
  };
  return (
    <div style={{ backgroundColor: '#001935' }}>
      <Box sx={{
        width: '100%', typography: 'body1', borderBottom: 1, borderColor: 'primary.main', margin: '37px 0px',
      }}
      >
        <Tabs
          data-testid="tabs"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <Tab style={white} label="Recent" to="?sort=recent" component={Link} />
          <Tab style={white} label="Top" to="?sort=top" component={Link} />
        </Tabs>
      </Box>
    </div>
  );
}

NavTabs.propTypes = {
  /**
   * @param {tapnum}
   * tapnum the tab should have blue underline
   */
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
