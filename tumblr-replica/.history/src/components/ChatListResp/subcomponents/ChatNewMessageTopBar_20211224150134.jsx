import React from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import '../css/ChatNewMessageTopBar.css';
import User from '../../../LogedInUser/DemoUser';
import newMessagePressRes from '../../../slices/chatmodule/chatmoduleSlice';

function ChatNewMessageTopBar() {
  const dispatc
  return (
    <Box className="top-bar">
      <Box />
      <Box className="bar newmessage">
        New message
      </Box>
      <Box>
        <a href={`/messaging/new/${User}`} className="bar cancel" onClick={()=>{dispatch()}}>
          Cancel
        </a>
      </Box>
    </Box>
  );
}

export default ChatNewMessageTopBar;
