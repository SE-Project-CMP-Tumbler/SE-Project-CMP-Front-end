/* eslint-disable operator-linebreak */
import React from 'react';
import {
  Divider,
  Typography,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Box } from '@mui/system';
import { ListItemButton } from '@mui/material';
import {
    newMessagePress, setChatBoxesID,
  } from '../../slices/chatmodule/chatmoduleSlice';
  import {
    getAllChats, getChatRoomId,
  } from '../../slices/chatmodule/chatmoduleAPI';
  import { selectUser } from '../../states/User/UserSlice';

function ChatList({ chats }) {
    const pushtoChatBoxHandle = (event, chatId) => {
        event.preventDefault();
        axios({
          method: 'GET',
          url: `${apiBaseUrl}/chatsforoneuser/${chatId}`,
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            dispatch(setChatBoxesID({ id: chatId, img: res.data.img }));
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
  return (
    chats.map((chat) => (
      <div key={chat.id}>
        <ListItemButton
          onClick={(event) => dispatch(setChatBoxesID({ id: chatId, img: res.data.img })); }
        >
          <ListItemAvatar>
            <Avatar src={chat.img} />
          </ListItemAvatar>
          <Box>
            <Typography variant="body2" align="left" sx={{ height: '22px' }}>
              {chat.to}
            </Typography>
            <Typography variant="body2" align="left" sx={{ height: '22px' }}>
              {chat.lastmessage}
            </Typography>
          </Box>
        </ListItemButton>
        <Divider />
      </div>
    ))
  );
}
export default ChatList;
