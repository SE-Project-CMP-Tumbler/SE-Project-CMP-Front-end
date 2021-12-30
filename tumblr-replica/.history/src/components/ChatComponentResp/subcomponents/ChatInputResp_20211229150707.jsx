import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ChatGifs from '../../ChatGifs/ChatGifs';
import '../css/ChatInputResp.css';
import { sendMessage } from '../../../slices/chatmodule/chatmoduleAPI';
import { selectUser } from '../../../states/User/UserSlice';

function ChatInputResp({ id }) {
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');
  const chatFeed = useSelector((state) => state.Chat.chatfeed);
  //  const [uploadedGif, setUploadedGif] = useState('');
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    const Message = {
      from: User.blogName,
      text: message,
      photo,
    };
    let newmessages = [];
    newmessages = chatFeed;
    newmessages = [...chatFeed, Message];
    console.log(newmessages);
    console.log(id);
    dispatch(sendMessage(id, Message, newmessages));
    setPhoto('');
    setMessage('');
  };
  useEffect(() => {
  }, []);
  return (
    <Box>
      <div style={{
        display: 'flex', padding: '5px', backgroundColor: 'white', border: 'none', height: '20%',
      }}
      >
        <svg
          preserveAspectRatio="xMinYMin"
          viewBox="1 1 22 21"
          width="28"
          height="28"
          fill="#00B8FF"
        >
          <path d="M1 4.995C1 3.893 1.89 3 2.991 3H21.01C22.109 3 23 3.893
        23 4.995v14.01C23 20.107 22.11 21 21.009 21H2.99A1.992 1.992 0 0 1 1 19.005V4.995zm9.829 6.653H7.722v1.26h1.487v1.047s-.328.45-1.477.45c-1.148 0-2.05-.83-2.05-2.265 0-1.436.881-2.266 2.02-2.266.963 0 1.517.482 1.814.81l1.097-.954c-.225-.246-1.035-1.23-2.912-1.23C5.723 8.5 4 9.782 4 12.14s1.723 3.65 3.68 3.65c1.949 0 2.79-.892 3.149-1.21v-2.932zm2.82-3.045h-1.662v7.074h1.661V8.603zm6.064 0h-4.42v7.074h1.651v-2.696h2.605v-1.323h-2.605V9.925h2.769V8.603z"
          />
        </svg>
        <button type="button">
          <svg
            viewBox="0 0 17 15"
            width="26"
            height="28"
            fill="#00B8FF"
          >
            <path d="M14.6 1h-2.7l-.6-1h-6l-.6 1H2.4C1.1 1 0 2 0 3.3v9.3C0 13.9 1.1 15 2.4 15h12.2c1.3 0 2.4-1.1 2.4-2.4V3.3C17 2 15.9 1 14.6 1zM8.3 13.1c-2.9 0-5.2-2.3-5.2-5.1s2.3-5.1 5.2-5.1c2.9 0 5.2 2.3 5.2 5.1s-2.3 5.1-5.2 5.1zm5.9-8.3c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 .6-.5 1.1-1.1 1.1zm-10 3.1c0 1.2.5 2.2 1.3 3 0-.2 0-.4-.1-.6 0-2.2 1.8-4 4.1-4 1.1 0 2 .4 2.8 1.1-.3-2-2-3.4-4-3.4-2.2-.1-4.1 1.7-4.1 3.9z" />
          </svg>
        </button>
        <input type="file" style={{ display: 'none' }} />
      </div>
      <div className="input-part">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          rows="1"
          placeholder="Say something"
          maxLength="4096"
          className="mytextarea"
        />
        <button type="submit" className="send-buttonr" onClick={handleClick}>
          <svg
            role="img"
            width="17"
            height="17"
            fill="#00B8FF"
          >
            <path d="M2 15l3.17-5.065 4.124-.956c.475-.143.475-.816 0-.96L5.17 7.066 2 2l13 6.5L2 15zm13.894-8.29l-13-6.5A1.996 1.996 0 0 0 .52.655 2 2 0 0 0 .304 3.06L3.71 8.5.303 13.94a2 2 0 0 0 2.59 2.85l13-6.5a2.002 2.002 0 0 0 .001-3.58z" />
          </svg>
        </button>
      </div>
    </Box>
  );
}
export default ChatInputResp;
ChatInputResp.propTypes = {
  id: PropTypes.string.isRequired,
};
