import { React, useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@material-ui/core';
import { Paper } from '@mui/material';
import {useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import { getBlog, fetchBlog } from '../../../states/blogslice/blogslice';
// import { selectUser } from '../../../states/User/UserSlice';
import Text from './Text';
import '../css/Header.css';

function Header({ blogid }) {
  const [isListOpen, setListOpen] = useState(false);
  const dispatch = useDispatch();
  // const User = useState(selectUser);
  const [headerTitle, setHeaderTitle] = useState('Text');
  const Blog = useSelector(getBlog).response;
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
    dispatch(fetchBlog(blogid));// will take BlogId
  }, []);
  return (
    <Paper style={{
      width: '500px', maxWidth: '600px', padding: '20px', border: '1px solid #e0e0e0',
    }}
    >
      <Typography variant="h5" component="h5">
        Submit a post
      </Typography>
      <Paper style={{
        width: '460px', maxWidth: '460px', height: '380px', padding: '20px', border: '1px solid #e0e0e0', marginTop: '20px',
      }}
      >
        <Box style={{ display: 'flex', width: '100%' }}>
          <Box className="dd-wrapper">
            <Box style={{ display: 'flex', width: '80%' }}>
              <div className="dd-header-title">{headerTitle}</div>
              <ArrowDropDownIcon onClick={() => { setListOpen(!isListOpen); }} />
            </Box>
            {isListOpen && (
            <div
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
          </Box>
          <Box style={{ display: 'flex', width: '20%' }}>
            <p style={{
              fontSize: '12px',
              fontWeight: 'bold',
              verticalAlign: 'middle',
              color: '#bbb',
              marginTop: '5px',
            }}
            >
              {Blog.username}
            </p>
            <img
              style={{
                width: '25px', height: '25px', borderRadius: '5px', margin: '0px 10px',
              }}
              src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
              alt=""
            />
          </Box>
        </Box>
        <Box>
          {/* {
        // eslint-disable-next-line no-nested-ternary
        state === 'Text' ?
        <Text /> : (state === 'Photo' ?
        <Photo /> : (state === 'Link') ? <Link /> : (state === 'Quote') ? <Quote /> : <Video />)
      } */}
          <Text blogid={blogid} />
        </Box>

      </Paper>
    </Paper>
  );
}

export default Header;
