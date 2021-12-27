/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import {
  Divider,
  ListItemAvatar,
} from '@material-ui/core';
// import { Box } from '@mui/system';
import { ListItemButton, Avatar } from '@mui/material';
import ChatListTopBarResp from './subcomponents/ChatListTopBarResp';
import { getAllChats } from '../../../../slices/chatmodule/chatmoduleAPI';
import './css/ChatListResp.css';

function ChatListResp() {
  const chats = useSelector((state) => state.Chat.chats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChats());
  }, []);
  return (
    <div>
      <ChatListTopBarResp />
      <List
        sx={{
          padding: '0',
          width: '100%',
        }}
      >
        {chats.map((chat) => (
          <div key={chat.blog_id}>
            <ListItemButton style={{ height: '90px' }}>
              <ListItemAvatar>
                <Avatar src={chat.blog_avatar} />
              </ListItemAvatar>
              <div className="name">
                <p className="chat-par-name">
                  {chat.blog_username}
                </p>
                <p className="last-chat-par-name">
                  {chat.from}
                  :
                </p>
                <p className="lastmessage">
                  {chat.last_message}
                </p>
              </div>
            </ListItemButton>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}
export default ChatListResp;
