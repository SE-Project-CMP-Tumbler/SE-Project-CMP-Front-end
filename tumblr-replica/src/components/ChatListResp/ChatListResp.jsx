/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import {
  Divider,
  Typography,
  ListItemAvatar,
} from '@material-ui/core';
import { Box } from '@mui/system';
import { ListItemButton, Avatar } from '@mui/material';
import ChatTopBarResp from './subcomponents/ChatListTopBarResp';
import { fetchChats } from '../../slices/ChatModule/ChatModule';
import './css/ChatListResp.css';

function ChatListResp() {
  const chats = useSelector((state) => state.Chat.chats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChats());
  }, []);
  return (
    <div>
      <ChatTopBarResp />
      <List
        sx={{
          bgcolor: 'background.paper',
          padding: '0',
          width: '100%',
        }}
      >
        {chats.map((chat) => (
          <div key={chat.id}>
            <ListItemButton style={{ height: '70px' }}>
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
    </div>
  );
}
export default ChatListResp;
