import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import '../css/ChatNewMessageTopBar.css';
import { selectUser } from '../../../states/User/UserSlice';
import { newMessagePressRes } from '../../../slices/chatmodule/chatmoduleSlice';

function ChatNewMessageTopBar() {
  const dispatch = useDispatch();
  const User = useSelector(selectUser);
  return (
    <Box className="top-bar">
      <Box />
      <Box className="bar newmessage">
        New message
      </Box>
      <Box>
        <a href={`/messaging/new/${User.blogName}`} className="bar cancel" onClick={() => { dispatch(newMessagePressRes()); }}>
          Cancel
        </a>
      </Box>
    </Box>
  );
}

export default ChatNewMessageTopBar;
