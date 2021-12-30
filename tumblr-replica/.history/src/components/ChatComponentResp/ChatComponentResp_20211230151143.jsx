import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChatTopBarResp from './subcomponents/ChatTopBarResp';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInputResp from './subcomponents/ChatInputResp';
import {
  getChatRoomIdRes, getBlogIdFromBlogUN, getChatFeed, setBlogFriendName
} from '../../slices/chatmodule/chatmoduleAPI';
import { selectUser } from '../../states/User/UserSlice';

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

function ChatComponentResp() {
  const classes = useStyles();
  const params = useParams();
  const User = useSelector(selectUser);
  // const userbloginfo = useSelector((state) => state.Chat.userbloginfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(params.username);
    dispatch(getBlogIdFromBlogUN({ blogUserName: params.username, User, isUser: true }))
      .then((id1) => {
        dispatch(getBlogIdFromBlogUN({ blogUserName: params.friendname, User, isUser: false }))
          .then((id2) => {
            dispatch(setBlogFriendName({ blogUserName: params.friendname, User }));
            dispatch(getChatRoomIdRes({ blogsID: { from_blog_id: id1, to_blog_id: id2 }, User }))
              .then((chatRoom) => {
                dispatch(getChatFeed({ chatRoomId: chatRoom, User }));
              });
          });
      });
  }, []);

  return (
    <Box
      className={classes.chatbox}
    >
      <ChatTopBarResp
        friendName={params.friendname}
        // id={userbloginfo.id}
      />
      <ChatFeed friendName={params.friendname} />
      <ChatInputResp />
    </Box>
  );
}
export default ChatComponentResp;
