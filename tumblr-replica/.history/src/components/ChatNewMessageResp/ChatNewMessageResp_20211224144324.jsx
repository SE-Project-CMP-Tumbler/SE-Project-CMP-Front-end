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
import ChatNewMessageTopBar from '../ChatListResp/subcomponents/ChatNewMessageTopBar';
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
    <Box>
      <ChatNewMessageTopBar />
      <List
        sx={{
          bgcolor: 'background.paper',
          padding: '0',
          width: '100%',
        }}
      >
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
        <div style={{ display: 'flex', padding: '20px 5px 0 5px' }}>
          <div className="to-palceholder">
            To:
          </div>
          <input
            type="text"
            className="to-input"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          />
        </div>
        <p className="r-followed">
          Recently Followed
        </p>
        {chats.map((chat) => (
          <div key={chat.blog_id} style={{ hight: '70px' }}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={chat.blog_avatar} />
              </ListItemAvatar>
              <Box>
                <p className="chat-par-name">
                  {chat.blog_username}
                </p>
                <p className="lastmessage">
                  {chat.blog_title}
                </p>
              </Box>
            </ListItemButton>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );
}
export default ChatNewMessageResp;
