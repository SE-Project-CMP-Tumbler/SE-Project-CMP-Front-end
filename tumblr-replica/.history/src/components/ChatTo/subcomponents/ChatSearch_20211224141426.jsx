import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import {
  Divider,
  Typography,
  Grid,
  ListItem,
  TextField,
} from '@material-ui/core';
import { Box } from '@mui/system';
import {
  newMessagePress,
} from '../../slices/chatmodule/chatmoduleSlice';
import { getAllChats, recentlyFollowed } from '../../slices/chatmodule/chatmoduleAPI';
import ChatList from './subcomponents/ChatList';
import { selectUser } from '../../states/User/UserSlice';

function ChatSearch() {
  const chats = useSelector((state) => state.Chat.chats);
  const User = useSelector(selectUser);
  const recentlyFollowed1 = useSelector((state) => state.Chat.recentlyfollowed);
  const newMessagePress1 = useSelector((state) => state.Chat.newmessagepress);
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    newMessagePress1
      ? dispatch(recentlyFollowed()) : dispatch(getAllChats());
  }, []);
  return (
    <>
      <ListItem>
        <TextField
          id="standard-basic"
          label="To:"
          variant="standard"
          fullWidth
          InputProps={{ disableUnderline: true }}
        />
      </ListItem>
      <Box
        component="div"
        sx={{
          color: 'black',
          width: '94%',
          height: '20px',
          backgroundColor: '#f5f5f5',
          padding: '10px 3%',
        }}
      >
        <Typography variant="body2" align="left" sx={{ height: '22px' }}>
          Recently Followed
        </Typography>
      </Box>
    </>
  );
}
export default ChatSearch;
