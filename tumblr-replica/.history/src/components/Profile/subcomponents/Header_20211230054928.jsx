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

function Header() {
const  [isListOpen,setListOpen] =useState(false);
const  [headerTitle,setHeaderTitle] = useState('Text');
  useEffect(() => {
  }, []);
  return (
      <div className='drop-down-list'>


      </div>

    
  );
}

export default Text;