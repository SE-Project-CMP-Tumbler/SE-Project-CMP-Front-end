import React, { useEffect } from 'react';
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

/**
 * This function is for the ChatComponent this component to
 * disply the chat between two friends
 * @method
 * @param {number} chatRoomId elem chatRoomId is a prop
 * for this component to know witch chatRoom will be opened  for those participants
 * @param {Object} elem elem is a prop that contain the info about chat
 * participant and the last  message between them
 * for this component to know witch chatRoom will be opened  for those participants
 * @returns {*} ChatComponent componenet
 */
function ChatComponentResp({ friendName, id, img }) {
  const classes = useStyles();
  useEffect(() => {
  }, []);
  return (
    <Box
      className={classes.chatbox}
    >
      <ChatTopBarResp friendName={friendName} id={id} img={img} />
      <ChatFeed img={img} friendName={friendName} />
      <ChatInputResp id={id} />
    </Box>
  );
}
export default ChatComponentResp;

ChatComponentResp.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
};
