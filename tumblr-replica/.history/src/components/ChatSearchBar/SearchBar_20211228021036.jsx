import React, { useState, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import './css/SearchBar.css';
import { ListItem, Box } from '@material-ui/core';
import { searchForChat } from '../../slices/chatmodule/chatmoduleAPI';
import { filterBlogsChat } from '../../slices/chatmodule/chatmoduleSlice';
import { selectUser } from '../../states/User/UserSlice';
import SearchList from './subcomponents/SearchList';

function SearchBar() {
  // const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const dispatch = useDispatch();
  const User = useSelector(selectUser);
  const blogsToChat = useSelector((state) => state.Chat.blogsToChat);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    if (searchWord.length === 3) {
      dispatch(searchForChat({ User, searchWord }));
    } else {
      dispatch(filterBlogsChat(searchWord));
    }
  };

  return (
    <>
      <ListItem style={{ backgroundColor: 'white' }}>
        <div style={{ display: 'flex', padding: '3px 5px 0 5px', height: '30px' }}>
          <div className="to-palceholder">
            To:
          </div>
          <input
            type="text"
            className="to-input"
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
      </ListItem>
      {blogsToChat && (
      <SearchList chats={blogsToChat} />
      )}
      <Box
        component="div"
        sx={{
          color: 'black',
          width: '94%',
          height: '20px',
          backgroundColor: '#f5f5f5',
          padding: '10px 3%',
        }}
      >
        <Typography variant="body2" align="left" sx={{ height: '22px' }}>
          Recently Followed
        </Typography>
      </Box>
    </>
  );
}

export default SearchBar;
