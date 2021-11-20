import React from 'react';
import Grid from '@mui/material/Grid';
import NavTabs from '../NavTabs/NavTabs';
import FollowingList from '../FollowingList/FollowingList';
import CarouselTrend from '../CarouselTrend/CarouselTrend';
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
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={1} selsected="More" />
          <CarouselTrend />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Trending;
