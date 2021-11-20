import React from 'react';
import NavTabs from '../NavTabs/Navtabs';
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
      <NavTabs tapnum={0} selsected="More" />
      <h1>Explore</h1>
      <CarouselCards />
      <FollowingList />
    </div>
  );
}

export default Explore;
