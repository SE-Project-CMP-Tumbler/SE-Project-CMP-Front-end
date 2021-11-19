import React from 'react';
import NavTabs from '../Navtabs/Navtabs';
import FollowingList from '../FollowingList/FollowingList';
import CarouselTrend from '../CarouselTrend/CarouselTrend';

function Trending() {
  return (
    <div>
      <NavTabs tapnum={1} selsected="More" />
      <h1>Trending</h1>
      <CarouselTrend />
      <FollowingList />
    </div>
  );
}

export default Trending;
