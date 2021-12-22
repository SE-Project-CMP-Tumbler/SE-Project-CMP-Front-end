import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NavTabs from '../NavTabs/Navtabs';
import FollowingList from '../FollowingList/FollowingList';
import CarouselCards from '../CarouselCards/CarouselCards';
import PostsList from '../PostsList/PostsList';
import { getRandomposts, fetchAsyncrandomposts } from '../../states/features/randomposts/randompostsSlice';

/**
 * Component for render all elements in /explore/recommended-for-you
 * now it has {@link CarouselCards} and {@link FollowingList}.
 *
 * @component
 * @name
 * StaffPicks
 * @example
 * return (
 *   <StaffPicks />
 * )
 */
function StaffPicks() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncrandomposts());
  }, []);
  const RandomPosts = useSelector(getRandomposts);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={2} selsected="More" />
          <CarouselCards />
          <PostsList Posts={RandomPosts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default StaffPicks;
