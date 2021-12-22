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
import { getBlocked } from '../../states/blockSlice/getblockslice';
import { getBlock, BlockAsynch, UnBlockAsynch } from '../../states/blockSlice/blockslice';
import './css/DrawerMenu.css';

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
  const BlockInit = useSelector(getBlocked).response; // will be used insted of blog.follow
  const [Block, setBlock] = useState(BlockInit.block);// will be changed
  // React.useEffect(() => {
  //   dispatch(fetchBlog()); // use BlogID here
  //   dispatch(FollowedByAsynch()); // not needed
  //   // dispatch(BlockedByAsynch(setBlock)); // the only one should be fetshed
  // }, []);
  /* takecare from the logic here */
  const blog = useSelector(getBlog).response;
  console.log(BlogId);
  // eslint-disable-next-line prefer-const
  let FollowInit = useSelector(getFollowed).response;
  // let BlockStatue = useSelector(getBlock).meta;
  const [LogOut, SetLogOut] = useState(false);
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
    dispatch(UnFollowAsynch(blog.id));
    dispatch(FollowedByAsynch());
  };
  const HandelFollow = () => {
    dispatch(FollowAsynch(blog.id));
    dispatch(FollowedByAsynch());
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
    dispatch(UnBlockAsynch(blog.id));
    const BlockStatue = useSelector(getBlock).meta;
    if (BlockStatue.status === '200') {
      setBlock(true);
    } else if (BlockStatue.status === '401') {
      console.log('UnAutharized');
    } else if (BlockStatue.status === '403') {
      console.log('forbidden');
    } else if (BlockStatue.status === '401') {
      console.log('UnAutharized');
    }
  };
  const HandelUnblock = () => {
    // dispatch(unblock());
    dispatch(BlockAsynch(blog.id));
    const BlockStatue = useSelector(getBlock).meta;
    if (BlockStatue.status === '200') {
      setBlock(true);
    } else if (BlockStatue.status === '401') {
      console.log('UnAutharized');
    } else if (BlockStatue.status === '403') {
      console.log('forbidden');
    } else if (BlockStatue.status === '401') {
      console.log('UnAutharized');
    }
  };
  const HandelLogOut = () => {
    SetLogOut(!LogOut);
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
        {!LogOut && IsTabletOrMobile && FollowInit.followed && !MyBlog && <MenuItem className="menu-item" onClick={HandelUnfollow}>Unfollow</MenuItem>}
        {!LogOut && IsTabletOrMobile && !FollowInit.followed && !MyBlog && <MenuItem className="menu-item" onClick={HandelFollow}>Follow</MenuItem>}
        {LogOut && IsTabletOrMobile && <MenuItem className="menu-item" onClick={HandelLogOut}>Follow</MenuItem>}
        {!LogOut && <MenuItem className="menu-item" onClick={HandelFollowing}><a href={`https://www.tumblr.com/followed/by/${blog.username}`}>Following</a></MenuItem>}
        {!LogOut && blog.allow_ask && <MenuItem className="menu-item" onClick={HandelAsk}><a href={`https://${blog.username}.tumblr.com/ask`} target="blank">Ask</a></MenuItem>}
        {!LogOut && blog.allow_submittions && <MenuItem className="menu-item" onClick={HandelSubmit}><a href={`https://${blog.username}.tumblr.com/submit`} target="blank">Submit</a></MenuItem>}
        {!LogOut && Block && !MyBlog && <MenuItem className="menu-item" onClick={HandelUnblock}>Unblock</MenuItem>}
        {!LogOut && !Block && !MyBlog && <MenuItem className="red-menuitem" onClick={HandelBlock}>Block</MenuItem>}
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
