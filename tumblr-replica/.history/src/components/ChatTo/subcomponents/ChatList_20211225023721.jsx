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
import '../../ChatListResp/css/ChatListResp.css';
function ChatList({ chats }) {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  const newMessagePress1 = useSelector((state) => state.Chat.newmessagepress);
  const chatRoomId = useSelector((state) => state.Chat.chatroomid);
  return (
    chats.map((chat) => (
      <div key={chat.friend_id}>
        <ListItemButton
          sx={{ bgcolor: 'background.paper' }}
          onClick={() => {
            dispatch(getChatRoomId({
              blogsID: {
                from_blog_id: User.id,
                to_blog_id: chat.friend_id,
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
            <Avatar src={chat.friend_avatar} />
          </ListItemAvatar>
          {
            newMessagePress1 ? (
              <Box>
                <Typography variant="body2" align="left" sx={{ height: '22px' }}>
                  {chat.friend_username}
                </Typography>
                <Typography variant="body2" align="left" sx={{ height: '22px' }}>
                  {`${chat.friend_title}:${chat.text}`}
                </Typography>
              </Box>
            ) : (
              <Box>
                <Typography variant="body2" align="left" sx={{ height: '22px' }}>
                  {chat.friend_username}
                </Typography>
                {chat.text ? (
                  <Typography variant="body2" align="left" sx={{ height: '22px' }}>
                    {`${chat.blog_username}:${chat.text}`}
                  </Typography>
                ) : null}
                {chat.photo ? (
                  <Typography variant="body2" align="left" sx={{ height: '22px' }}>
                    {`${chat.blog_username}:sent a post`}
                  </Typography>
                ) : null}
                {chat.gif ? (
                  <Typography variant="body2" align="left" sx={{ height: '22px' }}>
                    {`${chat.blog_username}:sent a post`}
                  </Typography>
                ) : null}
              </Box>
            )
          }
        </ListItemButton>
      </div>
    ))
  );
}
export default ChatList;
