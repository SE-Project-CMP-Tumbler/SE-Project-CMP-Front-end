import React from 'react';
import { Box } from '@mui/system';
import '../css/ChatNewMessageTopBar.css';
import User from '../../../LogedInUser/DemoUser';
import newMessagePressRes from '../'

function ChatNewMessageTopBar() {
  const newMessagePressRes
  return (
    <Box className="top-bar">
      <Box />
      <Box className="bar newmessage">
        New message
      </Box>
      <Box>
        <a href={`/messaging/new/${User}`} className="bar cancel">
          Cancel
        </a>
      </Box>
    </Box>
  );
}

export default ChatNewMessageTopBar;
