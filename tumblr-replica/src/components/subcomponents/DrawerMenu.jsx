import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faEllipsisH, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBlog, fetchBlog, follow, unFollow, block, unblock,
} from '../../states/blogslice/blogslice';
import '../css/DrawerMenu.css';

const ITEM_HEIGHT = 48;
const MyBlog = false;
/**
 * Component for showing menu items of the returnd blog_id.
 *
 * @component
 * @example
 * const Ask = true
 * const Submit = true
 * const Block=false
 * return (
 *   <Menu />
 * )
 */

export default function LongMenu({ BlogId }) {
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();// use BlogId
  React.useEffect(() => {
    dispatch(fetchBlog()); // use BlogID here
  }, []);
  const blog = useSelector(getBlog);
  const [LogOut, SetLogOut] = useState(false);
  // const [Ask, setAsk] = useState(true);
  // const [Submit, setSubmit] = useState(true);
  // const [Block, setBlock] = useState(false);
  // const [Follow, setFollow] = useState(true);
  // const [Following, setFollowing] = useState(false);
  const [open, setOpen] = useState(false);
  const HandelClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  /**
 * it handel the menue and close it
 * @param   {hook} setAnchor  set it null
 * @param   {hook} setOpen   set it to false
 */
  const HandelClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const HandelUnfollow = () => {
    dispatch(unFollow());
    console.log(BlogId);
  };
  const HandelFollow = () => {
    dispatch(follow());
  };
  const HandelFollowing = () => {
    // will send him to the following page
    HandelClose();
  };
  const HandelAsk = () => {
    // will send him to the profile page
    HandelClose();
  };
  const HandelSubmit = () => {
    // will send him to the profile page
    HandelClose();
  };
  const HandelBlock = () => {
    dispatch(block());
  };
  const HandelUnblock = () => {
    dispatch(unblock());
  };
  const HandelLogOut = () => {
    SetLogOut(!LogOut);
  };

  return (
    <div>
      <IconButton
        // aria-label="more"
        // id="long-button"
        // aria-controls="long-menu"
        // aria-expanded={open}
        // aria-haspopup="true"
        onClick={HandelClick}
      >
        <FontAwesomeIcon className="menu-icon" icon={IsTabletOrMobile ? faUserAlt : faEllipsisH} color="white" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',

        }}
        anchorEl={anchorEl}
        open={open}
        onClose={HandelClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 7,
            width: '25ch',
            textAlign: 'center',
          },
        }}

      >
        {!LogOut && IsTabletOrMobile && blog.follow && !MyBlog && <MenuItem className="menu-item" onClick={HandelUnfollow}>Unfollow</MenuItem>}
        {!LogOut && IsTabletOrMobile && !blog.follow && !MyBlog && <MenuItem className="menu-item" onClick={HandelFollow}>Follow</MenuItem>}
        {LogOut && IsTabletOrMobile && <MenuItem className="menu-item" onClick={HandelLogOut}>Follow</MenuItem>}
        {!LogOut && blog.following && <MenuItem className="menu-item" onClick={HandelFollowing}>Following</MenuItem>}
        {!LogOut && blog.allow_ask && <MenuItem className="menu-item" onClick={HandelAsk}>Ask</MenuItem>}
        {!LogOut && blog.allow_submittions && <MenuItem className="menu-item" onClick={HandelSubmit}>Submit</MenuItem>}
        {!LogOut && blog.block && !MyBlog && <MenuItem className="menu-item" onClick={HandelUnblock}>Unblock</MenuItem>}
        {!LogOut && !blog.block && !MyBlog && <MenuItem className="red-menuitem" onClick={HandelBlock}>Block</MenuItem>}
        <MenuItem className="menu-item" onClick={HandelClose}>Close</MenuItem>
      </Menu>
    </div>
  );
}
LongMenu.propTypes = {
  BlogId: PropTypes.func.isRequired,
  /**
* if user click the close button it will be call function HandelClose
*/
};
