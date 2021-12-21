import { useDispatch } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import { addMessage } from '../../../slices/ChatModule/ChatModule';
import ChatGifs from '../../ChatGifs/ChatGifs';
import '../css/ChatInputResp.css';

function ChatInputResp({ id, setMessages, messages }) {
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');
  // const [file, setFile] = useState('');
  const textInput = useRef(null);
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
          setMessage('');
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
  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <Box>
      <div>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          rows="1"
          placeholder="Say something"
          maxLength="4096"
          style={{
            height: '30px',
            overflowY: 'auto',
            outline: 'none',
            border: 'none',
            width: '255px',
            fontFamily: 'monospace',
            fontSize: '15px',
            padding: '10px',
            resize: 'none',
            margin: '0',
          }}
        />
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
      </div>
      <div style={{
        display: 'flex', padding: '5px', backgroundColor: 'white', border: 'none',
      }}
      >
        <ChatGifs setUploadedGif={setUploadedGif} />
        <input type="file" style={{ display: 'none' }} onChange={fileSelectedHandler} ref={textInput} />
      </div>
    </Box>
  );
}
export default ChatInputResp;
ChatInputResp.propTypes = {
  id: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
