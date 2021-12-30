import * as React from 'react';
import './css/ProfileHeader.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from "./subcomponents/Header";
import ReactLoading from 'react-loading';
import ProfileHeader from './ProfileHeader';
import {
  getBlog, fetchBlog,
} from '../../states/blogslice/blogslice';

function Submit() {
  const { blogid } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBlog(blogid));// will use blogId
  }, []);
  const Blog = useSelector(getBlog).response;
  const BlogStatue = useSelector(getBlog).meta;
  // eslint-disable-next-line no-nested-ternary
  return BlogStatue.msg === 'ok' ? (Blog.allow_submittions ? (
    <div>
      <ProfileHeader BlogId={blogid} />
      <div className="navv">
        <div className="navv-menu">
          <ul className="inline-navv">
            <li className="navv-item">
              <Link className="navv-link" to={`/profile/${blogid}`}>POSTS</Link>
            </li>
            {Blog.share_likes && (
              <li className="navv-item">
                <Link className="navv-link" to={`/profile/${blogid}/likes`}>LIKES</Link>
              </li>
            )}
            {Blog.allow_ask && (
              <li className="navv-item">
                <Link className="navv-link" to={`/profile/${blogid}/ask`}>ASK ME ANYTHING</Link>
              </li>
            )}
            {Blog.allow_submittions && (
              <li className="navv-item">
                <Link className="navv-link-selected" to={`/profile/${blogid}/submit`}>SUBMIT A POST</Link>
              </li>
            )}
          </ul>
        </div>
        <Header />
      </div>
    </div>
  ) : (
    <>
      <ProfileHeader BlogId={blogid} />
      {!Blog.allow_submittions && <div className="not-found"> This blog not allow submittions </div>}
    </>
  )) : (
    <>
      <ReactLoading type="bars" color="#fff" width={157} className="loading-block" />
    </>
  );
}
export default Submit;
