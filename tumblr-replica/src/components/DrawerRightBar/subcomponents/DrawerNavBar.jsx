import * as React from 'react';
import { IconButton } from '@mui/material';
// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faCommentMedical, faCog,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import '../css/DrawerNavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './DrawerMenu';
import {
  getBlog, fetchBlog, follow, unFollow,
} from '../../../states/blogslice/blogslice';
// import { create } from '../../../../states/slices/blogSlice';

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
  // const [Search, setSearch] = useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlog());// will use blogId
  }, []);
  const Blog = useSelector(getBlog);
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  /**
 * toggel follow state from when the user click follow button
 * @param   {hook} setFollow  hook for updating seting follow
 */
  function HandelFollow() {
    if (Blog.follow) {
      dispatch(unFollow());
    } else {
      dispatch(follow());
    }
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
        {(!IsTabletOrMobile && !MyBlog) && <button data-testid="FollowBtn" type="button" className="btn" onClick={HandelFollow}>{!Blog.follow ? 'Follow' : 'Unfollow'}</button>}

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
