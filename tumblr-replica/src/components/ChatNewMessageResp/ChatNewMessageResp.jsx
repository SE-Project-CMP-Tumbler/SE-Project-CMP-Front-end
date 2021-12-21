/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import {
  Divider,
  Typography,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Box } from '@mui/system';
import { ListItemButton } from '@mui/material';
import {
  fetchChats,
} from '../../slices/ChatModule/ChatModule';
import ChatNewMessageTopBar from './subcomponents/ChatNewMessageTopBar';
import '../ChatListResp/css/ChatListResp.css';
import User from '../../LogedInUser/DemoUser';

function ChatTo() {
  const chats = useSelector((state) => state.Chat.chats);
  const dispatch = useDispatch();
  const [to, setTo] = useState();
  useEffect(() => {
    dispatch(fetchChats());
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
          <div key={chat.id}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={chat.img} />
              </ListItemAvatar>
              <Box>
                <Typography className="chat-par-name">
                  {chat.to}
                </Typography>
                <Typography className="lastmessage">
                  {chat.lastmessage}
                </Typography>
              </Box>
            </ListItemButton>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );
}
export default ChatTo;
