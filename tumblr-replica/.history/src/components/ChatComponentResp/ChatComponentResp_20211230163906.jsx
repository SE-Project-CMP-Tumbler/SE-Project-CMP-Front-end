import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChatTopBarResp from './subcomponents/ChatTopBarResp';
import ChatFeed from '../ChatFeed/ChatFeed';
import ChatInputResp from './subcomponents/ChatInputResp';
import {
  getChatRoomIdRes, getBlogIdFromBlogUN, getChatFeed, setBlogFriendName,
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
  const userbloginfo = useSelector((state) => state.Chat.userbloginfo);
  const dispatch = useDispatch();
  const d1= ()=> {
    dispatch(getBlogIdFromBlogUN({ blogUserName: params.friendname, User, isUser: false }));
  }
  function d2(id1, id2) {
    dispatch(getChatRoomIdRes({ blogsID: { from_blog_id: id1, to_blog_id: id2 }, User }));
  }
  function d3(chatRoom) {
    dispatch(getChatFeed({ chatRoomId: chatRoom, User }));
  }
  function d4() {
    dispatch(setBlogFriendName({ blogUserName: params.friendname, User }));
  }
  useEffect(() => {
    console.log(params.username);
    dispatch(getBlogIdFromBlogUN({ blogUserName: params.username, User, isUser: true }))
      .then((id1) => {
        console.log(id1);
        d1()
          .then((id2) => {
            console.log(id2);
            d2(id1, id2)
              .then((chatRoom) => {
                console.log(chatRoom);
                d3(chatRoom).then((() => {
                  console.log('finaaal');
                  d4();
                }));
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
        id={userbloginfo.id}
      />
      <ChatFeed img={userbloginfo.avatar} id={userbloginfo.id} friendName={params.friendname} />
      <ChatInputResp id={userbloginfo.id} />
    </Box>
  );
}
export default ChatComponentResp;
