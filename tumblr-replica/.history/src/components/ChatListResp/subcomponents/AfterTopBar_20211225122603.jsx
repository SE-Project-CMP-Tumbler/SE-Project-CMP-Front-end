/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Divider,
} from '@material-ui/core';
import { selectUser } from '../../../states/User/UserSlice';
import '../css/'

function AfterTopBar() {
  const User = useSelector(selectUser);
  return (
    <>
      <Divider />
      <div style={{ display: 'flex' }}>
        <img
          alt="Not found"
          src={User.img}
          style={{
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            margin: '10px',
          }}
        />
        <p className="user-name">
          {User.name}
        </p>
      </div>
      <Divider />
    </>
  );
}
export default AfterTopBar;
