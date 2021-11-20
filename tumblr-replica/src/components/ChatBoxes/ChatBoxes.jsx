import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@mui/material';
import ChatComponent from '../ChatComponent/ChatComponent';
import { removeAvaterID } from '../../states/reducers/ChatReducer';
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
                  dispatch(removeAvaterID(avatar.id));
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
