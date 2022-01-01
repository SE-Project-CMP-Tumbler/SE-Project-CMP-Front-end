import * as React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import NavBar from './DrawerNavBar';
import { getBlog, fetchBlog } from '../../states/blogslice/blogslice';
import PostCard from '../NewsFeed/subcomponents/PostCard/PostCard';
import { getMyPosts, fetchAsyncMyPosts } from '../../states/mypostsslice/mypostsSlice';
import './css/DrawerHeader.css';

/**
 * Component for navbar, cover img ,profile img ,blog name and blog discription.
 *
 * @component
 * @example
 * <NavBar CloseClicked={CloseClicked} />
 * const UserProfile = User.profile()
 * const UserCover = User.cover()
 * const UserName=User.blogName()
 * const UserDiscription=User.discription()
 * return (
 *   <Header CloseClicked={CloseClicked} />
 * )
 */

function Header({ CloseClicked, OpenChatClicked, BlogId }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlog(BlogId));// will take BlogId
    dispatch(fetchAsyncMyPosts(BlogId));
  }, [BlogId]);
  const Blog = useSelector(getBlog).response;
  const BlogStatue = useSelector(getBlog).meta;
  const Posts = useSelector(getMyPosts).response.posts;
  return BlogStatue.msg === 'ok' ? (
    <div className="Body">
      <NavBar CloseClicked={CloseClicked} OpenChatClicked={OpenChatClicked} BlogId={BlogId} />
      <div className="photos">
        <Link target="_blank" to={`/profile/${Blog.username}`}>
          <img className="cover-drawer" src={Blog.header_image} alt="cover" />
        </Link>
        <Link target="_blank" to={`/profile/${Blog.username}`}>
          <img className={Blog.avatar_shape === 'square' ? 'square-profile-drawer' : 'circle-profile-drawer'} src={Blog.avatar} alt="profile pic" />
        </Link>
      </div>
      <div className="text-drawer">
        <h1 className="title-drawer">
          {' '}
          {Blog.title}
          {' '}
        </h1>
        <p className="description-drawer">
          {Blog.description}
        </p>
      </div>
      <div className="posts-drawer">
        {Posts
          && Posts.map((post) => (
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
  ) : (
    <>
      <ReactLoading type="bars" color="#fff" width={157} className="loading-block" />
    </>
  );
}
Header.propTypes = {
  CloseClicked: PropTypes.func.isRequired,
  OpenChatClicked: PropTypes.func.isRequired,
  BlogId: PropTypes.func.isRequired,
  /**
* if user click the close button it will be call function HandelClose
*/
};
export default Header;
