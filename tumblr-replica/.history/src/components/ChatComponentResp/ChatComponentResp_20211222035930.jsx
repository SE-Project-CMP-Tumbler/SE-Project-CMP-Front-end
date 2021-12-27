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
