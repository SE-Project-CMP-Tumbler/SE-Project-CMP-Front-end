import React from 'react';
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
  setChatBoxesID,
  newMessagePress,
} from '../../states/reducers/ChatReducer';

/**
 * This function is for the ChatTo component this component has a search
 * bar to search for friend to chat with
 * @method
 * @returns {*} ChatTo componenet
 */
function ChatTo() {
  const chats = useSelector((state) => state.Chat.chats);
  const apiBaseUrl = 'http://localhost:8000';
  const dispatch = useDispatch();
  const pushtoChatBoxHandle = (event, chatId) => {
    event.preventDefault();
    axios({
      method: 'GET',
      url: `${apiBaseUrl}/chatsforoneuser/${chatId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        dispatch(setChatBoxesID(chatId));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 280,
        bgcolor: 'background.paper',
        border: '1px solid #a9a9a9',
        padding: '0',
        borderRadius: '7px',
        position: 'absolute',
        right: '70px',
        top: '56px',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div" id="nested-list-subheader" />}
    >
      <ListItem>
        <Grid container spacing={1}>
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
          zIndex: '100',
        }}
      >
        <Typography variant="body2" align="left">
          Recently Followed
        </Typography>
      </Box>
      {chats.map((chat) => (
        <div key={chat.id}>
          <ListItemButton
            onClick={(event) => pushtoChatBoxHandle(event, chat.id)}
          >
            <ListItemAvatar>
              <Avatar src={chat.img} />
            </ListItemAvatar>
            <Box>
              <Typography variant="body2" align="left" sx={{ height: '22px' }}>
                {chat.to}
              </Typography>
              <Typography variant="body2" align="left" sx={{ height: '22px' }}>
                {chat.lastmessage}
              </Typography>
            </Box>
          </ListItemButton>
          <Divider />
        </div>
      ))}
    </List>
  );
}
export default ChatTo;
