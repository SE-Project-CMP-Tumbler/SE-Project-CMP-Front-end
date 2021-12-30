import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/NavTabs';
import FollowingList from '../FollowingList/FollowingList';
import CarouselTrend from '../CarouselTrend/CarouselTrend';
import PostsList from '../PostsList/PostsList';
import { getTrendingposts, fetchAsynctrendingposts, fetchAsyncnextposts } from '../../states/features/trendingposts/trendingpostsSlice';
/**
 * Component for render all elements in /explore/trending
 * now it has {@link CarouselTrend} and {@link FollowingList}.
 *
 * @component
 * @name
 * Trending
 * @example
 * return (
 *   <Trending />
 * )
 */
function Trending() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsynctrendingposts());
  }, []);
  const TrendingPosts = useSelector(getTrendingposts);
  const FetchnextPage = () => {
    dispatch(fetchAsyncnextposts(TrendingPosts.response.pagination.current_page + 1));
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={1} selsected="More" />
          <CarouselTrend />
          <PostsList Posts={TrendingPosts} FetchnextPage={FetchnextPage} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Trending;
