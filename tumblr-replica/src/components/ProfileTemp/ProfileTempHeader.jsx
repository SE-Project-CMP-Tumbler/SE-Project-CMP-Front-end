import * as React from 'react';
import './css/ProfileHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Box from '@mui/material/Box';

import { getBlog, fetchBlog } from '../../states/blogslice/blogslice';

function ProfileHeader({ BlogId }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlog(BlogId));
  }, []);
  const Blog = useSelector(getBlog);

  return (
    <div className="body" style={{ height: '300px', width: '300px', overflow: 'hidden' }}>
      {Blog.meta.status === '200'
        ? (
          <div>
            <div className="photos">
              <img className="cover" style={{ height: '100px' }} src={Blog.response.header_image} alt="cover" />
            </div>
            <div className="text">
              <h1 className="colorchange">
                {Blog.response.title}
              </h1>
              <p className="description">
                {Blog.response.description}
              </p>
            </div>
          </div>
        )
        : (Blog.meta.msg === 'Loading' && <Box style={{ marginLeft: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>)}
    </div>

  );
}
ProfileHeader.propTypes = {
  BlogId: PropTypes.number.isRequired,
  /**
* if user click the close button it will be call function HandelClose
*/
};
export default ProfileHeader;
