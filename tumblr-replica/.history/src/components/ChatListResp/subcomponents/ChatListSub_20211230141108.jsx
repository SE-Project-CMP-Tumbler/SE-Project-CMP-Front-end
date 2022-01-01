/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Box } from '@mui/system';
import {Link} from 'react-router-dom';
import { Divider, ListItemButton, Link } from '@mui/material';
import { selectUser } from '../../../states/User/UserSlice';
import '../css/ChatListResp.css';
/**
 * This function is for the ChatList component this component is used
 * to disply the friends that the user can chat with or search for them for chatting
 * @method
 * @param {array} chats  chats is an array for the chat participants's info
 * @returns {*} ChatList componenet
 */
function ChatListSub({ chats }) {
  const User = useSelector(selectUser);
  const newMessagePress1 = useSelector((state) => state.Chat.newmessagepress);
  console.log(`heloo from chatlist ${chats}`);
  return (
    chats.map((chat) => (
      <div key={chat.friend_id}>
        <Link target="_blank" to={`/messaging/conversation/${User.BlogName}/${chat.friend_username}`} className="link">
          <ListItemButton
            className="list-item"
            sx={{ bgcolor: 'background.paper' }}
          >
            <ListItemAvatar>
              <Avatar src={newMessagePress1 ? chat.blog_avatar : chat.friend_avatar} style={{ margin: '5px' }} />
            </ListItemAvatar>
            {
            newMessagePress1 ? (
              <Box>
                <p className="chat-par-name">
                  {chat.blog_username}
                </p>
                <p className="lastmessage">
                  {`${chat.blog_title}`}
                </p>
              </Box>
            ) : (
              <Box>
                <p className="chat-par-name">
                  {chat.friend_username}
                </p>
                {chat.text ? (
                  <p className="lastmessage">
                    {`${chat.blog_username}:${chat.text}`}
                  </p>
                ) : null}
                {chat.photo ? (
                  <p className="lastmessage">
                    {`${chat.blog_username}:sent a post`}
                  </p>
                ) : null}
                {chat.gif ? (
                  <p className="lastmessage">
                    {`${chat.blog_username}:sent a post`}
                  </p>
                ) : null}
              </Box>
            )
          }
          </ListItemButton>
        </Link>
        <Divider />
      </div>
    ))
  );
}
export default ChatListSub;
