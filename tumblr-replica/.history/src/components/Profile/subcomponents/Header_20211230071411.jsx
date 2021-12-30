import { React, useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@material-ui/core';
import { Paper } from '@mui/material';
// import { selectUser } from '../../../states/User/UserSlice';
import Text from './Text';

function Header() {
  const [isListOpen, setListOpen] = useState(false);
  // const User = useState(selectUser);
  const [headerTitle, setHeaderTitle] = useState('Text');
  // const [state, setState] = useState('Text');
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
    <Paper style={{ width: '600px', maxWidth: '600px' }}>
      <Box style={{ display: 'flex' }}>
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
            nadeen
          </p>
          <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" alt="" />
        </div>
      </Box>
      <Box>
        {/* {
        // eslint-disable-next-line no-nested-ternary
        state === 'Text' ?
        <Text /> : (state === 'Photo' ?
        <Photo /> : (state === 'Link') ? <Link /> : (state === 'Quote') ? <Quote /> : <Video />)
      } */}
        <Text />
      </Box>

    </Paper>
  );
}

export default Header;
