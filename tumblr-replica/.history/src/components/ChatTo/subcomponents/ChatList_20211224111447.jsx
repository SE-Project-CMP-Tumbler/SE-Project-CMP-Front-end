/* eslint-disable operator-linebreak */
import React from 'react';
import 
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
  const User = useSelector(selectUser);
  return (
    chats.map((chat) => (
      <div key={chat.blog_id}>
        <ListItemButton
          onClick={() => {
            dispatch(getChatRoomId({
              blogsID: {
                from_blog_id: User.blog_id,
                to_blog_id: elem.blog_id,
              },
              User,
            }));
            dispatch(setChatBoxesID({
              chatRoomId,
              elem,
            }));
          }}
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
      </div>
    ))
  );
}
export default ChatList;
