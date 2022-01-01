import * as React from 'react';
import './css/ProfileHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileNavBar from './ProfileNavBar';
import { getBlog, fetchBlog } from '../../states/blogslice/blogslice';

function ProfileHeader({ 
 }) {
  console.log(BlogId, 'from profile header');
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlog(BlogId));// will take BlogId
  }, []);
  const Blog = useSelector(getBlog).response;

  return (
    <div className="body">
      <ProfileNavBar BlogId={BlogId} />
      <div className="photos">
        <img className="cover" src={Blog.header_image} alt="cover" />
        <img className={Blog.avatar_shape === 'square' ? 'square-profile' : 'circle-profile'} src={Blog.avatar} alt="profile pic" />
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
    </div>

  );
}
ProfileHeader.propTypes = {
  BlogId: PropTypes.func.isRequired,
  /**
* if user click the close button it will be call function HandelClose
*/
};
export default ProfileHeader;
