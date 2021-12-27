import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import '../css/ChatListTopBarResp.css';
import { selectUser } from '../../../states/User/UserSlice';
import { newMessagePressRes } from '../../../slices/chatmodule/chatmoduleSlice';

function ChatListTopBarResp() {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Box className="top-bar">
      <Box>
        <a href="/messaging" onClick={() => { dispatch(newMessagePressRes()); }}>
          <svg viewBox="0 0 13 20.1" width="20" height="20" fill="#ffffff" className="back-icon">
            <path d="M0 2.9l7.2 7.2-7.1 7.1L3 20.1l7.1-7.1 2.9-2.9L2.9 0 0 2.9" />
          </svg>
        </a>
      </Box>
      <Box className="user-name">
        {User.blogName}
      </Box>
      <Box>
        <a href={`/messaging/new/${User.blogName}`}>
          <svg viewBox="0 0 20 20" width="20" height="20" fill="#ffffff">
            <path d="M10 0C4.5 0 0 4.5 0 10c0 2.1.6 4 1.7 5.6l-.6 3.9 4.2-.7c1.4.8 3.1 1.2 4.7 1.2 5.5 0 10-4.5 10-10S15.5 0 10 0zm3.2 11.1h-2.1v2.1c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1v-2.1H6.8c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h2.1V6.8c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v2.1h2.1c.6 0 1 .5 1 1.1 0 .6-.5 1-1 1.1z" />
          </svg>
        </a>
      </Box>
    </Box>
  );
}

export default ChatListTopBarResp;
