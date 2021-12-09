import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { IconButton, Popover } from '@material-ui/core';
import GifIcon from '@mui/icons-material/Gif';
import axios from 'axios';
import {
  setGifs,
} from '../../states/reducers/ChatReducer';
/**
 * This function is for the ChatFeed component this component is a part of the chat component
 * this component display the messages of the two chaters
 * @method
 * @param {function} setUploadedGif setUploadedGif this function is a state for uploading
 * gifs and send them
 * @returns {*} ChatGifs componenet
 */
function ChatGifs({ setUploadedGif }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [gifIconPressed, gifIconPressedHandle] = useState(false);
  const gifs = useSelector((state) => state.Chat.gifs);
  const apiBaseUrl = 'http://localhost:8000';
  const dispatch = useDispatch();
  /**
  * This function is for display the gifs with different sizes
  * @method
  * @param {string} image source of the image
  * @param {number} size size of the img
  * @param {number} rows to determine hight
  * @param {number} cols to determine width
  * @returns {object} object contain some attributes for the img
  */
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
    <IconButton
      size="large"
      edge="start"
      sx={{ mr: 1, mt: 0 }}
      onClick={gifIconPressHandle}
    >
      <GifIcon color="primary" />
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
    </IconButton>
  );
}

export default ChatGifs;

ChatGifs.propTypes = {
  setUploadedGif: PropTypes.func.isRequired,
};
