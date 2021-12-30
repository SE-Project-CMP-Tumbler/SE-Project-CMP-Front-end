import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import {
  Divider,
  Box,
  ListItem,
} from '@material-ui/core';
import {
  newMessagePress,
} from '../../slices/chatmodule/chatmoduleSlice';
import { getAllChats, recentlyFollowed } from '../../slices/chatmodule/chatmoduleAPI';
import ChatList from './subcomponents/ChatList';
// import ChatSearch from './subcomponents/ChatSearch';
import { selectUser } from '../../states/User/UserSlice';
import SearchBar from '../ChatSearchBar/SearchBar';
import './css/ChatList.css';
import { useOutsideAlerter } from '../NavigationBar/interactions';
/**
 * This function is for the ChatTo component this component has a search
 * bar to search for friend to chat with
 * @method
 * @returns {*} ChatTo componenet
 */
function ChatTo({ buttonRef }) {
  const chats = useSelector((state) => state.Chat.chats);
  const User = useSelector(selectUser);
  const recentlyFollowed1 = useSelector((state) => state.Chat.recentlyfollowed);
  const newMessagePress1 = useSelector((state) => state.Chat.newmessagepress);
  const dispatch = useDispatch();
  const chatDropRef = useRef(null);
  useOutsideAlerter(chatDropRef, buttonRef);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    newMessagePress1
      ? dispatch(recentlyFollowed(User)) : dispatch(getAllChats());
  }, []);
  return (
    <div className="chat-drop-content" ref={chatDropRef} style={{ display: 'none' }}>
      <List
        sx={{
          bgcolor: 'background.paper',
          border: '1px solid #a9a9a9',
          padding: '0',
          borderRadius: '7px',
          width: '280px',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<ListSubheader component="div" id="nested-list-subheader" />}
      >
        <ListItem>
          <Box style={{
            display: 'flex', height: '30px', textAlign: 'space-between', width: '100%',
          }}
          >
            <Box style={{ textAlign: 'center', width: '50%' }}>
              <button
                type="button"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '.8rem',
                  fontWeight: '600',
                  marginReight: '0',
                  textAlign: 'right',
                }}
              >
                {User.blogName}
              </button>
            </Box>
            <span style={{ margin: '0 30px' }} />
            <Box style={{ width: '50%' }}>
              <button
                type="button"
                onClick={() => {
                  dispatch(newMessagePress());
                }}
                style={{
                  color: '#778899',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '.78125rem',
                  fontWeight: '700',
                  marginLeft: '10px',
                  textAlign: 'right',
                }}
              >
                Nevermind
              </button>
            </Box>
          </Box>
          <Divider />
        </ListItem>
        <Divider />
        {newMessagePress1 && <SearchBar />}
        <ChatList chats={newMessagePress1 ? recentlyFollowed1 : chats} />
        {console.log(recentlyFollowed1)}
      </List>
    </div>
  );
}
export default ChatTo;
