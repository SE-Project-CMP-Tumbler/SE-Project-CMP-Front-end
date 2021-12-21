import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import ChatTopBarResp from './subcomponents/ChatTopBarResp';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInputResp from './subcomponents/ChatInputResp';

const useStyles = makeStyles({
  chatbox: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
});

function ChatComponentResp({ id }) {
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
      <ChatTopBarResp id={id} setMessages={setMessages} />
      <ChatFeed id={id} messages={messages} />
      <ChatInputResp id={id} setMessages={setMessages} messages={messages} />
    </Box>
  );
}
export default ChatComponentResp;

ChatComponentResp.propTypes = {
  id: PropTypes.string.isRequired,
};
