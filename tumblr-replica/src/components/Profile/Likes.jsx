import * as React from 'react';
import './css/ProfileHeader.css';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Grid from '@mui/material/Grid';
import ReactLoading from 'react-loading';
import ProfileHeader from './ProfileHeader';
import { getBlog, fetchBlog } from '../../states/blogslice/blogslice';
// import PostsList from '../PostLikes/PostsLikes';
import LikesPosts from '../LikesPosts/LikesPosts';
import { getPostsliked, fetchAsyncPostsLiked } from '../../states/likedposts/likedpostsSlice';
// import { tosmall } from '../../states/features/postview/postviewSlice';
import { getBlogId, fetchBlogId } from '../../states/blognameslice/blogNameSlice';

/**
 * Component to show profileHeader of the blog with his liked posts
 *
 * @component
 * @name
 * Likes
 * @example
 * <profileHeader BlogId={BlogId} />
 * <postCard posts={posts} />
 * return (
 *   <Likes />
 * )
 */

function Likes() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const blogid = useSelector(getBlogId).response.id;
  React.useEffect(() => {
    dispatch(fetchBlogId(username));
    dispatch(fetchBlog(blogid)); // will use blogId
    dispatch(fetchAsyncPostsLiked(blogid));
    // dispatch(tosmall());
  }, [blogid]);
  const Blog = useSelector(getBlog).response;
  const Posts = useSelector(getPostsliked);
  const Error = useSelector(getBlogId).error;
  const statue = useSelector(getBlogId).meta;
  const BlogStatue = useSelector(getBlog).meta;
  // eslint-disable-next-line no-nested-ternary
  return statue.msg === 'ok' && BlogStatue.msg === 'ok' ? (Blog.share_likes ? (
    <div>
      <ProfileHeader BlogId={blogid} />
      <div className="navv">
        <div className="navv-menu">
          <ul className="inline-navv">
            <li className="navv-item">
              <Link
                className="navv-link"
                to={`/profile/${Blog.username}`}
              >
                POSTS
              </Link>
            </li>
            {(Blog.share_likes) && (
              <li className="navv-item">
                <Link
                  className="navv-link-selected"
                  to={`/profile/${Blog.username}/likes`}
                >
                  LIKES
                </Link>
              </li>
            )}
            {Blog.allow_ask && (
              <li className="navv-item">
                <Link
                  className="navv-link"
                  to={`/profile/${Blog.username}/ask`}
                >
                  ASK ME ANYTHING
                </Link>
              </li>
            )}
            {Blog.allow_submittions && (
              <li className="navv-item">
                <Link
                  className="navv-link"
                  to={`/profile/${Blog.username}/submit`}
                >
                  SUBMIT A POST
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="liked-posts">
        <LikesPosts Posts={Posts} />
      </div>
    </div>
  ) : (
    <>
      <ProfileHeader BlogId={blogid} />
      {!Blog.share_likes && <div div className="not-found"> This blog not allow his likes to been seen </div>}
    </>

  )) : (
    (Error && (<Navigate to="/notfound" />)) || (
      <>
        <ReactLoading type="bars" color="#fff" width={157} className="loading-block" />
      </>
    )
  );
}
export default Likes;
