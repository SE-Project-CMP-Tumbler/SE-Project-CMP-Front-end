import React from 'react';
import NavTabs from '../navtabs/Navtabs';
import FollowingList from '../followinglist/FollowingList';

function Trending() {
  return (
    <div>
      <NavTabs tapnum={1} selsected="More" />
      <h1>Trending</h1>
      <FollowingList />
    </div>
  );
}

export default Trending;
