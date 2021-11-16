import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
// import ListSubheader from '@mui/material/ListSubheader';

export default function EditPopup({ alltags }) {
  return (
    <List
      sx={{
        width: '100%',
        minWidth: 500,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 250,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      <ul>
        {alltags.map((item) => (
          <ListItem key={`${item}`}>
            <ListItemText primary={`#${item}`} />
            <Button variant="outlined" color="secondary" sx={{ textTransform: 'none' }}>Unfollow</Button>
          </ListItem>
        ))}
      </ul>
    </List>
  );
}

EditPopup.propTypes = {
  alltags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
