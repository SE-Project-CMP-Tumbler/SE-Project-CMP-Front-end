import React from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import '../css/ChatNewMessageTopBar.css';
import User from '../../../LogedInUser/DemoUser';
import newMessagePressRes from '../../../slices/chatmodule/chatmoduleSlice';

function ChatNewMessageTopBar() {
  const dispatch = useDispatch();
  return (
    <Box className="top-bar">
      <Box />
      <Box className="bar newmessage">
        New message
      </Box>
      <Box>
        <a href={`/messaging/new/${User}`} className="bar cancel" onClick={()=>{ dispatch(newMessagePressRes())}}>
          Cancel
        </a>
      </Box>
    </Box>
  );
}

export default ChatNewMessageTopBar;
