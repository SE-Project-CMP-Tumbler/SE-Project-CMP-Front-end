import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Popover } from '@material-ui/core';
import axios from 'axios';
import {
  setGifs,
} from '../../slices/ChatModule/ChatModule';

function ChatGifs({ setUploadedGif }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const gifIconPressed = useSelector((state) => state.Chat.gifIconPressed);
  const [gifIconPressed, gifIconPressedHandle] = useState(false);
  const gifs = useSelector((state) => state.Chat.gifs);
  const apiBaseUrl = 'http://localhost:8000';
  const dispatch = useDispatch();

  const srcset = (image, size, rows = 1, cols = 1) => ({
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  });
  const gifIconPressHandle = (e) => {
    if (!gifIconPressed) {
      axios({
        method: 'GET',
        url: `${apiBaseUrl}/gifs`,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          dispatch(setGifs({ gifs: res.data }));
          setAnchorEl(e.target);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    gifIconPressedHandle(!gifIconPressed);
  };
  return (
    <button type="button" onClick={gifIconPressHandle}>
      <svg
        preserveAspectRatio="xMinYMin"
        viewBox="1 1 22 21"
        width="28"
        height="28"
        fill="#00B8FF"
      >
        <path d="M1 4.995C1 3.893 1.89 3 2.991 3H21.01C22.109 3 23 3.893
        23 4.995v14.01C23 20.107 22.11 21 21.009 21H2.99A1.992 1.992 0 0 1 1 19.005V4.995zm9.829 6.653H7.722v1.26h1.487v1.047s-.328.45-1.477.45c-1.148 0-2.05-.83-2.05-2.265 0-1.436.881-2.266 2.02-2.266.963 0 1.517.482 1.814.81l1.097-.954c-.225-.246-1.035-1.23-2.912-1.23C5.723 8.5 4 9.782 4 12.14s1.723 3.65 3.68 3.65c1.949 0 2.79-.892 3.149-1.21v-2.932zm2.82-3.045h-1.662v7.074h1.661V8.603zm6.064 0h-4.42v7.074h1.651v-2.696h2.605v-1.323h-2.605V9.925h2.769V8.603z"
        />
      </svg>
      <Popover
        open={gifIconPressed}
        anchorEl={anchorEl}
        placement="top-end"
        transition
      >
        <ImageList
          sx={{ width: 350, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {gifs.map((item) => (
            <ImageListItem
              key={item.id}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <button
                type="button"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => setUploadedGif(item.img)}
              >
                <img
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </button>
            </ImageListItem>
          ))}
        </ImageList>
      </Popover>
    </button>
  );
}

export default ChatGifs;

ChatGifs.propTypes = {
  setUploadedGif: PropTypes.func.isRequired,
};
