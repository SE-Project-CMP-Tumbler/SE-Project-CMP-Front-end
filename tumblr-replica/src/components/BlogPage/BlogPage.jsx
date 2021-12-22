import React from 'react';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import SideTabs from '../SideTabs/SideTabs';
import PostsList from '../PostsList/PostsList';
import { getBlogposts, fetchAsyncblogposts } from '../../states/features/blogposts/blogpostsSlice';
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
  const blogId = 14;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncblogposts(blogId));
  }, []);
  const Posts = useSelector(getBlogposts);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>

          <PostsList Posts={Posts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <SideTabs select={1} />
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogPage;
