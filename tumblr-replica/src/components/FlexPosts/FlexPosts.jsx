import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ReactLoading from 'react-loading';
import Alert from '@mui/material/Alert';
import PostCard from '../NewsFeed/subcomponents/PostCard/PostCard';
import './PostList.css';

/**
 * That render Posts in number of columes acording to screen width
 *
 * @component
 * @name
 * FlexPosts
 * @param {object} Posts
 * has meta and Posts List
 * @example
 * const Posts={
 *  "meta": {
      "status": "200",
      "msg": "OK"
    },
    "response": {
      "pagination": {
        "total": 17,
        "count": 7,
        "per_page": 10,
        "current_page": 1,
        "total_pages": 2,
        "first_page_url": false,
        "next_page_url": null,
        "prev_page_url": "http://127.0.0.1:8000/api/posts/{blog_id}?page=1"
      },
      "posts": [
        {
          "post_id": 5,
          "post_body": "<div><p>Nada</p><p>Hello Basel</p><p>Basel</p><p>Hey sara</p></div>",
          "blog_id": 5,
          "post_status": "published",
          "post_type": "chat",
          "blog_username": "",
          "blog_avatar": "",
          "blog_avatar_shape": "",
          "blog_title": "",
          "post_time": "02-02-2012"
        }
      ]
    }
 * }
 * return (
 *   <FlexPosts Posts={Posts} />
 * )
 */

function FlexPosts({ Posts }) {
  const postslen = Posts.response.posts;
  return (
    <div>
      { Posts.meta.status === '200' ? (
        <div className="row_B">
          <div className="column_B">
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
          <div className="column_B">
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
          <div className="column_B">
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
          <div className="column_B">
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
      || (Posts.meta.msg === 'Loading' && <Box style={{ marginRight: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>)
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
