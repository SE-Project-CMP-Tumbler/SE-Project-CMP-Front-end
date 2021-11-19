import React from 'react';
import NavTabs from '../Navtabs/Navtabs';
import FollowingList from '../FollowingList/FollowingList';
import CarouselCards from '../CarouselCards/CarouselCards';

function Explore() {
  return (
    <div>
      <NavTabs tapnum={0} selsected="More" />
      <h1>Explore</h1>
      <CarouselCards />
      <FollowingList />
    </div>
  );
}

export default Explore;
