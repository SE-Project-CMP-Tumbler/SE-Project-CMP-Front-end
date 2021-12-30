import { React, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
  const [isListOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('Text');
  const [selectedItem,setSelectedItem] = 
  const List = [
    {
      id: 0,
      title: 'Text',
    },
    {
      id: 1,
      title: 'Photo',
    },
    {
      id: 2,
      title: 'Link',
    },
    {
      id: 3,
      title: 'Quote',
    },
    {
      id: 4,
      title: 'Video',
    },
  ];
  useEffect(() => {
  }, []);
  return (
    <div className="dd-wrapper">
      <button
        type="button"
        className="dd-header"
      >
        <div className="dd-header-title">{headerTitle}</div>
        <ArrowDropDownIcon onClick={() => { setListOpen(!isListOpen); }} />
      </button>
      {isListOpen && (
      <div
        role="list"
        className="dd-list"
      >
        {List.map((item) => (
          <button
            type="button"
            className="dd-list-item"
            key={item.id}
            onClick={() => selectItem(item)}
          >
            {item.title}
            {' '}
            {item.selected && <FontAwesome name="check" />}
          </button>
        ))}
      </div>
      )}
    </div>

  );
}

export default Header;
