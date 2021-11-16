import React from 'react';
import NavTabs from '../navtabs/Navtabs';

function Trending() {
  return (
    <div>
      <NavTabs tapnum={1} selsected="More" />
      <h1>Trending</h1>
    </div>
  );
}

export default Trending;
