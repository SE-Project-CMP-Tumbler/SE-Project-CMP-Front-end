import { React, useEffect } from 'react';
// import CardHeader from '@mui/material/CardHeader';
import { Divider, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllChats, getChatRoomId,
} from '../../slices/chatmodule/chatmoduleAPI';
import { selectUser } from '../../../states/User/UserSlice';

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
    <Box>
      <Box style={{ display: 'flex', width: '100%' }}>
        <input placeholder="Title" autoComplete="off" maxLength="150" type="text" style={{ width: '80%' }} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label style={{ width: '20%', margin: '5px', color: '' }}>Optional</label>
      </Box>
      <Divider />
      <Box style={{ display: 'flex', width: '100%' }}>
        <input placeholder="URL" autoComplete="off" maxLength="150" type="text" style={{ width: '80%' }} />
      </Box>
      <Divider />
      <Box style={{ display: 'flex', width: '100%' }}>
        <input placeholder="URL" autoComplete="off" maxLength="150" type="text" style={{ width: '80%' }} />
      </Box>
    </Box>
  );
}

export default Text;
