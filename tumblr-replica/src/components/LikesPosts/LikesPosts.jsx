import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ReactLoading from 'react-loading';
import Alert from '@mui/material/Alert';
import PostCard from '../NewsFeed/subcomponents/PostCard/PostCard';
import './LikesPosts.css';

function FlexPosts({ Posts }) {
  const postslen = Posts.response.posts;
  return (
    <div>
      {Posts.meta.status === '200' ? (
        <div className="row_L">
          <div className="column_L">
            {Posts.response.posts.slice(0, postslen.length / 4).map((post) => (
              <Box sx={{
                mt: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              >
                <PostCard
                  postId={post.post_id}
                  postDate={post.post_date}
                  blogId={post.blog_id}
                  blogUsername={post.blog_username}
                  postBody={post.post_body}
                  small
                  xs={10}
                />
              </Box>
            ))}
          </div>
          <div className="column_L">
            {Posts.response.posts.slice(postslen.length / 4, postslen.length / 2).map((post) => (
              <Box sx={{
                mt: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              >
                <PostCard
                  postId={post.post_id}
                  postDate={post.post_date}
                  blogId={post.blog_id}
                  blogUsername={post.blog_username}
                  postBody={post.post_body}
                  small
                  xs={10}
                />
              </Box>
            ))}
          </div>
          <div className="column_L">
            {Posts.response.posts.slice(postslen.length / 2, postslen.length * 0.75)
              .map((post) => (
                <Box sx={{
                  mt: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                >
                  <PostCard
                    postId={post.post_id}
                    postDate={post.post_date}
                    blogId={post.blog_id}
                    blogUsername={post.blog_username}
                    postBody={post.post_body}
                    small
                    xs={10}
                  />
                </Box>
              ))}
          </div>
          <div className="column_L">
            {Posts.response.posts.slice(postslen.length * 0.75, postslen.length).map((post) => (
              <Box sx={{
                mt: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              >
                <PostCard
                  postId={post.post_id}
                  postDate={post.post_date}
                  blogId={post.blog_id}
                  blogUsername={post.blog_username}
                  postBody={post.post_body}
                  small
                  xs={10}
                />
              </Box>
            ))}
          </div>
        </div>
      ) : ((Posts.error && (
        <Alert style={{ marginTop: '15%' }} severity="error">
          Component could not be loaded.
          This could be due to trouble fetching data from the backend server.
          Try switching to the mock server to see if the error persists.
        </Alert>
      ))
        || (Posts.meta.msg === 'Loading' && <div className="loading-L"><ReactLoading type="bars" color="#fff" width={157} /></div>)
      )}
    </div>
  );
}
FlexPosts.propTypes = {
  Posts: PropTypes.shape({
    meta: PropTypes.shape({
      status: PropTypes.string.isRequired, msg: PropTypes.string.isRequired,
    }).isRequired,
    response: PropTypes.shape({
      posts: PropTypes.arrayOf(PropTypes.shape({
        post_id: PropTypes.number.isRequired,
        post_body: PropTypes.string.isRequired,
        post_status: PropTypes.string.isRequired,
        blog_id: PropTypes.number.isRequired,
        blog_username: PropTypes.string.isRequired,
        post_type: PropTypes.string.isRequired,
        blog_avatar: PropTypes.string.isRequired,
        blog_avatar_shape: PropTypes.string.isRequired,
        blog_title: PropTypes.string.isRequired,
        post_time: PropTypes.string.isRequired,
      })).isRequired,
    }),
  }).isRequired,
};
export default FlexPosts;
