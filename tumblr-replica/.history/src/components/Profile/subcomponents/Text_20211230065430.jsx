import { React, useEffect } from 'react';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import './css/OldChatList.css';
import {
  newMessagePress,
  removeAvaterID,
} from '../../slices/chatmodule/chatmoduleSlice';
import {
  getAllChats, getChatRoomId,
} from '../../slices/chatmodule/chatmoduleAPI';
import { selectUser } from '../../states/User/UserSlice';


function Text() {
  const dispatch = useDispatch();
  const User = useSelector(selectUser);
  const chatBox = useSelector((state) => state.Chat.chatbox);
  const avatars = useSelector((state) => state.Chat.avatars);
  const myFriends = useSelector((state) => state.Chat.chats);
  useEffect(() => {
    console.log('iam here');
    dispatch(getAllChats(User));
    console.log(User.id);
  }, []);
  return (
      <Box style={{display : 'flex', width: '100%'}}>
          <input placeholder='Title' autocomplete= 'off' maxlength= '150' type= 'text' style={{width: '80%'}} />
          <label style={{ width: '20'}} >Optional</label>
      </Box>
    
  );
}

export default Text;