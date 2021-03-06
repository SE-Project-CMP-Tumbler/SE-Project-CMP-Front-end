import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/NavTabs';
import FollowingList from '../FollowingList/FollowingList';
import PostsList from '../PostsList/PostsList';
import { getQuoteposts, fetchAsyncquoteposts } from '../../states/features/quoteposts/quotepostsSlice';

/**
 * Component for render all Quote Posts
 *
 * @component
 * @name
 * QuotePosts
 * @example
 * return (
 *   <QuotePosts />
 * )
 */
function QuotePosts() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncquoteposts());
  }, []);
  const Posts = useSelector(getQuoteposts);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={3} selsected="Quotes" />
          <PostsList Posts={Posts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default QuotePosts;
