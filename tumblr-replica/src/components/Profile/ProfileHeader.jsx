import * as React from 'react';
import './css/ProfileHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import ProfileNavBar from './ProfileNavBar';
import { getBlog, fetchBlog } from '../../states/blogslice/blogslice';

function ProfileHeader() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlog());// will take BlogId
  }, []);
  const Blog = useSelector(getBlog).response;

  return (
    <div className="body">
      <ProfileNavBar />
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
export default ProfileHeader;
