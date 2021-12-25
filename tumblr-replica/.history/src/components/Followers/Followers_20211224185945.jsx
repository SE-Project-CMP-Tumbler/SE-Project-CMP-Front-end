import React from 'react';
import MediaQuery from 'react-responsive';
import FollowersPage from '../FollowersPage/FollowersPage';
import './css/Followers.css';
import SideTap

function Followers() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <FollowersPage />
      <MediaQuery minWidth={1070}>
        <SideTabs select={2} />
      </MediaQuery>
    </div>
  );
}

export default Followers;
