/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ChatListTopBarResp from './subcomponents/ChatListTopBarResp';
import { getAllChats } from '../../slices/chatmodule/chatmoduleAPI';
import './css/ChatListResp.css';
import ChatNewMessageTopBar from './subcomponents/ChatNewMessageTopBar';
import AfterTopBar from './subcomponents/AfterTopBar';
import ChatSearch from '../ChatTo/subcomponents/ChatSearch';
import './css/ChatNewMessageTopBar.css';
import ChatList from '../ChatTo/subcomponents/ChatList';

function ChatListResp() {
  const chats = useSelector((state) => state.Chat.chats);
  const newmessagepressres = useSelector((state) => state.Chat.newmessagepressres);
  console.log('in chatList');
  console.log(newmessagepressres);
  const recentlyFollowed1 = useSelector((state) => state.Chat.recentlyfollowed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChats());
  }, []);
  return (
    <div>
      {newmessagepressres ? <ChatNewMessageTopBar /> : <ChatListTopBarResp />}
      {console.log('in chatList')}
      console.log(newmessagepressres)}
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
        <ChatList chats={newmessagepressres ? recentlyFollowed1 : chats} />
      </List>
    </div>
  );
}
export default ChatListResp;
