import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@mui/material';
import ChatComponent from './ChatComponent';
import { removeAvaterID } from '../states/reducers/ChatReducer';

function ChatBoxes() {
  const chatBoxes = useSelector((state) => state.Chat.chatbox);
  const avatars = useSelector((state) => state.Chat.avatars);
  const dispatch = useDispatch();

  const avatarOnClickHandle = (id) => {
    dispatch(removeAvaterID(id));
  };
  return (
    <Grid
      container
      style={{
        bottom: 0,
        position: 'fixed',
        justifyContent: 'flex-end',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        direction="column"
        spacing={2}
        style={{
          bottom: 0,
          position: 'fixed',
        }}
      >
        {avatars
          && avatars.map((avatar) => (
            <Grid item key={avatar.id}>
              <button
                type="button"
                onClick={() => {
                  avatarOnClickHandle(avatar.id);
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <Avatar src={avatar.friendImgS} />
              </button>
            </Grid>
          ))}
      </Grid>
      <Grid
        container
        direction="row"
        spacing={2}
        style={{
          bottom: 0,
          position: 'fixed',
          justifyContent: 'flex-end',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {chatBoxes
          && chatBoxes.map((chatbox) => (
            <Grid item key={chatbox}>
              <ChatComponent id={chatbox} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
export default ChatBoxes;
