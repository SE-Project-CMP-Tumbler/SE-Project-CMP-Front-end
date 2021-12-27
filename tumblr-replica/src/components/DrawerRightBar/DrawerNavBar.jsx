import * as React from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faCommentMedical, faCog,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import './css/DrawerNavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './DrawerMenu';
import {
  getBlog, fetchBlog,
} from '../../states/blogslice/blogslice';
import { FollowAsynch } from '../../states/followslice/followslice';
import { UnFollowAsynch } from '../../states/followslice/unfollowSlice';
import { getFollowed, FollowedByAsynch } from '../../states/followslice/getfollowslice';
import { selectUser } from '../../states/User/UserSlice';

// const MyBlog = true;

/**
 * Component for showing navBar of the returned blog id
 *
 * @component
 * @example
 * <Menu />
 * const Search = false
 * const Follow=false
 * const IsTabletOrMobile=false
 * const UserAccount=User.account()
 * return (
 *   <NavBar CloseCliked={CloseCliked}) />
 * )
 */

function NavBar({ CloseClicked, OpenChatClicked, BlogId }) {
  console.log(BlogId, 'blog id from navBar');
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(FollowedByAsynch(BlogId));
    dispatch(fetchBlog(BlogId));// will use blogId
  }, []);

  // eslint-disable-next-line prefer-const
  let FollowInit = useSelector(getFollowed).response;
  const Blog = useSelector(getBlog).response;
  const User = useSelector(selectUser);

  /**
 * toggel follow state from when the user click follow button
 * @param   {hook} setFollow  hook for updating seting follow
 */
  function HandelFollow() {
    console.log('follow called');
    dispatch(FollowAsynch(BlogId));
    console.log('follow back');
    dispatch(FollowedByAsynch(BlogId));
  }
  function HandelUnFollow() {
    dispatch(UnFollowAsynch(BlogId));
    dispatch(FollowedByAsynch(BlogId));
  }

  return (

    <div className="nav-drawer">
      <div className="make-left">
        <IconButton className="exit-btn">
          <FontAwesomeIcon data-testid="CloseBtn" onClick={CloseClicked} icon={faTimes} color="white" className="x icons-drawer" />
        </IconButton>

        <a href={`https://web.dev.tumbler.social/profile/${BlogId}`} className="user-account">{`${Blog.username}.tumblr.com`}</a>
      </div>
      <div className="make-right">

        {
          // {Search && <input data-testid="SearchText" type="text" placeholder="Search"
          // className = "search-text"
          /// >}
          // <IconButton onClick={() => setSearch(!Search)}>
          // <FontAwesomeIcon icon={faSearch} color="white" className="sarch-icon"
          // data-testid="SearchBtn" />
          // </IconButton> */
        }

        <IconButton>
          {User.primaryBlogId.toString() !== BlogId && <FontAwesomeIcon onClick={OpenChatClicked} icon={faCommentMedical} color="white" className="messages icons-drawer" />}
          {User.primaryBlogId.toString() === BlogId && (
            <a href={`https://web.dev.tumbler.social/settings/blog/${BlogId}`} target="blank">
              <FontAwesomeIcon className="icons" icon={faCog} color="white" />
            </a>
          )}
        </IconButton>
        <Menu BlogId={BlogId} />
        {!FollowInit.followed && (!IsTabletOrMobile && User.primaryBlogId.toString() !== BlogId) && <button data-testid="FollowBtn" type="button" className="btn-drawer" onClick={HandelFollow}>Follow</button>}
        {FollowInit.followed && (!IsTabletOrMobile && User.primaryBlogId.toString() !== BlogId) && <button data-testid="FollowBtn" type="button" className="btn-drawer" onClick={HandelUnFollow}>Unfollow</button>}
      </div>
    </div>
  );
}
NavBar.propTypes = {
  CloseClicked: PropTypes.func.isRequired,
  OpenChatClicked: PropTypes.func.isRequired,
  BlogId: PropTypes.func.isRequired,
  /**
   * if user click the close button it will be call function HandelClose
   */
};
export default NavBar;
