import React, { useEffect } from 'react';
import Pusher from 'pusher';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ChatTopBar from './subcomponents/ChatTopBar';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInput from './subcomponents/ChatInput';
import { getChatFeed } from '../../slices/chatmodule/chatmoduleAPI';
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

function ChatComponent({
  chatRoomId, elem,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY, {
    cluster: 'eu',
    authEndpoint: 'api/pusher/auth',
    auth: { params: {User.blogName}}
  });
  useEffect(() => {
    console.log(chatRoomId);
    dispatch(getChatFeed(chatRoomId));
    const channel = pusher.subscribe(`private-channel-${chatRoomId}`);

    // when a new member successfully subscribes to the channel
    channel.bind('pusher:subscription_succeeded', (members) => {
      // total subscribed
      // setOnlineUsersCount(members.count);
      console.log(members.count);
    });

    // when a new member joins the chat
    channel.bind('pusher:member_added', (member) => {
      // console.log("count",channel.members.count)
      // setOnlineUsersCount(channel.members.count);
      // setOnlineUsers((prevState) => [
      //   ...prevState,
      //   { username: member.info.username, userLocation: member.info.userLocation },
      // ]);
      console.log(member);
    });

    // when a member leaves the chat
    channel.bind('pusher:member_removed', (member) => {
      // setOnlineUsersCount(channel.members.count);
      // setUsersRemoved((prevState) => [...prevState, member.info.username]);
      console.log(`member has removed from ${member}`);
    });

    // updates chats
    channel.bind('chat-update', (data) => {
      const { username, message } = data;
      setChats((prevState) => [
        ...prevState,
        { username, message },
      ]);
    });

    return () => {
      pusher.unsubscribe(`private-channel-${chatRoomId}`);
    };
  }, []);
  return (
    <Box
      className={classes.chatbox}
    >
      <ChatTopBar
        friendName={elem.blog_username}
        id={elem.blog_id}
        chatRoomId={chatRoomId}
      />
      <ChatFeed img={elem.friend_avatar} friendName={elem.friend_username} />
      <ChatInput chatRoomId={chatRoomId} />
    </Box>
  );
}
export default ChatComponent;

ChatComponent.propTypes = {
  elem: PropTypes.instanceOf(Object).isRequired,
  chatRoomId: PropTypes.number.isRequired,
};
