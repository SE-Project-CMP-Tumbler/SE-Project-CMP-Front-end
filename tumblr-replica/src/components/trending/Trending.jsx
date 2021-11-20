import React from 'react';
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
      <NavTabs tapnum={1} selsected="More" />
      <h1>Trending</h1>
      <CarouselTrend />
      <FollowingList />
    </div>
  );
}

export default Trending;
