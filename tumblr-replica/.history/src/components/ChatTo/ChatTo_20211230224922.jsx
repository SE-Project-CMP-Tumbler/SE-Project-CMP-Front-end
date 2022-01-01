import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import {
  Divider,
  Box,
  ListItem,
} from '@material-ui/core';
import { selectBlogs } from '../../states/usertumblr/usertumblrSlice';
import { tumblrSelection } from '../NavigationBar/interactions';
import { TumblrItem } from '../NavigationBar/subcomponents/NotificationsDropDown';
import {
  newMessagePress,
} from '../../slices/chatmodule/chatmoduleSlice';
import { getAllChats, recentlyFollowed } from '../../slices/chatmodule/chatmoduleAPI';
import ChatList from './subcomponents/ChatList';
// import ChatSearch from './subcomponents/ChatSearch';
import { selectUser } from '../../states/User/UserSlice';
import SearchBar from '../ChatSearchBar/SearchBar';
import './css/ChatList.css';
/**
 * This function is for the ChatTo component this component has a search
 * bar to search for friend to chat with
 * @method
 * @returns {*} ChatTo componenet
 */
function ChatTo() {
  const chats = useSelector((state) => state.Chat.chats);
  const User = useSelector(selectUser);
  const blogState = useSelector(selectBlogs);
  const chevronRef = useRef(null);
  // const ListOpen = useSelector(true);
  const recentlyFollowed1 = useSelector((state) => state.Chat.recentlyfollowed);
  const newMessagePress1 = useSelector((state) => state.Chat.newmessagepress);
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    newMessagePress1
      ? dispatch(recentlyFollowed(User)) : dispatch(getAllChats(User));
  }, []);
  return (
    <div className="chat-drop-content">
      <List
        sx={{
          bgcolor: 'background.paper',
          border: '1px solid #a9a9a9',
          padding: '0',
          borderRadius: '7px',
          width: '280px',
          maxHeight: '400px',
          overflowY: 'scroll',
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
              <button type="button" aria-label="switch tumblr" className="chevron" onClick={() => { tumblrSelection(chevronRef); }} />
              <div className="tumblr-list" ref={chevronRef}>
                
                    (blogState.blogs).map((blog) => (
                      <TumblrItem tumblrName={blog.username} tumblrTitle={blog.title} tumblrIcon={blog.avatar ? blog.avatar : './profile2.png'} />
                    ))

                  ) }
              </div>
            </Box>
            {newMessagePress1 && <span style={{ margin: '0 30px' }} />}
            <Box style={{ width: '50%' }}>
              <button
                type="button"
                onClick={() => {
                  dispatch(newMessagePress());
                }}
                className={newMessagePress1 ? 'Nevermind' : 'NewMessage'}
              >
                {newMessagePress1 ? 'Nevermind' : 'New Message'}
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
