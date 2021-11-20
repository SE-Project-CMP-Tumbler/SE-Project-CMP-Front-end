import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ChatTopBar from '../ChatTopBar/ChatTopBar';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInput from '../ChatInput/ChatInput';

const useStyles = makeStyles({
  chatbox: {
    width: '280px',
    height: '485px',
    border: '1px solid #a9a9a9',
    borderRadius: '4px',
    position: 'fixed',
  },
});

function ChatComponent(props) {
  const classes = useStyles();
  const apiBaseUrl = 'http://localhost:8000';
  const { id } = props;
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
    <Grid
      container
      className={classes.chatbox}
      style={{ position: 'relative' }}
    >
      <Grid item xs={12}>
        <ChatTopBar id={id} setMessages={setMessages} />
        <ChatFeed id={id} messages={messages} />
        <ChatInput id={id} setMessages={setMessages} messages={messages} />
      </Grid>
    </Grid>
  );
}
export default ChatComponent;

ChatComponent.propTypes = {
  id: PropTypes.string.isRequired,
};
