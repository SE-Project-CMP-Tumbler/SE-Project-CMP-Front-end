import * as React from 'react';
import './css/ProfileHeader.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import PostCard from '../NewsFeed/subcomponents/PostCard/PostCard';
import { getMyPosts, fetchAsyncMyPosts } from '../../states/mypostsslice/mypostsSlice';
import ProfileHeader from './ProfileHeader';
import {
  getBlog, fetchBlog,
} from '../../states/blogslice/blogslice';

function Posts() {
  const { blogid } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBlog(blogid));// will use blogId
    dispatch(fetchAsyncMyPosts(blogid));
  }, []);
  const Blog = useSelector(getBlog).response;
  const { posts } = useSelector(getMyPosts).response;
  return (
    <div>
      <ProfileHeader BlogId={blogid} />
      <div className="navv">
        <div className="navv-menu">
          <ul className="inline-navv">
            <li className="navv-item">
              <Link className="navv-link-selected" to={`/profile/${blogid}`}>POSTS</Link>
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
                <Link className="navv-link" to={`/profile/${blogid}/submit`}>SUBMIT A POST</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="profile-posts">
        {posts
          && posts.map((post) => (
            <>
              <Grid
                item
                xs
                container
                direction="row"
                key={post.post_id}
                spacing={2}
                style={{ justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}
                sx={{ mb: 2, mt: 0 }}
              >
                <Grid item>
                  <PostCard
                    postId={post.post_id}
                    postTime={post.post_date}
                    blogId={post.blog_id}
                    blogUsername=""
                    postBody={post.post_body}
                    blogAvatar={post.blog_avatar}
                    xs={10}
                    sx={{ mt: 0 }}
                  />
                </Grid>
              </Grid>
            </>
          ))}
      </div>
    </div>
  );
}
export default Posts;
