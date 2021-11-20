import React from 'react';
import Grid from '@mui/material/Grid';
import NavTabs from '../NavTabs/NavTabs';
import FollowingList from '../FollowingList/FollowingList';
import CarouselCards from '../CarouselCards/CarouselCards';

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
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <NavTabs tapnum={0} selsected="More" />
          <CarouselCards />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <FollowingList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Explore;
