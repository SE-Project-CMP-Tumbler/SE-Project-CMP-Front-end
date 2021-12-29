import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/NavTabs';
import FollowingList from '../FollowingList/FollowingList';
import PostsList from '../PostsList/PostsList';
import { getAskposts, fetchAsyncaskposts, fetchAsyncnextposts } from '../../states/features/askposts/askpostsSlice';

/**
 * Component for render all Ask Posts
 *
 * @component
 * @name
 * AskPosts
 * @example
 * return (
 *   <AskPosts />
 * )
 */
function AskPosts() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncaskposts());
  }, []);
  const Posts = useSelector(getAskposts);
  const FetchnextPage = () => {
    dispatch(fetchAsyncnextposts(Posts.response.pagination.current_page + 1));
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={3} selsected="Asks" />
          <PostsList Posts={Posts} FetchnextPage={FetchnextPage} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default AskPosts;
