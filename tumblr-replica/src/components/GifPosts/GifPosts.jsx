import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/NavTabs';
import FollowingList from '../FollowingList/FollowingList';
import PostsList from '../PostsList/PostsList';
import { getGifposts, fetchAsyncgifposts } from '../../states/features/gifposts/gifpostsSlice';

/**
 * Component for render all Page has gifs use {@link PostsList}
 *
 * @component
 * @name
 * GifPosts
 * @example
 * return (
 *   <GifPosts />
 * )
 */
function GifPosts() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncgifposts());
  }, []);
  const Posts = useSelector(getGifposts);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={3} selsected="GIFs" />
          <PostsList Posts={Posts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default GifPosts;
