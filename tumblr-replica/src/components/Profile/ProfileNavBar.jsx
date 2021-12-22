import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentMedical, faUserAlt, faEye, faHome, faCog,
} from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBlog, fetchBlog,
} from '../../states/blogslice/blogslice';
import { FollowAsynch } from '../../states/followslice/followslice';
import { UnFollowAsynch } from '../../states/followslice/unfollowSlice';
import { getFollowed, FollowedByAsynch } from '../../states/followslice/getfollowslice';

import './css/ProfileNavBar.css';

const MyBlog = false;
function ProfileNavBar() {
  const [Block, SetBlock] = useState(false);
  const [Open, SetOpen] = useState(false);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FollowedByAsynch());
    dispatch(fetchBlog());// will use blogId
  }, []);

  // eslint-disable-next-line prefer-const
  let FollowInit = useSelector(getFollowed).response;
  const Blog = useSelector(getBlog).response;

  function HandelBlock() {
    SetBlock(true);
  }
  function HandelFollow() {
    dispatch(FollowAsynch(Blog.id));
    dispatch(FollowedByAsynch());
  }
  function HandelUnFollow() {
    dispatch(UnFollowAsynch(Blog.id));
    dispatch(FollowedByAsynch());
  }

  return (
    <div className="nav">
      <IconButton>
        <a href="https://www.tumblr.com/dashboard" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="icons" icon={faHome} color="white" />
          {' '}

        </a>
      </IconButton>
      <IconButton>

        <a href={`https://www.tumblr.com/blog/view/${Blog.username}`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="icons" icon={faEye} color="white" />
          {' '}

        </a>
      </IconButton>
      {!MyBlog && (
        <IconButton>
          <FontAwesomeIcon className="icons" icon={faCommentMedical} color="white" />
        </IconButton>
      )}
      {!MyBlog && Open && !FollowInit.followed && <button type="button" className="btn" onClick={HandelFollow}>Follow</button>}
      {!MyBlog && Open && FollowInit.followed && <button type="button" className="btn" onClick={HandelUnFollow}>Unfollow</button>}
      {!MyBlog && Open && <button type="button" className="btn" onClick={HandelBlock}>{!Block ? 'Block' : 'Blocked'}</button>}
      <IconButton>
        {!MyBlog && <FontAwesomeIcon onClick={() => SetOpen(!Open)} className="icons" icon={faUserAlt} color="white" />}
        {MyBlog && (
          <a href={`https://www.tumblr.com/settings/blog/${Blog.username}`}>
            <FontAwesomeIcon className="icons" icon={faCog} color="white" />
            {' '}
          </a>
        )}
      </IconButton>

    </div>
  );
}
export default ProfileNavBar;
