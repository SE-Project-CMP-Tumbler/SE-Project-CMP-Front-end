import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import {
  Divider,
  Typography,
  Grid,
  ListItem,
} from '@material-ui/core';
import {
  newMessagePress,
} from '../../slices/chatmodule/chatmoduleSlice';
import { getAllChats, recentlyFollowed } from '../../slices/chatmodule/chatmoduleAPI';
import ChatList from './subcomponents/ChatList';
import ChatSearch from './subcomponents/ChatSearch';
import { selectUser } from '../../states/User/UserSlice';

/**
 * This function is for the ChatTo component this component has a search
 * bar to search for friend to chat with
 * @method
 * @returns {*} ChatTo componenet
 */
function ChatTo() {
  const chats = useSelector((state) => state.Chat.chats);
  const User = useSelector(selectUser);
  const recentlyFollowed1 = useSelector((state) => state.Chat.recentlyfollowed);
  const newMessagePress1 = useSelector((state) => state.Chat.newmessagepress);
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    newMessagePress1
      ? dispatch(recentlyFollowed(User)) : dispatch(getAllChats());
  }, []);
  return (
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
        <div style={{ position: 'fixed' }}>
          <Grid item style={{ marginRight: '34px' }}>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {User.blogName}
            </Typography>
          </Grid>
          <Grid item>
            <button
              type="button"
              onClick={() => {
                dispatch(newMessagePress());
              }}
              style={{
                marginLeft: '4px', color: '#778899', backgroundColor: 'transparent', border: 'none', cursor: 'pointer',
              }}
            >
              Nevermind
            </button>
          </Grid>
        </div>
      </ListItem>
      <Divider />
      {newMessagePress1 && <ChatSearch />}
      <ChatList chats={newMessagePress1 ? recentlyFollowed1 : chats} />
      {console.log(recentlyFollowed1)}
    </List>
  );
}
export default ChatTo;
