import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/NavTabs';
import FollowingList from '../FollowingList/FollowingList';
import PostsList from '../PostsList/PostsList';
import { getTextposts, fetchAsynctextposts } from '../../states/features/textposts/textpostsSlice';

/**
 * Component for render all Text Posts
 *
 *
 * @component
 * @name
 * TextPosts
 * @example
 * return (
 *   <TextPosts />
 * )
 */
function TextPosts() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsynctextposts());
  }, []);
  const Posts = useSelector(getTextposts);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={3} selsected="Text" />
          <PostsList Posts={Posts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default TextPosts;
