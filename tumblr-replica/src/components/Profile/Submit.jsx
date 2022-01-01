import * as React from 'react';
import './css/ProfileHeader.css';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import Header from './subcomponents/Header';
import ProfileHeader from './ProfileHeader';
import {
  getBlog, fetchBlog,
} from '../../states/blogslice/blogslice';
import { getBlogId, fetchBlogId } from '../../states/blognameslice/blogNameSlice';

function Submit() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const blogid = useSelector(getBlogId).response.id;
  React.useEffect(() => {
    dispatch(fetchBlogId(username));// will take BlogId
    dispatch(fetchBlog(blogid));// will use blogId
  }, [blogid]);
  const Blog = useSelector(getBlog).response;
  const statue = useSelector(getBlogId).meta;
  const BlogStatue = useSelector(getBlog).meta;
  const Error = useSelector(getBlogId).error;
  // eslint-disable-next-line no-nested-ternary
  return BlogStatue.msg === 'ok' && statue.msg === 'ok' ? (Blog.allow_submittions ? (
    <div>
      <ProfileHeader BlogId={blogid} />
      <div className="navv">
        <div className="navv-menu">
          <ul className="inline-navv">
            <li className="navv-item">
              <Link className="navv-link" to={`/profile/${Blog.username}`}>POSTS</Link>
            </li>
            {Blog.share_likes && (
              <li className="navv-item">
                <Link className="navv-link" to={`/profile/${Blog.username}/likes`}>LIKES</Link>
              </li>
            )}
            {Blog.allow_ask && (
              <li className="navv-item">
                <Link className="navv-link" to={`/profile/${Blog.username}/ask`}>ASK ME ANYTHING</Link>
              </li>
            )}
            {Blog.allow_submittions && (
              <li className="navv-item">
                <Link className="navv-link-selected" to={`/profile/${Blog.username}/submit`}>SUBMIT A POST</Link>
              </li>
            )}
          </ul>
        </div>
        <div style={{ width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
          <Header blogid={blogid} />
        </div>
      </div>
    </div>
  ) : (
    <>
      <ProfileHeader BlogId={blogid} />
      {!Blog.allow_submittions && <div className="not-found"> This blog not allow submittions </div>}
    </>
  )) : (
    (Error && (<Navigate to="/notfound" />)) || (
      <>
        <ReactLoading type="bars" color="#fff" width={157} className="loading-block" />
      </>
    )
  );
}
export default Submit;
