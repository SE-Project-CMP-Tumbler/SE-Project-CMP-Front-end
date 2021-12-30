import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/Navtabs';
import FollowingList from '../FollowingList/FollowingList';
import PostsList from '../PostsList/PostsList';
import { getQuoteposts, fetchAsyncquoteposts, fetchAsyncnextposts } from '../../states/features/quoteposts/quotepostsSlice';

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
  const FetchnextPage = () => {
    dispatch(fetchAsyncnextposts(Posts.response.pagination.current_page + 1));
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={3} selsected="Quotes" />
          <PostsList Posts={Posts} FetchnextPage={FetchnextPage} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default QuotePosts;
