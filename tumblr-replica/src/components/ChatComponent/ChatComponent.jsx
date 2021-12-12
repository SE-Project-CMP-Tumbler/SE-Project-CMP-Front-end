import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import ChatTopBar from './subcomponents/ChatTopBar';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInput from './subcomponents/ChatInput';

const useStyles = makeStyles({
  chatbox: {
    width: '265px',
    height: '405px',
    border: 'none',
    borderRadius: '4px',
    zIndex: '3',
  },
});

function ChatComponent({ id }) {
  const classes = useStyles();
  const apiBaseUrl = 'http://localhost:8000';
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiBaseUrl}/chatsforoneuser/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        from_blog_name: 'cpphelloworld',
        to_blog_name: 'cpphelloworld',
      },
    })
      .then((res) => {
        setMessages(res?.data?.chat_messages);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <Box
      className={classes.chatbox}
    >
      <ChatTopBar id={id} setMessages={setMessages} />
      <ChatFeed id={id} messages={messages} />
      <ChatInput id={id} setMessages={setMessages} messages={messages} />
    </Box>
  );
}
export default ChatComponent;

ChatComponent.propTypes = {
  id: PropTypes.string.isRequired,
};
