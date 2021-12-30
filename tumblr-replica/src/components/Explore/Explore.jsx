import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/Navtabs';
import FollowingList from '../FollowingList/FollowingList';
import CarouselCards from '../CarouselCards/CarouselCards';
import PostsList from '../PostsList/PostsList';
import CheckOut from './CheckOut';
import { getRandomposts, fetchAsyncrandomposts, fetchAsyncnextposts } from '../../states/features/randomposts/randompostsSlice';

/**
 * Component for render all elements in /explore/recommended-for-you
 * now it has {@link CarouselCards} and {@link FollowingList}.
 *
 * @component
 * @name
 * Explore
 * @example
 * return (
 *   <Explore />
 * )
 */
function Explore() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncrandomposts());
  }, []);
  const RandomPosts = useSelector(getRandomposts);
  const FetchnextPage = () => {
    dispatch(fetchAsyncnextposts(RandomPosts.response.pagination.current_page + 1));
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={0} selsected="More" />
          <CarouselCards />
          <PostsList Posts={RandomPosts} FetchnextPage={FetchnextPage} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
          <CheckOut />
        </Grid>
      </Grid>
    </div>
  );
}

export default Explore;
