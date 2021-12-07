import * as React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import PostCard from '../NewsFeed/subcomponents/PostCard/PostCard';

function PostsList({ Posts }) {
  return (
    <div>
      <Grid container direction="row">
        <Grid
          item
          xs={12}
          container
          spacing={8}
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          sx={{ pt: 10 }}
        >
          {Posts.meta.status === '200'
            ? (
              Posts.response.posts.map((post) => (
                <div>
                  <Grid
                    item
                    xs
                    container
                    direction="row"
                    key={post.post_id}
                    spacing={2}
                    justifyContent="center"
                    alignItems="start"
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
                </div>
              ))

            ) : (<h3>{ Posts.meta.msg }</h3>)}
        </Grid>
      </Grid>
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
