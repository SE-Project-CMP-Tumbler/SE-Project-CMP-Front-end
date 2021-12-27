import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@mui/material';
import { Box } from '@material-ui/core';
import ChatComponent from '../ChatComponent/ChatComponent';
import { removeAvaterID } from '../../slices/chatmodule/chatmoduleSlice';

/**
 * This function is for the Chat Boxes component this component to
 * disply the grid of the chats open or the avatars for open put non active chats
 * @method
 * @returns {*} chatbox componenet
 */
function ChatBoxes() {
  const chatBoxes = useSelector((state) => state.Chat.chatbox);
  const avatars = useSelector((state) => state.Chat.avatars);
  const dispatch = useDispatch();

  const avatarOnClickHandle = (avatar) => {
    dispatch(removeAvaterID(avatar));
  };
  console.log(chatBoxes);
  return (
    <Box style={{
      position: 'relative',
    }}
    >
      <Box style={{
        position: 'fixed',
        bottom: '0',
        right: '50px',
        paddingBottom: '25px',
      }}
      >
        {
          chatBoxes
          && chatBoxes.map((chatbox) => (
            <ChatComponent
              chatRoomId={chatbox.res.response.chat_room_id}
              key={chatbox.res.response.chat_room_id}
              elem={chatbox.elem}
            />
          ))
        }
      </Box>
      <Grid
        container
        direction="column"
        style={{
          position: 'fixed',
          bottom: '0',
          right: '0',
          width: '50px',
        }}
      >
        {avatars
          && avatars.map((avatar) => (
            <Grid item key={avatar.chatRoomId}>
              <button
                type="button"
                onClick={() => {
                  avatarOnClickHandle(avatar);
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <Avatar src={avatar.elem.friend_avatar} />
              </button>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
export default ChatBoxes;
