import * as React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './DrawerNavBar';
import { getBlog, fetchBlog } from '../../../states/blogslice/blogslice';
import '../css/DrawerHeader.css';

/**
 * Component for navbar, cover img ,profile img ,blog name and blog discription.
 *
 * @component
 * @example
 * <NavBar CloseClicked={CloseClicked} />
 * const UserProfile = User.profile()
 * const UserCover = User.cover()
 * const UserName=User.blogName()
 * const UserDiscription=User.discription()
 * return (
 *   <Header CloseClicked={CloseClicked} />
 * )
 */

function Header({ CloseClicked, OpenChatClicked, BlogId }) {
  // const title = 'ghareeb';
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlog());// will take BlogId
  }, []);
  const Blog = useSelector(getBlog);
  return (
    <div className="Body">
      <NavBar CloseClicked={CloseClicked} OpenChatClicked={OpenChatClicked} BlogId={BlogId} />
      <div className="photos">
        <a target="blank" href={`https://${Blog.username}.tumblr.com/`}>
          <img className="cover" src={Blog.header_image} alt="cover" />
        </a>
        <a target="blank" href={`https://${Blog.username}.tumblr.com/`}>
          <img className={Blog.avatar_shape === 'square' ? 'square-profile' : 'circle-profile'} src={Blog.avatar} alt="profile pic" />
        </a>
      </div>
      <div className="text">
        <h1 className="title">
          {' '}
          {Blog.title}
          {' '}
        </h1>
        <p className="description">
          {Blog.description}
        </p>
      </div>
      <div className="posts">
        here posts will be integrated
      </div>
    </div>
  );
}
Header.propTypes = {
  CloseClicked: PropTypes.func.isRequired,
  OpenChatClicked: PropTypes.func.isRequired,
  BlogId: PropTypes.func.isRequired,
  /**
* if user click the close button it will be call function HandelClose
*/
};
export default Header;
