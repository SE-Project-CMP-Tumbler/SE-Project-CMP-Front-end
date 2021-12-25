/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import {
  Divider,
  Typography,
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
  TextField,
} from '@material-ui/core';
import { Box } from '@mui/system';
import axios from 'axios';

import { ListItemButton } from '@mui/material';
import {
  setChatBoxesID,
  newMessagePress,
} from '../../slices/chatmodule/chatmoduleSlice';
import { getAllChats, recentlyFollowed } from '../../slices/chatmodule/chatmoduleAPI';

function ChatList({ chats }) {
  return (
    {chats.map((chat) => (
        <div key={chat.id}>
          <ListItemButton
            onClick={(event) => pushtoChatBoxHandle(event, chat.id)}
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
      ))}
  );
}
export default ChatList;