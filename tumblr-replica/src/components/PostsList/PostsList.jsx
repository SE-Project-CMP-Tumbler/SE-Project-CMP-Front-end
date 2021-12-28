import * as React from 'react';
import Grid from '@mui/material/Grid';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ReactLoading from 'react-loading';
import Alert from '@mui/material/Alert';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import PostCard from '../NewsFeed/subcomponents/PostCard/PostCard';
import { getpostview } from '../../states/features/postview/postviewSlice';
import './PostList.css';
import ProfileHeader from '../ProfileTemp/ProfileTempHeader';

function PostsList({ Posts, FetchnextPage }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const postslen = Posts.meta.status === '200' ? Posts.response.posts.length : 0;
  const total = Posts.meta.status === '200' ? Posts.response.pagination.total : 0;
  const small = useSelector(getpostview);
  return (
    <div style={{ width: '100%', margin: '0px' }}>
      <InfiniteScroll
        dataLength={postslen}
        next={FetchnextPage}
        hasMore={postslen !== total}
        loader={<Box style={{ marginRight: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>}
        endMessage={(
          <div style={{ alignItems: 'center', paddingBottom: '10px' }}>
            {Posts.meta.status === '200' && (
            <Chip
              label="Yay ! You have seen it all"
              style={{
                color: '#fffff',
                backgroundColor: '#00b8ff',
                width: '350px',
                height: '40px',
              }}
            />
            )}
          </div>
      )}
      >
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
                            <ProfileHeader BlogId={post.blog_id} />
                        )}
                        >
                          <Grid item>
                            <Avatar
                              src={post.blog_avatar}
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
              ) : ((Posts.error && <Alert style={{ marginTop: '15%' }} severity="error">This is an error in loading that component</Alert>)
              || (Posts.meta.msg === 'Loading' && <Box style={{ marginRight: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>)
              )}
          </Grid>
        </Grid>
        { (Posts.meta.status === '200' && small && isDesktopOrLaptop) && (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {Posts.response.posts.slice(0, postslen / 2).map((post) => (
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
              {Posts.response.posts.slice(postslen / 2, postslen).map((post) => (
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
      </InfiniteScroll>
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
      pagination: PropTypes.shape({
        total: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        per_page: PropTypes.number.isRequired,
        current_page: PropTypes.number.isRequired,
        total_pages: PropTypes.number.isRequired,
        first_page_url: PropTypes.bool.isRequired,
        next_page_url: PropTypes.string.isRequired,
        prev_page_url: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
  FetchnextPage: PropTypes.func.isRequired,
};
export default PostsList;
