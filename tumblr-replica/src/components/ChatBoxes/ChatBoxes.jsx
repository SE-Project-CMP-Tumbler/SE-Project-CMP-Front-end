import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@mui/material';
import { Box } from '@material-ui/core';
import ChatComponent from '../ChatComponent/ChatComponent';
import { removeAvaterID } from '../../slices/ChatModule/ChatModule';

function ChatBoxes() {
  const chatBoxes = useSelector((state) => state.Chat.chatbox);
  const avatars = useSelector((state) => state.Chat.avatars);
  const dispatch = useDispatch();

  const avatarOnClickHandle = (avatar) => {
    dispatch(removeAvaterID(avatar));
  };
  return (
    <Box style={{
      position: 'relative',
    }}
    >
      <Box style={{
        position: 'fixed',
        bottom: '0',
        right: '50px',
      }}
      >
        {chatBoxes
          && chatBoxes.map((chatbox) => (
            <ChatComponent id={chatbox.id} key={chatbox.id} />
          ))}
      </Box>
      <Grid
        container
        direction="column"
        style={{
          position: 'fixed',
          bottom: '0',
          right: '0',
        }}
      >
        {avatars
          && avatars.map((avatar) => (
            <Grid item key={avatar.id}>
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
                <Avatar src={avatar.img} />
              </button>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
export default ChatBoxes;
