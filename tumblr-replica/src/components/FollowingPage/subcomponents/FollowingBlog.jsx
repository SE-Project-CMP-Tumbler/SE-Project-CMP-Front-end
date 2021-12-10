import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Popover from '@mui/material/Popover';
import PropTypes from 'prop-types';
import '../css/FollowingPage.css';
// eslint-disable-next-line import/no-unresolved
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unfollow, follow } from '../../../slices/FollowingPage/FollowingPage';

function MoreVertical() {
  return (
    <IconButton aria-label="settings" edge="end">
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <MoreVertIcon {...bindTrigger(popupState)} />
            <Popover
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem
                onClick={popupState.close}
                style={{
                  color: 'red',
                  width: '200px',
                  justifyContent: 'center',
                }}
              >
                Report
              </MenuItem>
              <MenuItem
                onClick={popupState.close}
                style={{
                  color: 'red',
                  width: '200px',
                  justifyContent: 'center',
                }}
              >
                Block
              </MenuItem>
              <MenuItem
                onClick={popupState.close}
                style={{
                  width: '200px',
                  justifyContent: 'center',
                }}
              >
                Close
              </MenuItem>
            </Popover>
          </>
        )}
      </PopupState>
    </IconButton>
  );
}

function FollowingBlog({
  id,
  blogavatarshape,
  blogavatar,
  blogusername,
  followingfrom,
  lastupdate,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [followState, setFollowState] = useState('Unfollow');
  const dispatch = useDispatch();
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <ListItem
      key={id}
      secondaryAction={(
        <MoreVertical />
      )}
      disablePadding
    >
      <ListItemButton>
        {blogavatarshape === 'circle' ? (
          <img
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              margin: '0 10px 0 0',
            }}
            src={blogavatar}
            alt="R"
          />
        ) : (
          <img
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '5px',
              margin: '0 10px 0 0',
            }}
            src={blogavatar}
            alt="R"
          />
        )}
        <div style={{ width: '70%' }}>
          <div style={{ display: 'flex' }}>
            <div>
              <ListItemText primary={blogusername} />
            </div>
            <svg
              viewBox="0 0 20 21"
              width="12"
              height="12"
              fill="#00cc44"
              style={{ margin: '10px 0 0 10px' }}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <path
                d="M11.5 8.8c0-1.5-1.2-2.8-2.6-2.8-1.4 0-2.6 1.3-2.6 2.8 0 1.5 1.2 2.2 2.6 2.2 1.5 0 2.6-.7 2.6-2.2zM5 16.2v.8h7.7v-.8c0-3-1.7-4.2-3.9-4.2C6.7 12 5 13.2 5 16.2zM16 19H2V4h10V2H2C.9 2 0 2.9 0 4v14.9C0
              20.1.9 21 2 21h14.2c1.1 0 1.8-.9 1.8-2.1V8h-2v11zm2-17V0h-2v2h-2v2h2v2h2V4h2V2h-2z"
              />
            </svg>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
                boxShadow: 'none',
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1, fontSize: '12px' }}>
                Following each other from
                {' '}
                {followingfrom}
              </Typography>
            </Popover>
          </div>
          <ListItemText
            style={{ color: '#778899' }}
            primary={lastupdate}
          />
        </div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link
          href="#"
          underline="hover"
          style={{
            margin: '0 0 0 30%',
            fontWeight: '600',
            fontSize: '12.5px',
            color: '#48D1CC',
            fontFamily: 'Poppins',
          }}
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            followState === 'Unfollow'
              ? dispatch(unfollow(id))
              : dispatch(follow({ id }));
            // eslint-disable-next-line no-unused-expressions
            followState === 'Unfollow'
              ? setFollowState('Follow')
              : setFollowState('Unfollow');
          }}
        >
          {followState}
          {console.log(followState)}
        </Link>
      </ListItemButton>
    </ListItem>
  );
}
export default FollowingBlog;

FollowingBlog.propTypes = {
  id: PropTypes.string.isRequired,
  blogavatarshape: PropTypes.string.isRequired,
  blogavatar: PropTypes.string.isRequired,
  blogusername: PropTypes.string.isRequired,
  followingfrom: PropTypes.string.isRequired,
  lastupdate: PropTypes.string.isRequired,
};
