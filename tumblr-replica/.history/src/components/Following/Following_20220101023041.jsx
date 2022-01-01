import React from 'react';
import MediaQuery from 'react-responsive';
import FollowingPage from '../FollowingPage/FollowingPage';
import './css/Following.css';

/**
 * component for  render  the Responsive part of the Followerspage and not responsive one
 * @component
 * @name
 * Following
 * @example
 * return (
 *   <Following />
 * )
 */

function Following() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <FollowingPage />
      <MediaQuery minWidth={1070}>
        <div className="check-these-blogs">
          Checkout these Blogs
        </div>
      </MediaQuery>
    </div>
  );
}

export default Following;
