import * as React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ReactLoading from 'react-loading';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import PostCard from '../NewsFeed/subcomponents/PostCard/PostCard';
import { getpostview } from '../../states/features/postview/postviewSlice';

function PostsList({ Posts }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const postslen = Posts.response.posts;
  const small = useSelector(getpostview);
  return (
    <div>
      <Grid container direction="row">
        <Grid
          item
          xs={12}
          container
          spacing={7}
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          sx={{ pt: 10 }}
        >
          {Posts.meta.status === '200'
            ? (
              (!small || !isDesktopOrLaptop) && Posts.response.posts.map((post) => (
                <>
                  <Grid
                    item
                    xs
                    container
                    direction="row"
                    key={post.post_id}
                    spacing={1}
                    justifyContent="center"
                    alignItems="start"
                    style={{ paddingTop: '20px' }}
                  >
                    {
                      isDesktopOrLaptop
                      && (
                        <Tooltip
                          placement="right"
                          title={(
                            <PostCard
                              postId={post.post_id}
                              postDate={post.post_date}
                              blogId={post.blog_id}
                              blogUsername={post.blog_username}
                              postBody={post.post_body}
                              xs={10}
                            />
                          )}
                        >
                          <Grid item>
                            <Avatar
                              sx={{ bgcolor: 'orange' }}
                              variant="square"
                              xs={2}
                              style={{
                                maxWidth: 64,
                                minWidth: 64,
                                maxHeight: 64,
                                minHeight: 64,
                              }}
                            />
                          </Grid>
                        </Tooltip>
                      )
                    }
                    <Grid item>
                      <PostCard
                        postId={post.post_id}
                        postDate={post.post_date}
                        blogId={post.blog_id}
                        blogUsername={post.blog_username}
                        postBody={post.post_body}
                        xs={10}
                      />
                    </Grid>
                  </Grid>
                </>
              ))
            ) : (Posts.meta.msg === 'Loading' && <Box style={{ marginRight: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>
            )}
        </Grid>
      </Grid>
      {(small && isDesktopOrLaptop) && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {Posts.response.posts.slice(0, postslen.length / 2).map((post) => (
              <Box sx={{ mt: 3 }}>
                <PostCard
                  postId={post.post_id}
                  postDate={post.post_date}
                  blogId={post.blog_id}
                  blogUsername={post.blog_username}
                  postBody={post.post_body}
                  small={small}
                  xs={10}
                />
              </Box>
            ))}
          </Grid>
          <Grid item xs={6}>
            {Posts.response.posts.slice(postslen.length / 2, postslen.length).map((post) => (
              <Box sx={{ mt: 3 }}>
                <PostCard
                  postId={post.post_id}
                  postDate={post.post_date}
                  blogId={post.blog_id}
                  blogUsername={post.blog_username}
                  postBody={post.post_body}
                  small={small}
                  xs={10}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      )}
    </div>
  );
}
PostsList.propTypes = {
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
export default PostsList;
