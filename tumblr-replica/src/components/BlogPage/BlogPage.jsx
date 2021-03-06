import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import SideTabs from '../SideTabs/SideTabs';
import PostsList from '../PostsList/PostsList';
import { getBlogposts, fetchAsyncblogposts, fetchAsyncnextposts } from '../../states/features/blogposts/blogpostsSlice';
import { getBlogId, fetchBlogs, setcurrentblog } from '../../states/features/userblogs/userblogsSlice';
import { tolarge } from '../../states/features/postview/postviewSlice';
import Menue from '../Menue/Menue';
// import CreatePost from './CreatPost';

/**
 * Component for show the Posts for the blog and {@link sideTabs}
 *
 * @component
 * @name
 * BlogPage
 * @example
 * return (
 *   <BlogPage />
 * )
 */
function BlogPage() {
  // const blogId = 14;
  const dispatch = useDispatch();
  const blogname = window.location.href.split('/').pop();
  const Posts = useSelector(getBlogposts);
  const BlogId = useSelector(getBlogId);
  console.log(BlogId, 'BBLOgIDDDDDDDDDDDDDDDDDDDDD');
  React.useEffect(() => {
    dispatch(setcurrentblog(blogname));
    dispatch(fetchBlogs());
    dispatch(fetchAsyncblogposts(BlogId));
    dispatch(tolarge());
  }, []);

  React.useEffect(() => {
    dispatch(fetchAsyncblogposts(BlogId));
  }, [BlogId]);

  const FetchnextPage = () => {
    const next = Posts.response.pagination.current_page + 1;
    dispatch(fetchAsyncnextposts({ next, BlogId }));
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%', marginTop: 7 }}>
          <Menue />

          { Posts.response.posts && Posts.response.posts.length === 0
            ? (
              <Box sx={{
                margin: '30%', marginTop: 10, color: 'white', fontSize: 18,
              }}
              >
                <img alt="empty" src="https://img.icons8.com/ios/170/ffffff/empty-set.png" />
                <div>No Posts available</div>
              </Box>
            ) : (
              Posts.meta.status === '200' && <PostsList Posts={Posts} FetchnextPage={FetchnextPage} />
            )}
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <SideTabs select={1} />
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogPage;
