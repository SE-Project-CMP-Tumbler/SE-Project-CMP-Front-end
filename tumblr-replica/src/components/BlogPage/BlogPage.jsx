import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import SideTabs from '../SideTabs/SideTabs';
import PostsList from '../PostsList/PostsList';
import { getBlogposts, fetchAsyncblogposts } from '../../states/features/blogposts/blogpostsSlice';

function BlogPage() {
  const blogId = 2026;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncblogposts(blogId));
  }, []);
  const RandomPosts = useSelector(getBlogposts);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <Box
            sx={{
              marginTop: 5,
              height: 90,
              backgroundColor: 'white',
              borderRadius: 1,
            }}
          />
          <PostsList Posts={RandomPosts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <SideTabs select={1} blogusername="raghadKhaled" title="raghad" />
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogPage;