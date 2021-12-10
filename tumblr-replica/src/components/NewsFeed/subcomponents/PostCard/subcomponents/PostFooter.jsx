import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import '../css/PostFooter.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaRegComment } from 'react-icons/fa';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Notes from './Notes/Notes';
import LoggedIn from '../../../../Login/Login';
import { DisplayNote } from '../../../../../states/NotesWindow';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'transparent',
  border: 'none',
  p: 4,
};
/**
 * this functions makes the footer of a post which has a buttons & include notes on a post
 * @param {Object} props all post info and notes on it
 * @returns buttons and notes part of the post
 */
const PostFooter = function PostFooterButtons(props) {
  const { postId, blogId } = props;
  // States
  const [Liked, setLiked] = useState(false);
  const [showModel, setShowModel] = useState(false);
  // variables
  const apiBaseUrl = 'http://localhost:8000';

  // reducers & states
  const dispatch = useDispatch();

  const handleDelete = function DeletePost() {
    Axios({
      method: 'DELETE',
      url: `${apiBaseUrl}/post/${postId}`, //    !!! TO BE EDITED !!!    //
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("Can't delete post due to : ", err);
      });
    setShowModel(false);
  };

  const handleLike = function likeUnlikePost() {
    if (!Liked) {
      Axios({
        method: 'POST',
        url: `${apiBaseUrl}/like`, //    !!! TO BE EDITED !!!    //
        data: {
          post_id: { postId },
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          console.log(res.data.id);
        })
        .catch((err) => {
          console.log("Can't like post due to : ", err);
        });
    } else {
      Axios({
        method: 'DELETE',
        url: `${apiBaseUrl}/like/${postId}`, //    !!! TO BE EDITED !!!    //
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log("Can't unlike post due to : ", err);
        });
    }
    setLiked(!Liked);
  };

  const handleReblog = function ReblogwithCaption() {};

  return (
    <>
      <div className="notediv">
        <Notes postId={postId} blog_id={blogId} />
      </div>
      <div className="postActions">
        <IconButton aria-label="Send to message" className="action">
          <ReplyOutlinedIcon style={{ fontSize: 25 }} />
        </IconButton>

        <IconButton
          aria-label="add note"
          className="action"
          onClick={(event) => dispatch(DisplayNote(event.currentTarget))}
        >
          <FaRegComment style={{ fontSize: 25 }} />
        </IconButton>

        <IconButton
          aria-label="reblog"
          className="action"
          onClick={() => handleReblog()}
        >
          <RepeatIcon style={{ fontSize: 25 }} />
        </IconButton>
        <IconButton
          aria-label="add to favorites"
          id={postId}
          onClick={() => handleLike()}
          className="action"
        >
          {!Liked && <FavoriteBorderIcon style={{ fontSize: 25 }} />}
          {Liked && (
            <FavoriteIcon
              style={{ fill: '#DE320C', fontSize: 25 }}
            />
          )}
        </IconButton>

        {LoggedIn.blog_id === blogId && (
          <IconButton
            aria-label="Delete"
            className="action"
            onClick={() => setShowModel(true)}
          >
            <DeleteOutlineIcon style={{ fontSize: 25 }} />
          </IconButton>
        )}

        {LoggedIn.blog_id === blogId && (
          <IconButton aria-label="Edit post" className="action">
            <EditOutlinedIcon style={{ fontSize: 25 }} />
          </IconButton>
        )}

        {showModel && (
          <Modal
            open={showModel}
            onClose={() => setShowModel(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ color: 'white', fontSize: '200' }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure you want to delete this post
              </Typography>
              <Button onClick={() => handleDelete()}>ok</Button>
              <Button onClick={() => setShowModel(false)}> cancel</Button>
            </Box>
          </Modal>
        )}
      </div>
    </>
  );
};

export default PostFooter;
PostFooter.propTypes = {
  postId: PropTypes.number.isRequired,
  blogId: PropTypes.number.isRequired,
};
