import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Divider } from '@mui/material';
import ChatGifs from './ChatGifs';
import { addMessage } from '../states/reducers/ChatReducer';

const useStyles = makeStyles({
  SendIcon: {
    width: '30px',
    height: '30px',
    marginRight: '2px',
  },
  inputList: {
    width: '100%',
  },
});

function ChatInput({ id, setMessages, messages }) {
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');
  const [uploadedGif, setUploadedGif] = useState('');
  const fileInputRef = useRef();
  const classes = useStyles();
  const apiBaseUrl = 'http://localhost:8000';
  const dispatch = useDispatch();
  // const messages = useSelector((state) => state.Chat.messages);

  const handleClick = () => {
    const Message = {
      from: 'nadeen',
      text: message,
      gif: uploadedGif,
      photo,
    };
    let newmessages = [];
    newmessages = messages;
    newmessages = [...messages, Message];
    setMessages(newmessages);
    axios({
      method: 'PATCH',
      url: `${apiBaseUrl}/chatsforoneuser/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: { chat_messages: newmessages },
    })
      .then(() => {
        setPhoto('');
        dispatch(addMessage({ message: Message }));
        setMessage('');
      })
      .catch((err) => {
        console.log(err?.message);
      });

    if (message) {
      axios({
        method: 'PATCH',
        url: `${apiBaseUrl}/chatsforoneuser/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: { lastmessage: message },
      })
        .then(() => {
        })
        .catch((err) => {
          console.log(err?.message);
        });
    }
  };
  const UploadImage = (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiBaseUrl}/chatsforoneuser/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setMessages(res?.data?.chat_messages);
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }, []);
  return (
    <Grid container className={classes.inputArea}>
      <List className={classes.inputList}>
        <Divider />
        <ListItem>
          <TextField
            value={message}
            size="small"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            id="outlined-basic"
            label="Your message here"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </ListItem>
        <ListItem>
          <ChatGifs setUploadedGif={setUploadedGif} />
          <input type="file" accept="image/*" onChange={UploadImage} />
          <IconButton
            edge="start"
            sx={{ mr: 1, mt: 0 }}
            onClick={() => fileInputRef.current.click()}
          >
            <PhotoCameraIcon color="primary" />
          </IconButton>
          <IconButton edge="start" sx={{ ml: 15, mt: 0 }} onClick={handleClick}>
            <SendIcon color="primary" className={classes.SendIcon} />
          </IconButton>
        </ListItem>
      </List>
    </Grid>
  );
}
export default ChatInput;

ChatInput.propTypes = {
  id: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
