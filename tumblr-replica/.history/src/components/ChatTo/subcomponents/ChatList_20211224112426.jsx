/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Box } from '@mui/system';
import { ListItemButton } from '@mui/material';
import {
  setChatBoxesID,
} from '../../../slices/chatmodule/chatmoduleSlice';
import {
  getChatRoomId,
} from '../../../slices/chatmodule/chatmoduleAPI';
import { selectUser } from '../../../states/User/UserSlice';

function ChatList({ chats }) {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  const chatRoomId = useSelector((state) => state.Chat.chatroomid);
  return (
    chats.map((chat) => (
      <div key={chat.blog_id}>
        <ListItemButton
          onClick={() => {
            dispatch(getChatRoomId({
              blogsID: {
                from_blog_id: User.blog_id,
                to_blog_id: chat.blog_id,
              },
              User,
            }));
            dispatch(setChatBoxesID({
              chatRoomId,
              chat,
            }));
          }}
        >
          <ListItemAvatar>
            <Avatar src={chat.img} />
          </ListItemAvatar>
          <Box>
            <Typography variant="body2" align="left" sx={{ height: '22px' }}>
              {chat.blog_username}
            </Typography>
            {chat.text ? <Typography variant="body2" align="left" sx={{ height: '22px' }}>
              {User.blogName !== chat.blog_username ? chat.text: `${User.blogName}:${chat.text}` }
            </Typography>:null}
            {chat.photo ? <Typography variant="body2" align="left" sx={{ height: '22px' }}>
              {User.blogName !== chat.blog_username ? "sent ": `${chat.blog_username}:${chat.text}` }
            </Typography>:null}
        {chat.photo}
        chat.gif
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
