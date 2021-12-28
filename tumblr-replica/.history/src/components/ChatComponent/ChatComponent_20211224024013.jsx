import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ChatTopBar from './subcomponents/ChatTopBar';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInput from './subcomponents/ChatInput';
import { getChatFeed } from '../../slices/chatmodule/chatmoduleAPI';

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
  id, img, friendName, chatRoomId,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(id);
    dispatch(getChatFeed(chatRoomId));
    const channel = pusher.subscribe(`private-channel-${chatRoomId}`); 

    // when a new member successfully subscribes to the channel
    channel.bind("pusher:subscription_succeeded", (members) => {
      // total subscribed
      console.log(members.count);
      //setOnlineUsersCount(members.count);
    )};
    , []);
  return (
    <Box
      className={classes.chatbox}
    >
      <ChatTopBar friendName={friendName} id={id} img={img} chatRoomId={chatRoomId} />
      <ChatFeed img={img} friendName={friendName} />
      <ChatInput id={id} chatRoomId={chatRoomId} />
    </Box>
  );
}
export default ChatComponent;

ChatComponent.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
  chatRoomId: PropTypes.number.isRequired,
};
