import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import { addMessage } from '../../../slices/ChatModule/ChatModule';
import ChatGifs from '../../ChatGifs/ChatGifs';
import '../css/ChatInput.css';

function ChatInput({ id, setMessages, messages }) {
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');
  const [uploadedGif, setUploadedGif] = useState('');
  // const fileInputRef = useRef();
  // const classes = useStyles();
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
  /*
  const UploadImage = (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
  };
  */

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
    <Box>
      <Box sx={{ borderTop: '1px solid rgba(0, 184, 255, 0.1)' }}>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          rows="1"
          placeholder="New message"
          maxLength="4096"
          style={{
            height: '32px',
            overflowY: 'auto',
            outline: 'none',
            border: 'none',
            width: '243px',
            fontFamily: 'monospace',
            fontSize: '15px',
            padding: '10px',
            resize: 'none',
          }}
        />
      </Box>
      <Box style={{ display: 'flex', padding: '5px' }}>
        <ChatGifs setUploadedGif={setUploadedGif} />
        <button type="button">
          <span tabIndex="-1">
            <svg
              viewBox="0 0 17 15"
              width="26"
              height="28"
              fill="#00B8FF"
            >
              <path d="M14.6 1h-2.7l-.6-1h-6l-.6 1H2.4C1.1 1 0 2 0 3.3v9.3C0 13.9 1.1 15 2.4 15h12.2c1.3 0 2.4-1.1 2.4-2.4V3.3C17 2 15.9 1 14.6 1zM8.3 13.1c-2.9 0-5.2-2.3-5.2-5.1s2.3-5.1 5.2-5.1c2.9 0 5.2 2.3 5.2 5.1s-2.3 5.1-5.2 5.1zm5.9-8.3c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 .6-.5 1.1-1.1 1.1zm-10 3.1c0 1.2.5 2.2 1.3 3 0-.2 0-.4-.1-.6 0-2.2 1.8-4 4.1-4 1.1 0 2 .4 2.8 1.1-.3-2-2-3.4-4-3.4-2.2-.1-4.1 1.7-4.1 3.9z" />
            </svg>
          </span>
        </button>
        <button type="submit" className="send-button" onClick={handleClick}>
          <svg
            role="img"
            viewBox="0 0 17 17"
            width="17"
            height="17"
            fill="#00B8FF"
          >
            <path d="M2 15l3.17-5.065 4.124-.956c.475-.143.475-.816 0-.96L5.17 7.066 2 2l13 6.5L2 15zm13.894-8.29l-13-6.5A1.996 1.996 0 0 0 .52.655 2 2 0 0 0 .304 3.06L3.71 8.5.303 13.94a2 2 0 0 0 2.59 2.85l13-6.5a2.002 2.002 0 0 0 .001-3.58z" />
          </svg>
        </button>
      </Box>
    </Box>
  );
}
export default ChatInput;
ChatInput.propTypes = {
  id: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
