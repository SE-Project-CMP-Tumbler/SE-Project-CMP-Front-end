import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import '../css/FollowersPage.css';
import Typography from '@mui/material/Typography';
import Link from 'react-router-dom';
import MoreVertical from './MoreVertical';
import {selectUser } from '../../../states/User/UserSlice';

function Follower({
  id,
  blogavatarshape,
  blogavatar,
  blogusername,
  followingfrom,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const User = useSelector(selectUser);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
  }, []);
  return (
    <ListItem
      key={id}
      style={{ zIndex: '0' }}
      secondaryAction={(
        <MoreVertical blogusername={blogusername} id={id} />
      )}
      disablePadding
    >
      <Link to={`/blog/${User.blogName}/`}>
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
          <div style={{ width: '90%' }}>
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
              <div>
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
            </div>
            <ListItemText
              style={{ color: '#778899' }}
              primary={blogusername}
            />
          </div>
          {/* {!followState
        && (
          <Link
            href="/"
            underline="hover"
            style={{
              margin: '0 0 0 30%',
              fontWeight: '600',
              fontSize: '12.5px',
              color: '#48D1CC',
              fontFamily: 'Poppins',
            }}
            onClick={() => {
              dispatch(follow());
            }}
          >
            follow
          </Link>
        )} */}
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
export default Follower;
