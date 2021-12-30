import * as React from 'react';
import './css/ProfileHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import ProfileNavBar from './ProfileNavBar';
import { getBlog, fetchBlog } from '../../states/blogslice/blogslice';

function ProfileHeader({ BlogId }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlog(BlogId));// will take BlogId
  }, []);
  const Blog = useSelector(getBlog).response;
  const BlogStatue = useSelector(getBlog).meta;

  return BlogStatue.msg === 'ok' ? (
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
  ) : (
    <>
      <ReactLoading type="bars" color="#fff" width={157} className="loading-block" />
    </>
  );
}
ProfileHeader.propTypes = {
  BlogId: PropTypes.func.isRequired,
  /**
* if user click the close button it will be call function HandelClose
*/
};
export default ProfileHeader;
