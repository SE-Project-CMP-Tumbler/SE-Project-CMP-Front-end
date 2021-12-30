import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/NavTabs';
import FollowingList from '../FollowingList/FollowingList';
import PostsList from '../PostsList/PostsList';
import { getImageposts, fetchAsyncimageposts } from '../../states/features/imageposts/imagepostsSlice';

/**
 * Component for render all Image Posts
 *
 * @component
 * @name
 * ImagePosts
 * @example
 * return (
 *   <ImagePosts />
 * )
 */
function ImagePosts() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncimageposts());
  }, []);
  const Posts = useSelector(getImageposts);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={3} selsected="Photos" />
          <PostsList Posts={Posts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default ImagePosts;
