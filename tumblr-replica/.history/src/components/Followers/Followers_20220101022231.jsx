import React from 'react';
import MediaQuery from 'react-responsive';
import FollowersPage from '../FollowersPage/FollowersPage';
import './css/Followers.css';
import SideTabs from '../SideTabs/SideTabs';
import '../SideTabs/SideTabs.css';

/**
 * component for  render  chat to list this list for starting a new message with anyone
 * @component
 * @returns {*} ChatTo componenet
 */

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
