import React from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import '../css/ChatNewMessageTopBar.css';
import { newMessagePressRes } from '../../../slices/chatmodule/chatmoduleSlice';

/**
 * Component for render the the top bar of the 
 * @component
 * @name
 * ChatNewMessageTopBar
 * @example
 * return (
 *   <ChatNewMessageTopBar />
 * )
 */
function ChatNewMessageTopBar() {
  const dispatch = useDispatch();
  return (
    <Box className="top-bar">
      <Box />
      <Box className="bar newmessage">
        New message
      </Box>
      <Box>
        <a href="/messaging" className="bar cancel" onClick={() => { dispatch(newMessagePressRes()); }}>
          Cancel
        </a>
      </Box>
    </Box>
  );
}

export default ChatNewMessageTopBar;
