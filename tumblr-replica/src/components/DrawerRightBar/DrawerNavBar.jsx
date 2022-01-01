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
import { Link } from 'react-router-dom';
import Menu from './DrawerMenu';
import {
  getBlog,
} from '../../states/blogslice/blogslice';
import { FollowAsynch } from '../../states/followslice/followslice';
import { UnFollowAsynch } from '../../states/followslice/unfollowSlice';
import { getFollowed, FollowedByAsynch } from '../../states/followslice/getfollowslice';
import { selectUser } from '../../states/User/UserSlice';

// const MyBlog = true;

/**
 * Component for showing navBar of the  returned blogid
 * the navbar differ if it shows this blog navbar or foe diffrent blog
 *
 * @component
 * @name
 * NavBar
 * @example
 * <Menu BlogId={BlogId} />
 * const Follow=followInit.followed
 * return (
 *   <NavBar CloseCliked={CloseCliked}) />
 * )
 */

function NavBar({ CloseClicked, OpenChatClicked, BlogId }) {
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(FollowedByAsynch(BlogId));
  }, []);

  // eslint-disable-next-line prefer-const
  let FollowInit = useSelector(getFollowed).response;
  const Blog = useSelector(getBlog).response;
  const User = useSelector(selectUser);

  /**
 * toggel follow state from when the user click follow button
 * @param   {function} HandelFollow  function for follow blog
 */
  function HandelFollow() {
    dispatch(FollowAsynch(BlogId));
    dispatch(FollowedByAsynch(BlogId));
  }
  /**
* toggel follow state from when the user click follow button
* @param   {function} HandelUnFollow  function for for follow blog
*/
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

        <Link to={`/profile/${Blog.username}`} className="user-account">{`${Blog.username}.tumbler.com`}</Link>
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
          {User.primaryBlogId !== BlogId && <FontAwesomeIcon onClick={OpenChatClicked} icon={faCommentMedical} color="white" className="messages icons-drawer" />}
          {User.primaryBlogId === BlogId && (
            <Link to={`/settings/blog/${Blog.username}`} target="blank">
              <FontAwesomeIcon className="icons" icon={faCog} color="white" />
            </Link>
          )}
        </IconButton>
        <Menu BlogId={BlogId} />
        {!FollowInit.followed && (!IsTabletOrMobile && User.primaryBlogId !== BlogId) && <button data-testid="FollowBtn" type="button" className="btn-drawer" onClick={HandelFollow}>Follow</button>}
        {FollowInit.followed && (!IsTabletOrMobile && User.primaryBlogId !== BlogId) && <button data-testid="FollowBtn" type="button" className="btn-drawer" onClick={HandelUnFollow}>Unfollow</button>}
      </div>
    </div>
  );
}
NavBar.propTypes = {
  CloseClicked: PropTypes.func.isRequired,
  OpenChatClicked: PropTypes.func.isRequired,
  BlogId: PropTypes.func.isRequired,
  /**
   * @param {CloseClicked}
   * if user click the close button it will be call function HandelClose
   */
  /**
 * @param {OpenChatClicked}
 * if user click the chat button it will be call function openChat
 */
};
export default NavBar;
