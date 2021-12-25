import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import {
  Divider,
  Typography,
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
  TextField,
} from '@material-ui/core';
import { Box } from '@mui/system';
import axios from 'axios';

import { ListItemButton } from '@mui/material';
import {
  newMessagePress,
} from '../../slices/chatmodule/chatmoduleSlice';
import { getAllChats, recentlyFollowed } from '../../slices/chatmodule/chatmoduleAPI';
import ChatList from './subcomponents/ChatList';
function ChatTo() {
  const chats = useSelector((state) => state.Chat.chats);
  const recentlyFollowed1 = useSelector((state) => state.Chat.recentlyfollowed);
  const newMessagePress1 = useSelector((state) => state.Chat.newmessagepress);
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    newMessagePress1
      ? dispatch(recentlyFollowed()) : dispatch(getAllChats());
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
        <Grid container spacing={3}>
          <Grid item style={{ marginRight: '34px' }}>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              nadeen-dondon
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
        </Grid>
      </ListItem>
      <Divider />
      {newMessagePress1 ? (
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
      ) : null}
      <ChatList chats={newMessagePress1 ? recentlyFollowed1 : chats} />
    </List>
  );
}
export default ChatTo;
