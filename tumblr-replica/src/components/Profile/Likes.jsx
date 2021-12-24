import * as React from 'react';
import './css/ProfileHeader.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileHeader from './ProfileHeader';
import { getBlog, fetchBlog } from '../../states/blogslice/blogslice';

function Likes() {
  const { blogid } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBlog(blogid)); // will use blogId
  }, []);
  const Blog = useSelector(getBlog).response;
  return Blog.share_likes ? (
    <div>
      <ProfileHeader BlogId={blogid} />
      <div className="navv">
        <div className="navv-menu">
          <ul className="inline-navv">
            <li className="navv-item">
              <Link
                className="navv-link"
                to={`/profile/${blogid}`}
              >
                POSTS
              </Link>
            </li>
            {Blog.share_likes && (
              <li className="navv-item">
                <Link
                  className="navv-link-selected"
                  to={`/profile/${blogid}/likes`}
                >
                  LIKES
                </Link>
              </li>
            )}
            {Blog.allow_ask && (
              <li className="navv-item">
                <Link
                  className="navv-link"
                  to={`/profile/${blogid}/ask`}
                >
                  ASK ME ANYTHING
                </Link>
              </li>
            )}
            {Blog.allow_submittions && (
              <li className="navv-item">
                <Link
                  className="navv-link"
                  to={`/profile/${blogid}/submit`}
                >
                  SUBMIT A POST
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <>
      <ProfileHeader BlogId={blogid} />
      {!Blog.share_likes && <div div className="not-found"> This blog not allow his likes to been seen </div>}
    </>

  );
}
export default Likes;
