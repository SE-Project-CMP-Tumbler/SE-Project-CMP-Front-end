import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
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
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Notes from './Notes/Notes';
import LoggedIn from '../../../../Login/Login';
import { DisplayNote } from '../../../../../state/NotesWindow';
import { SetNotes } from '../../../../../state/PostNotes';

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
const PostFooter = function PostFooterButtons(props) {
  const { id, blogId } = props;
  // States
  const [Liked, setLiked] = useState(false);
  const [showModel, setShowModel] = useState(false);

  // variables
  const apiBaseUrl = 'http://localhost:8008';
  let likeID = 0; // Demo for testing

  // reducers & states
  // eslint-disable-next-line spaced-comment
  //const { showen } = useSelector((state) => state.NoteWindow);
  const dispatch = useDispatch();
  // const { likes } = useSelector((state) => state.PostNotes);

  useEffect(() => {
    Axios({
      method: 'GET',
      url: `${apiBaseUrl}/post_notes/5`, //    !!! TO BE EDITED !!!    //
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // console.log(res.data.note);
        dispatch(SetNotes(res.data.note));
        // console.log(likes);
      })
      .catch(() => {
        // console.log("Can't get post notes due to : ", err);
      });
  }, []);

  const handleDelete = function DeletePost() {
    Axios({
      method: 'DELETE',
      url: `${apiBaseUrl}/post/${id}`, //    !!! TO BE EDITED !!!    //
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
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          console.log(res.data.id);
          likeID = res.data.id;
        })
        .catch((err) => {
          console.log("Can't like post due to : ", err);
        });
    } else {
      console.log(likeID);
      Axios({
        method: 'DELETE',
        url: `${apiBaseUrl}/like/${likeID}`, //    !!! TO BE EDITED !!!    //
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
        <Notes id={id} blog_id={blogId} />
      </div>
      <div className="postActions">
        <IconButton aria-label="Send to message" className="action">
          <ReplyOutlinedIcon sx={{ width: 30, height: 30 }} />
        </IconButton>

        <IconButton
          aria-label="add note"
          className="action"
          onClick={(event) => dispatch(DisplayNote(event.currentTarget))}
        >
          <ChatBubbleOutlineIcon sx={{ width: 30, height: 30 }} />
        </IconButton>

        <IconButton
          aria-label="reblog"
          className="action"
          onClick={() => handleReblog()}
        >
          <RepeatIcon sx={{ width: 30, height: 30 }} />
        </IconButton>
        <IconButton
          aria-label="add to favorites"
          id={id}
          onClick={() => handleLike()}
          className="action"
        >
          {!Liked && <FavoriteBorderIcon sx={{ width: 30, height: 30 }} />}
          {Liked && (
            <FavoriteIcon
              sx={{ width: 30, height: 30 }}
              style={{ fill: '#DE320C' }}
            />
          )}
        </IconButton>

        {LoggedIn.blog_id === blogId && (
          <IconButton
            aria-label="Delete"
            className="action"
            onClick={() => setShowModel(true)}
          >
            <DeleteOutlineIcon sx={{ width: 30, height: 30 }} />
          </IconButton>
        )}

        {LoggedIn.blog_id === blogId && (
          <IconButton aria-label="Edit post" className="action">
            <EditOutlinedIcon sx={{ width: 30, height: 30 }} />
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
  id: PropTypes.number.isRequired,
  blogId: PropTypes.number.isRequired,
};
