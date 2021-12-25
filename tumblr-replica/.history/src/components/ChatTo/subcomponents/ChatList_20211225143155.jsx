/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Box } from '@mui/system';
import { ListItemButton } from '@mui/material';
import {
  getChatRoomId,
} from '../../../slices/chatmodule/chatmoduleAPI';
import {
  removeAvaterID,
} from '../../../slices/chatmodule/chatmoduleSlice';
import { selectUser } from '../../../states/User/UserSlice';
import '../../ChatListResp/css/ChatListResp.css';
/**
 * This function is for the ChatList component this component is used
 * to disply the friends of the user that h
 * @method
 * @returns {*} ChatList componenet
 */
function ChatList({ chats }) {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  const newMessagePress1 = useSelector((state) => state.Chat.newmessagepress);
  const chatBox = useSelector((state) => state.Chat.chatbox);
  const avatars = useSelector((state) => state.Chat.avatars);
  console.log(`heloo from chatlist ${chats}`);
  return (
    chats.map((chat) => (
      <div key={chat.friend_id}>
        <ListItemButton
          sx={{ bgcolor: 'background.paper' }}
          onClick={() => {
            const newavatars = avatars.filter((el) => chat.friend_id === el.elem.friend_id);
            console.log(avatars);
            if (newavatars.length) {
              dispatch(removeAvaterID(newavatars[0]));
            } else
            if ((chatBox.length
                      && chatBox[0].elem.friend_id !== chat.friend_id) || chatBox.length === 0) {
              dispatch(getChatRoomId({
                blogsID: {
                  from_blog_id: User.id,
                  to_blog_id: chat.friend_id,
                },
                User,
                elem: chat,
              }));
            }
          }}
        >
          <ListItemAvatar>
            <Avatar src={chat.friend_avatar} style={{ margin: '5px' }} />
          </ListItemAvatar>
          {
            newMessagePress1 ? (
              <Box>
                <p className="chat-par-name">
                  {chat.friend_username}
                </p>
                <p className="lastmessage">
                  {`${chat.friend_title}`}
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
      </div>
    ))
  );
}
export default ChatList;
