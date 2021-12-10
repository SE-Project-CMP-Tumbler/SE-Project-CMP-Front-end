/* eslint-disable operator-linebreak */
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
} from '../../slices/ChatModule/ChatModule';

function ChatTo() {
  const chats = useSelector((state) => state.Chat.chats);
  const apiBaseUrl = 'http://localhost:8000';
  const dispatch = useDispatch();
  const pushtoChatBoxHandle = (event, chatId) => {
    console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
    console.log(chatId);
    event.preventDefault();
    axios({
      method: 'GET',
      url: `${apiBaseUrl}/chatsforoneuser/${chatId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        dispatch(setChatBoxesID({ id: chatId, img: res.data.img }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
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
