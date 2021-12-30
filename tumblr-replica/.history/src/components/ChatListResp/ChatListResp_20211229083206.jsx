/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ChatListTopBarResp from './subcomponents/ChatListTopBarResp';
import { getAllChats } from '../../slices/chatmodule/chatmoduleAPI';
import './css/ChatListResp.css';
import ChatNewMessageTopBar from './subcomponents/ChatNewMessageTopBar';
import AfterTopBar from './subcomponents/AfterTopBar';
// import ChatSearch from '../ChatTo/subcomponents/ChatSearch';
import SearchBar from '../ChatSearchBar/SearchBar';
import './css/ChatNewMessageTopBar.css';
import ChatList from '../ChatTo/subcomponents/ChatList';
import { selectUser } from '../../states/User/UserSlice';


/**
 * This function is for the ChatListResp
 * component this component to display the
 * people you can chat with in the mobile view or in the labtop small view
 * @method
 * @returns {*} ChatTo componenet
 */
function ChatListResp() {
  const chats = useSelector((state) => state.Chat.chats);
  const newmessagepressres = useSelector((state) => state.Chat.newmessagepressres);
  console.log('in chatList');
  console.log(newmessagepressres);
  // const recentlyFollowed1 = useSelector((state) => state.Chat.recentlyfollowed);
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
        <SearchBar />
      </>
      )}
      <List
        sx={{
          padding: '0',
          width: '100%',
          backgroundColor: 'white',
          height: '100%',
          overflowY: 'scroll',
          maxHeight: '100vh',
          overflow: 'auto',
        }}
      >
        <ChatList chats={chats} />
      </List>
    </div>
  );
}
export default ChatListResp;
