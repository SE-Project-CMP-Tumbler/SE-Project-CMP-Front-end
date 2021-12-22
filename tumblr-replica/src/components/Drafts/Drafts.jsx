import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import SideTabs from '../SideTabs/SideTabs';
import PostsList from '../PostsList/PostsList';
import { getDraftposts, fetchAsyncdraftposts } from '../../states/features/draftposts/draftpostsSlice';

/**
 * Component for show the Drafts for the blog and {@link sideTabs}
 *
 * @component
 * @name
 * Drafts
 * @example
 * return (
 *   <Drafts />
 * )
 */
function Drafts() {
  const blogId = 14;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncdraftposts(blogId));
  }, []);
  const Posts = useSelector(getDraftposts);
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
          <PostsList Posts={Posts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <SideTabs select={4} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Drafts;
