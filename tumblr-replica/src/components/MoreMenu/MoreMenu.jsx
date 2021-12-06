/* eslint-disable import/no-extraneous-dependencies */
import { React, useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Axios from 'axios';
import PropTypes from 'prop-types';
import LoggedIn from '../Login/Login';

const MoreMenu = function MoreMenuComponent(props) {
  const { postId, blogId, postDate } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [pinned, setPinned] = useState(false);
  const open = Boolean(anchorEl);
  const apiBaseUrl = 'http://localhost:8008';
  useEffect(() => {
    Axios({
      method: 'GET',
      url: `${apiBaseUrl}/post/${postId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.data.pinned !== pinned) {
          setPinned(res.data.pinned);
        }
        console.log('hello from useEffect / pin post');
      })
      .catch((err) => {
        console.log('Failed to get pin data due to : ', err);
      });
  }, [pinned]);

  // __________________Click handlers____________________\\
  const handleClick = function handleShowMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = function handleCloseMenu() {
    setAnchorEl(null);
  };

  const handlePin = function CheckPostPinning() {
    setPinned(true);
    Axios({
      method: 'PATCH',
      url: `${apiBaseUrl}/post/${postId}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        pinned,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log('Failed to pin due to error : ', err);
      });
  };

  const handleUnfollow = function Unfollow() {
    Axios({
      method: 'DELETE',
      url: `${apiBaseUrl}/follow_blogs/${blogId}`, //    !!! TO BE EDITED !!!    //
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("Can't Unfollow due to : ", err);
      });
  };

  const handleBlock = function BlockBlog() {
    Axios({
      method: 'DELETE',
      url: `${apiBaseUrl}/block/${blogId}`, //    !!! TO BE EDITED !!!    //
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("Can't Block due to : ", err);
      });
  };

  const handleCopy = function CopyPostLinkOption() {
    navigator.clipboard.writeText(`http://localhost:3000/post/${postId}`); //    !!! TO BE EDITED !!!    //
  };

  // ______________________________________________________\\

  return (
    <div sx={{ width: 320, maxWidth: '100%' }}>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={() => handleClick()}
      >
        <IconButton aria-label="More">
          <MoreHorizIcon />
        </IconButton>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>{postDate}</MenuItem>
        <Divider />
        {LoggedIn.blog_id === blogId && !pinned && (
          <MenuItem onClick={() => handlePin()}>pin</MenuItem>
        )}
        {LoggedIn.blog_id === blogId && pinned && (
          <MenuItem onClick={() => handlePin()}>Unpin</MenuItem>
        )}
        <MenuItem onClick={() => handleCopy()} id={postId}>
          Copy Link
        </MenuItem>

        {LoggedIn.blogId !== blogId && (
          <MenuItem onClick={() => handleUnfollow()} style={{ color: 'red' }}>
            Unfollow
          </MenuItem>
        )}
        {LoggedIn.blog_id !== blogId && (
          <MenuItem onClick={() => handleBlock()} style={{ color: 'red' }}>
            Block
          </MenuItem>
        )}
        <MenuItem onClick={() => handleClose()}>Close</MenuItem>
      </Menu>
    </div>
  );
};

export default MoreMenu;

MoreMenu.propTypes = {
  postId: PropTypes.string.isRequired,
  blogId: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
};
