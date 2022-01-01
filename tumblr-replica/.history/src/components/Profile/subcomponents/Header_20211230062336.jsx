import { React, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';
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
  const List = [
    {
      id: 0,
      title: 'Text',
      selected: false,
    },
    {
      id: 1,
      title: 'Photo',
      selected: false,
    },
    {
      id: 2,
      title: 'Link',
      selected: false,
    },
    {
      id: 3,
      title: 'Quote',
      selected: false,
    },
    {
      id: 4,
      title: 'Video',
      selected: false,
    },
  ];
  useEffect(() => {
  }, []);
  return (
    <>
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
              onClick={() => { setHeaderTitle(item.title); }}
            >
              {item.title}
            </button>
          ))}
        </div>
        )}
      </div>
      <div>
        <p style={{
          fontSize: '12px',
          fontWeight: 'bold',
          verticalAlign: 'middle',
          color: '#bbb',
        }}
        
        <img src={User.blogName} />
      </div>

    </>
  );
}

export default Header;
