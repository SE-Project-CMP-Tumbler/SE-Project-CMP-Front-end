/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import {
  Divider,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Box } from '@mui/system';
import { ListItemButton } from '@mui/material';
import {
  getAllChats,
} from '../../slices/ChatModule/chatmoduleAPI';
import ChatNewMessageTopBar from './subcomponents/ChatNewMessageTopBar';
import '../ChatListResp/css/ChatListResp.css';
import User from '../../LogedInUser/DemoUser';

function ChatNewMessageResp() {
  const chats = useSelector((state) => state.Chat.chats);
  const dispatch = useDispatch();
  const [to, setTo] = useState();
  useEffect(() => {
    dispatch(getAllChats());
  }, []);
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
export default ChatNewMessageResp;
