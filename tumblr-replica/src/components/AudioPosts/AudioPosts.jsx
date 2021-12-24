import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/Navtabs';
import FollowingList from '../FollowingList/FollowingList';
import PostsList from '../PostsList/PostsList';
import { getAudioposts, fetchAsyncaudioposts } from '../../states/features/audioposts/audiopostsSlice';

/**
 * Component for render all Audio Posts
 *
 * @component
 * @name
 * AudioPosts
 * @example
 * return (
 *   <AudioPosts />
 * )
 */
function AudioPosts() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncaudioposts());
  }, []);
  const Posts = useSelector(getAudioposts);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={3} selsected="Audio" />
          <PostsList Posts={Posts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default AudioPosts;
