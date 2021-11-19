import React from 'react';
import NavTabs from '../Navtabs/Navtabs';
import FollowingList from '../FollowingList/FollowingList';

function Explore() {
  return (
    <div>
      <NavTabs tapnum={0} selsected="More" />
      <h1>Explore</h1>
      <FollowingList />
    </div>
  );
}

export default Explore;
