import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Pusher from 'pusher-js';
import ChatTopBar from './subcomponents/ChatTopBar';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInput from './subcomponents/ChatInput';
import { getChatFeed } from '../../slices/chatmodule/chatmoduleAPI';
import { chatUpdate } from '../../slices/chatmodule/chatmoduleSlice';
import { selectUser } from '../../states/User/UserSlice';

const useStyles = makeStyles({
  chatbox: {
    width: '275px',
    height: '450px',
    border: 'none',
    borderRadius: '4px',
    zIndex: '3',
  },
});

/**
 * This function is for the ChatComponent this component to
 * disply the chat between two friends
 * @method
 * @param {string} chatRoomId elem chatRoomId of the chat participants
 * @param {Object} elem elem info about chat participant and the last  message between them
 * for this component to know witch chatRoom will be opened  for those participants
 * @returns {*} ChatComponent componenet
 */
function ChatComponent({
  chatRoomId, elem,
}) {
  const classes = useStyles();
  const User = useSelector(selectUser);
  const [showImg, setShowImg] = useState(false);
  const dispatch = useDispatch();
  console.log(elem);

  useEffect(() => {
    Pusher.logToConsole = true;
    // const token = JSON.parse(localStorage.getItem('user'));
    const pusher = new Pusher('a59193c9ecc2d49635c0', {
      cluster: 'eu',
    });
    dispatch(getChatFeed({ chatRoomId, User }));
    console.log('from chta comm');
    console.log(elem);
    const channel = pusher.subscribe(`channel-${chatRoomId}`);

    // when a new member successfully subscribes to the channel
    channel.bind('pusher:subscription_succeeded', () => {
      console.log('subscribtion success');
    });

    channel.bind('pusher:subscription_error', () => {
      console.log('there is an error happen while subscribe ');
    });

    // when a new member joins the chat
    channel.bind('pusher:member_added', () => {
      console.log('count', channel.members.count);
    });

    // when a member leaves the chat
    channel.bind('pusher:member_removed', (member) => {
      console.log(`member has removed from ${member}`);
    });

    // updates chats
    channel.bind('chat-update', (data) => {
      console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii from nadeen channel ');
      console.log(data);
      if (data.from_blog_id !== User.primaryBlogId) {
        dispatch(chatUpdate(data));
      }
    });

    // return () => {
    //   pusher.unsubscribe(`private-channel-${chatRoomId}`);
    // };
  }, []);
  return (
    <Box
      className={classes.chatbox}
    >
      <ChatTopBar
        friendName={elem.friend_username}
        id={elem.friend_id}
        chatRoomId={chatRoomId}
      />
      <ChatFeed
        showImg={showImg}
        img={elem.friend_avatar}
        friendName={elem.friend_username}
      />
      <ChatInput showImg={showImg} setShowImg={setShowImg} chatRoomId={chatRoomId} />
    </Box>
  );
}
export default ChatComponent;

ChatComponent.propTypes = {
  elem: PropTypes.instanceOf(Object).isRequired,
  chatRoomId: PropTypes.number.isRequired,
};
