import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pusher from 'pusher-js';
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
  const [showImg, setShowImg] = useState(false);
  const [chatRoomId,setChatRoomId] = useState('');
  const userbloginfo = useSelector((state) => state.Chat.userbloginfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(params.username);
    dispatch(getBlogIdFromBlogUN({ blogUserName: params.username, User, isUser: true }))
      .then((id1) => {
        console.log(id1.payload);
        dispatch(getBlogIdFromBlogUN({ blogUserName: params.friendname, User, isUser: false }))
          .then((id2) => {
            console.log(id2.payload);
            dispatch(getChatRoomIdRes({
              blogsID:
              { from_blog_id: id1.payload, to_blog_id: id2.payload },
              User,
            }))
              .then((chatRoom) => {
                console.log(chatRoom);
                setChatRoomId()
                dispatch(getChatFeed({ chatRoomId: chatRoom.payload, User })).then((() => {
                  console.log('finaaal');
                  dispatch(setBlogFriendName({ blogUserName: params.friendname, User }));
                }));
              });
          });
      });
    Pusher.logToConsole = true;
    // const token = JSON.parse(localStorage.getItem('user'));
    const pusher = new Pusher('a59193c9ecc2d49635c0', {
      cluster: 'eu',
    });
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
