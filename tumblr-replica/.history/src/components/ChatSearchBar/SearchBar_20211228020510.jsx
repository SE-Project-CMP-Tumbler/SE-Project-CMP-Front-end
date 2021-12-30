import React, { useState, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import './css/SearchBar.css';
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
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder=" "
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {blogsToChat && (
        <SearchList chats={blogsToChat} />
      )}
    </div>
  );
}

export default SearchBar;
