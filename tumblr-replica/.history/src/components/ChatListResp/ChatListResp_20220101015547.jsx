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
import ChatListSub from './subcomponents/ChatListSub';
import { selectUser } from '../../states/User/UserSlice';

/**
 * Component for render the part that contain information about the
 * chat participant and the chat feed
 *
 * @component
 * @name
 * ChatFeed
 * @param {string} friendName  the name of the chat participant
 * @param {string} img   teh img of the chat participant
 * @example
 * return (
 *   <ChatFeed />
 * )
 */

function ChatListResp() {
  const chats = useSelector((state) => state.Chat.chats);
  const newmessagepressres = useSelector((state) => state.Chat.newmessagepressres);
  console.log('in chatList');
  console.log(newmessagepressres);
  const User = useSelector(selectUser);
  // const recentlyFollowed1 = useSelector((state) => state.Chat.recentlyfollowed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChats(User));
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
        className="old-chat-list"
      >
        <ChatListSub chats={chats} />
      </List>
    </div>
  );
}
export default ChatListResp;
