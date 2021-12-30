import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Pusher from 'pusher-js';
import ChatTopBar from './subcomponents/ChatTopBar';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInput from './subcomponents/ChatInput';
import { getChatFeed } from '../../slices/chatmodule/chatmoduleAPI';
// import { setPusherClient } from 'react-pusher';
// import ReactPusher from 'react-pusher';
// import { NEXT_PUBLIC_KEY } from '../../lib/pusher';
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
 * @param {string} chatRoomId elem chatRoomId is a prop
 * for this component to know witch chatRoom will be opened  for those participants
 * @param {Object} elem elem is a prop that contain the info about chat
 * participant and the last  message between them
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
    // const pusher = new Pusher('a59193c9ecc2d49635c0', {
    //   cluster: 'eu',
    //   authEndpoint: 'https://api.dev.tumbler.social/broadcasting/auth',
    //   auth: {
    //     headers: {
    //       authorization: `Bearer ${User.accessToken}`,
    //     },
    //   },
    // });
    dispatch(getChatFeed({ chatRoomId, User }));
    console.log('from chta comm');
    console.log(elem);
    const channel = pusher.subscribe(`channel-${chatRoomId}`);
    // const channel = pusher.subscribe('maryem');

    // when a new member successfully subscribes to the channel
    channel.bind('pusher:subscription_succeeded', () => {
      // total subscribed
      // setOnlineUsersCount(members.count);
      console.log('subscribtion success');
    });

    channel.bind('pusher:subscription_error', () => {
      // total subscribed
      // setOnlineUsersCount(members.count);
      console.log('there is an error happen while subscribe ');
    });

    // when a new member joins the chat
    channel.bind('pusher:member_added', () => {
      console.log('count', channel.members.count);
      // setOnlineUsersCount(channel.members.count);
      // setOnlineUsers((prevState) => [
      //   ...prevState,
      //   { username: member.info.username, userLocation: member.info.userLocation },
      // ]);
    });

    // when a member leaves the chat
    channel.bind('pusher:member_removed', (member) => {
      // setOnlineUsersCount(channel.members.count);
      // setUsersRemoved((prevState) => [...prevState, member.info.username]);
      console.log(`member has removed from ${member}`);
    });

    // updates chats
    channel.bind('chat-update', (data) => {
      console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii from nadeen channel ');
      dispatch(chatUpdate(data));
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
      < seChatInputtShowImg={setShowImg} chatRoomId={chatRoomId} />
    </Box>
  );
}
export default ChatComponent;

ChatComponent.propTypes = {
  elem: PropTypes.instanceOf(Object).isRequired,
  chatRoomId: PropTypes.number.isRequired,
};
