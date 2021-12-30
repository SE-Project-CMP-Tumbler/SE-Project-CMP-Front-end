import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentMedical, faUserAlt, faEye, faHome, faCog,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FollowAsynch } from '../../states/followslice/followslice';
import { UnFollowAsynch } from '../../states/followslice/unfollowSlice';
import { getFollowed, FollowedByAsynch } from '../../states/followslice/getfollowslice';
import { getBlocked, BlockedByAsynch } from '../../states/blockSlice/getblockslice';
import { getBlog } from '../../states/blogslice/blogslice';
import { BlockAsynch } from '../../states/blockSlice/blockslice';
import { selectUser } from '../../states/User/UserSlice';
// import { setHideAll } from '../../states/hidenav/hidenavSlice';
import './css/ProfileNavBar.css';

// const MyBlog = false;
// _________takecare login must be handeld
function ProfileNavBar({ BlogId }) {
  const [Open, SetOpen] = useState(false);

  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(setHideAll(true));
  //   return () => {
  //     dispatch(setHideAll(false));
  //   };
  // }, []);
  React.useEffect(() => {
    dispatch(FollowedByAsynch(BlogId));
    dispatch(BlockedByAsynch(BlogId));
  }, []);
  const User = useSelector(selectUser);
  const Blog = useSelector(getBlog).response;
  // eslint-disable-next-line prefer-const
  let BlockInit = useSelector(getBlocked).response; // will be used insted of blog.follow
  // eslint-disable-next-line prefer-const
  let FollowInit = useSelector(getFollowed).response;

  function HandelBlock() {
    dispatch(BlockAsynch(BlogId));
    dispatch(BlockedByAsynch(BlogId));
  }
  function HandelFollow() {
    dispatch(FollowAsynch(BlogId));
    dispatch(FollowedByAsynch(BlogId));
  }
  function HandelUnFollow() {
    dispatch(UnFollowAsynch(BlogId));
    dispatch(FollowedByAsynch(BlogId));
  }

  return (
    <div className="nav">
      <IconButton>
        <Link to="/dashboard" target="_blank">
          <FontAwesomeIcon data-testid="HomeIcon" className="icons" icon={faHome} color="white" />
        </Link>
      </IconButton>
      <IconButton>

        <Link to={'/blog/view/' + Blog.username} target="_blank">
          <FontAwesomeIcon className="icons" icon={faEye} color="white" />
        </Link>
      </IconButton>
      {User.primaryBlogId.toString() !== BlogId && (
        <IconButton>
          <FontAwesomeIcon className="icons" icon={faCommentMedical} color="white" />
          {// take it to the dashboard and open the chat
          }
        </IconButton>
      )}
      {User.primaryBlogId.toString() !== BlogId && Open && !FollowInit.followed && <button data-testid="FollowBtn" type="button" className="btn" onClick={HandelFollow}>Follow</button>}
      {User.primaryBlogId.toString() !== BlogId && Open && FollowInit.followed && <button type="button" className="btn" onClick={HandelUnFollow}>Unfollow</button>}
      {User.primaryBlogId.toString() !== BlogId && Open && BlockInit.is_blocking && <button type="button" className="btn">Blocked</button>}
      {User.primaryBlogId.toString() !== BlogId && Open && !BlockInit.is_blocking && <button data-testid="BlockBtn" type="button" className="btn" onClick={HandelBlock}>Block</button>}
      <IconButton>
        {User.primaryBlogId.toString() !== BlogId && <FontAwesomeIcon data-testid="HumanIcon" onClick={() => SetOpen(!Open)} className="icons" icon={faUserAlt} color="white" />}
        {User.primaryBlogId.toString() === BlogId && (
          <Link to={'/settings/blog/' + Blog.username} target="_blank">
            <FontAwesomeIcon className="icons" icon={faCog} color="white" />
          </Link>
        )}
      </IconButton>
    </div>
  );
}
ProfileNavBar.propTypes = {
  BlogId: PropTypes.func.isRequired,
  /**
* if user click the close button it will be call function HandelClose
*/
};
export default ProfileNavBar;
