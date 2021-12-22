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

const MyBlog = false;

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
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(FollowedByAsynch());
    dispatch(fetchBlog());// will use blogId
  }, []);

  // eslint-disable-next-line prefer-const
  let FollowInit = useSelector(getFollowed).response;
  const Blog = useSelector(getBlog).response;

  /**
 * toggel follow state from when the user click follow button
 * @param   {hook} setFollow  hook for updating seting follow
 */
  function HandelFollow() {
    console.log('follow called');
    dispatch(FollowAsynch(Blog.id));
    console.log('follow back');
    dispatch(FollowedByAsynch());
  }
  function HandelUnFollow() {
    dispatch(UnFollowAsynch(Blog.id));
    dispatch(FollowedByAsynch());
  }

  return (

    <div className="nav">
      <div className="make-left">
        <IconButton className="exit-btn">
          <FontAwesomeIcon data-testid="CloseBtn" onClick={CloseClicked} icon={faTimes} color="white" className="x" />
        </IconButton>

        <a href={`https://${Blog.username}.tumblr.com/`} className="user-account">{`${Blog.username}.tumblr.com`}</a>
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
          {!MyBlog && <FontAwesomeIcon onClick={OpenChatClicked} icon={faCommentMedical} color="white" className="messages" />}
          {MyBlog && <FontAwesomeIcon icon={faCog} color="white" className="messages" />}
        </IconButton>
        <Menu BlogID={BlogId} />
        {!FollowInit.followed && (!IsTabletOrMobile && !MyBlog) && <button data-testid="FollowBtn" type="button" className="btn" onClick={HandelFollow}>Follow</button>}
        {FollowInit.followed && (!IsTabletOrMobile && !MyBlog) && <button data-testid="FollowBtn" type="button" className="btn" onClick={HandelUnFollow}>Unfollow</button>}
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
