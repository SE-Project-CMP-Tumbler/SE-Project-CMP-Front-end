import { React, useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Divider, Box } from '@material-ui/core';
import { selectUser } from '../../../states/User/UserSlice';

function Header() {
  const [isListOpen, setListOpen] = useState(false);
  const User = useState(selectUser);
  const [headerTitle, setHeaderTitle] = useState('Text');
  const [state, setState] = useState('Text');
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
        >
          {User.blogName}
        </p>
        <img src={User.primaryBlogAvatar} alt="" />
      </div>
      <div>
        {
        state === 'Text'? <Text /> : (state=== 'Photo' ? <Photo /> : (state=== 'Link') ? <Link /> :(state === 'Quote') ? <Quote /> : <Video /> )
      }
      </div>


    </>
  );
}

export default Header;
