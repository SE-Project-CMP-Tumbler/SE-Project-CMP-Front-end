/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Divider,
} from '@material-ui/core';
import { selectUser } from '../../../states/User/UserSlice';
import '../css/ChatNewMessageTopBar.css';

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
          {User.user}
        </p>
      </div>
      <Divider style={{ backgroundColor: '#f5f5f5' }} />
    </>
  );
}
export default AfterTopBar;
