import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PropTypes from 'prop-types';
import { blockBlog } from '../../states/features/dashboard/NotesSlice';
import { selectUser } from '../../states/User/UserSlice';
/**
 * This function returns a component for the button ... that includes some options to be applied on
 * a post like : Report / Block /Pin etc.
 * @param {Object} props props are passed to this component contains postID,blogID,post Data as
 * these data will be used to make the selected option/display data related to a specicfic post.
 * @returns returns the component which is on press opens a popover that contains the options
 *  mentioned above.
 */
const MoreMenu = function MoreMenuComponent(props) {
  const { postId, blogId, postTime } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [pinned, setPinned] = useState(false);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const User = useSelector(selectUser);
  // __________________Click handlers____________________\\
  const handleClick = function handleShowMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = function handleCloseMenu() {
    setAnchorEl(null);
  };

  const handlePin = function CheckPostPinning() {
    setPinned(true);
  };

  const handleUnfollow = function Unfollow() {
  };

  const handleBlock = function BlockBlog() {
    dispatch(blockBlog(blogId));
  };

  const handleCopy = function CopyPostLinkOption() {
    navigator.clipboard.writeText(`http://localhost:3000/post/${postId}`); //    !!! TO BE EDITED !!!    //
  };
  return (
    <div sx={{ width: 320, maxWidth: '100%' }}>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event) => handleClick(event)}
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
        <MenuItem>{postTime}</MenuItem>
        <Divider />
        {User.id === blogId && !pinned && (
          <MenuItem onClick={() => handlePin()}>pin</MenuItem>
        )}
        {User.id === blogId && pinned && (
          <MenuItem onClick={() => handlePin()}>Unpin</MenuItem>
        )}
        <MenuItem onClick={() => handleCopy()} id={postId}>
          Copy Link
        </MenuItem>

        {User.id !== blogId && (
          <MenuItem onClick={() => handleUnfollow()} style={{ color: 'red' }}>
            Unfollow
          </MenuItem>
        )}
        {User.id !== blogId && (
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
  postTime: PropTypes.string.isRequired,
};
