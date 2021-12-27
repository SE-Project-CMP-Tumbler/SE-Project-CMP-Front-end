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
  getBlog,
} from '../../states/blogslice/blogslice';
import { UnFollowAsynch } from '../../states/followslice/unfollowSlice';
import { FollowAsynch } from '../../states/followslice/followslice';
import { getFollowed, FollowedByAsynch } from '../../states/followslice/getfollowslice';
import { getBlocked, BlockedByAsynch } from '../../states/blockSlice/getblockslice';
import { BlockAsynch } from '../../states/blockSlice/blockslice';
import { UnBlockAsynch } from '../../states/blockSlice/unblockslice';
import { selectUser } from '../../states/User/UserSlice';
import './css/DrawerMenu.css';

const ITEM_HEIGHT = 48;
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
  console.log(BlogId, 'blog id from menu');
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();// use BlogId
  React.useEffect(() => {
    dispatch(FollowedByAsynch(BlogId)); // not needed
    dispatch(BlockedByAsynch(BlogId)); // the only one should be fetshed
  }, []);
  const User = useSelector(selectUser);
  console.log(User.primaryBlogId, 'pbid', BlogId);
  // const id = BlogId.toString();
  // eslint-disable-next-line prefer-const
  let BlockInit = useSelector(getBlocked).response; // will be used insted of blog.follow
  /* takecare from the logic here */
  const blog = useSelector(getBlog).response;
  // eslint-disable-next-line prefer-const
  let FollowInit = useSelector(getFollowed).response;
  // let BlockStatue = useSelector(getBlock).meta;
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
    dispatch(UnFollowAsynch(BlogId));
    dispatch(FollowedByAsynch(BlogId));
  };
  const HandelFollow = () => {
    dispatch(FollowAsynch(BlogId));
    dispatch(FollowedByAsynch(BlogId));
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
    dispatch(BlockAsynch(BlogId, User.id));
    dispatch(BlockedByAsynch(BlogId, User.id));
  };
  const HandelUnblock = () => {
    dispatch(UnBlockAsynch(BlogId, User.id));
    dispatch(BlockedByAsynch(BlogId, User.id));
  };

  return (
    <div>
      <IconButton
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
            width: '20ch',
            textAlign: 'center',
          },
        }}

      >
        {User.loggedin && IsTabletOrMobile && FollowInit.followed && User.primaryBlogId.toString() !== BlogId && <MenuItem className="menu-item" onClick={HandelUnfollow}>Unfollow</MenuItem>}
        {User.loggedin && IsTabletOrMobile && !FollowInit.followed && User.primaryBlogId.toString() !== BlogId && <MenuItem className="menu-item" onClick={HandelFollow}>Follow</MenuItem>}
        {!User.loggedin && IsTabletOrMobile && <MenuItem className="menu-item" onClick={HandelClose}>Follow</MenuItem>}
        {User.loggedin && blog.share_followings && <MenuItem className="menu-item" onClick={HandelFollowing}><a target="blank" href={`https://web.dev.tumbler.social/followed/by/${BlogId}`}>Following</a></MenuItem>}
        {User.loggedin && blog.allow_ask && <MenuItem className="menu-item" onClick={HandelAsk}><a href={`https://web.dev.tumbler.social/profile/${BlogId}/ask`} target="blank">Ask</a></MenuItem>}
        {User.loggedin && blog.allow_submittions && <MenuItem className="menu-item" onClick={HandelSubmit}><a href={`https://web.dev.tumbler.social/profile/${BlogId}/submit`} target="blank">Submit</a></MenuItem>}
        {User.loggedin && BlockInit.is_blocking && User.primaryBlogId.toString() !== BlogId && <MenuItem className="menu-item" onClick={HandelUnblock}>Unblock</MenuItem>}
        {User.loggedin && !BlockInit.is_blocking && User.primaryBlogId.toString() !== BlogId && <MenuItem className="red-menuitem" onClick={HandelBlock}>Block</MenuItem>}
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
