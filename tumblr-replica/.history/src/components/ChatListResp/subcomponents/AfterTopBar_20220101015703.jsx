/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Divider,
} from '@material-ui/core';
import { selectUser } from '../../../states/User/UserSlice';
import '../css/ChatNewMessageTopBar.css';

/**
 * Component for render the responsive view of the Old chat List
 *
 * @component
 * @name
 * ChatListResp
 * @example
 * return (
 *   <ChatListResp />
 * )
 */
function AfterTopBar() {
  const User = useSelector(selectUser);
  return (
    <>
      <Divider style={{ backgroundColor: '#f5f5f5' }} />
      <div style={{ display: 'flex', backgroundColor: 'white' }}>
        <img
          alt="No"
          src={User.primaryBlogAvatar}
          style={{
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            margin: '10px',
          }}
        />
        <p className="user-name">
          {User.blogName}
        </p>
      </div>
      <Divider style={{ backgroundColor: '#f5f5f5' }} />
    </>
  );
}
export default AfterTopBar;
