import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/Inbox';
import PropTypes from 'prop-types';

export default function FollowingTag({ imagUrl, tag }) {
  const border = {
    borderRadius: 4,
  };
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{
          width: 90, height: 60, borderRadius: '50%', mr: 0.5,
        }}
        >
          <img
            src={imagUrl}
            alt="followingblog"
            style={border}
          />
        </ListItemIcon>
        <ListItemText
          primary={`#${tag}`}
          primaryTypographyProps={{
            fontSize: 15,
            letterSpacing: 0,
            color: 'rgb(255,255,255)',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

FollowingTag.propTypes = {
  imagUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
