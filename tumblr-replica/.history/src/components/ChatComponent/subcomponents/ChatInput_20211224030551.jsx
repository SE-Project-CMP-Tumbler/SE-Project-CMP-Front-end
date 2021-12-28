import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import ChatGifs from '../../ChatGifs/ChatGifs';
import '../css/ChatInput.css';
import { sendMessage } from '../../../slices/chatmodule/chatmoduleAPI';
import { selectUser } from '../../../states/User/UserSlice';
import sendMessageTrigger from '../../../apis/pusher/chat-update';

function ChatInput({ id, chatRoomId }) {
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');
  const chatFeed = useSelector((state) => state.Chat.chatfeed);
  const User = useSelector(selectUser);
  // const [file, setFile] = useState('');
  const textInput = useRef(null);
  const [uploadedGif, setUploadedGif] = useState('');
  // const fileInputRef = useRef();
  // const classes = useStyles();
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
    newmessages = chatFeed;
    newmessages = [...chatFeed, Message];
    console.log(newmessages);
    console.log(id);
    // dispatch(sendMessage({
    //   id, Message, newmessages, chatRoomId, User,
    // }));
    sendMessageTrigger(Message);
    setPhoto('');
    setMessage('');
  };
  /*
  const UploadImage = (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
  };
  */

  useEffect(() => {
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
        />
      </div>
      <div style={{
        display: 'flex', padding: '5px', backgroundColor: 'white', border: 'none',
      }}
      >
        <ChatGifs setUploadedGif={setUploadedGif} />
        <input type="file" style={{ display: 'none' }} onChange={fileSelectedHandler} ref={textInput} />
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
    </Box>
  );
}
export default ChatInput;
ChatInput.propTypes = {
  id: PropTypes.number.isRequired,
  chatRoomId: PropTypes.number.isRequired,
};
