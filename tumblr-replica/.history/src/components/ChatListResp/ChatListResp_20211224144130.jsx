/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import {
  Divider,
  ListItemAvatar,
} from '@material-ui/core';
// import { Box } from '@mui/system';
import { ListItemButton, Avatar } from '@mui/material';
import ChatListTopBarResp from './subcomponents/ChatListTopBarResp';
import { getAllChats } from '../../slices/chatmodule/chatmoduleAPI';
import './css/ChatListResp.css';
import ChatNewMessageTopBar from '../ChatNewMessageResp/subcomponents/ChatNewMessageTopBar';
import AfterTopBar from './subcomponents/AfterTopBar';
import ChatSearch from '../ChatTo/subcomponents/ChatSearch';
import '../ChatNewMessageResp/css/ChatNewMessageTopBar.css';
import ChatL

function ChatListResp() {
  const chats = useSelector((state) => state.Chat.chats);
  const newmessagepressres = useSelector((state) => state.Chat.newmessagepressres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChats());
  }, []);
  return (
    <div>
      {newmessagepressres ? <ChatNewMessageTopBar /> : <ChatListTopBarResp />}
      {newmessagepressres && (
      <>
        <AfterTopBar />
        <ChatSearch />
      </>
      )}
      <List
        sx={{
          padding: '0',
          width: '100%',
        }}
      >
      <ChatList chats={newMessagePress1 ? recentlyFollowed1 : chats} />
      </List>
    </div>
  );
}
export default ChatListResp;
