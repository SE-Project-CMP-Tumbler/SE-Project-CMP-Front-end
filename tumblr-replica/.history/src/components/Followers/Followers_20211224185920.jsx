import React from 'react';
import MediaQuery from 'react-responsive';
import FollowersPage from '../FollowersPage/FollowersPage';
import './css/Followers.css';

function Followers() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <FollowersPage />
      <MediaQuery minWidth={1070}>
        <div className="check-these-blogs">
           <SideTabs select={2} />
        </div>
      </MediaQuery>
    </div>
  );
}

export default Followers;
