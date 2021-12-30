import { React, useEffect, useState } from 'react';
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
  const [isListOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('Text');
  const List =tu [
    {
        id: 0,
        title: 'New York',
        selected: false,
        key: 'location'
    },
    {
        id: 1,
        title: 'Dublin',
        selected: false,
        key: 'location'
    },
    {
        id: 2,
        title: 'California',
        selected: false,
        key: 'location'
    },
    {
        id: 3,
        title: 'Istanbul',
        selected: false,
        key: 'location'
    },
    {
        id: 4,
        title: 'Izmir',
        selected: false,
        key: 'location'
    },
    {
        id: 5,
        title: 'Oslo',
        selected: false,
        key: 'location'
    }
  ] ['Text', 'Photo', 'Link', 'Quote', 'Video'];
  useEffect(() => {
  }, []);
  return (
    <div className="dd-wrapper">
    <button
      type="button"
      className="dd-header"
      onClick={this.toggleList}
    >
      <div className="dd-header-title">{headerTitle}</div>
      {isListOpen
        ? <FontAwesome name="angle-up" size="2x" />
        : <FontAwesome name="angle-down" size="2x" />}
    </button>
    {isListOpen && (
      <div
        role="list"
        className="dd-list"
      >
        {list.map((item) => (
          <button
            type="button"
            className="dd-list-item"
            key={item.id}
            onClick={() => this.selectItem(item)}
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
