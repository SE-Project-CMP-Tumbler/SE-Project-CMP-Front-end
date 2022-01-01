import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChatTopBarResp from './subcomponents/ChatTopBarResp';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInputResp from './subcomponents/ChatInputResp';
import {getChatRoomIdRes, getBlogIdFromBlogUN} from '../../slices/chatmodule/chatmoduleAPI';

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
 * @param {string} friendName  friendNam is a prop
 * for this component to know the name of the chat participant
 * @param {id} id id  is a prop that contain the id of the  chat participant
 * @param {img} img img  is a prop that contain the img of the  chat participant
 * @returns {*} ChatComponent componenet
 */

function ChatComponentResp({ friendName, id, img }) {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogIdFromBlogUN(params.username)).then
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
