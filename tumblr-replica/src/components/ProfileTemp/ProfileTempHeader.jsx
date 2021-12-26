import * as React from 'react';
import './css/ProfileHeader.css';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileNavBar from './PrfileTempNavBar';
import { getBlog, fetchBlog } from '../../states/blogslice/blogslice';

function ProfileHeader({ BlogId }) {
  const IsSmall = useMediaQuery({ query: '(max-width: 600px)' });
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlog(BlogId));
  }, []);
  const Blog = useSelector(getBlog).response;

  return (
    <div className="body">
      <ProfileNavBar BlogId={BlogId} />
      <div className="photos">
        <img className="cover" src={Blog.header_image} alt="cover" />
        {!IsSmall && <img className={Blog.avatar_shape === 'square' ? 'square-profile' : 'circle-profile'} src={Blog.avatar} alt="profile pic" />}
        {IsSmall && <img className={Blog.avatar_shape === 'square' ? 'square-profile-small' : 'circle-profile-small'} src={Blog.avatar} alt="profile pic" />}
      </div>
      <div className="text">
        <h1 className="title">
          {Blog.title}
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
