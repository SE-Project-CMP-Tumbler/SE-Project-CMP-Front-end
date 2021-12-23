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
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../../../states/User/UserSlice';
import { UnlikePost, LikePost } from '../../../../../states/features/dashboard/likeAPI';
import Notes from './Notes/Notes';
import { deletePost } from '../../../../../states/features/dashboard/NotesSlice';

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
  const [showNotes, setShowNotes] = useState(false);
  const User = useSelector(selectUser);
  // reducers & states
  const dispatch = useDispatch();
  const handleDelete = function DeletePost() {
    dispatch(deletePost(postId));
    setShowModel(false);
  };

  const handleLike = function likeUnlikePost() {
    if (!Liked) {
      dispatch(LikePost({ postID: postId, User }));
    } else {
      dispatch(UnlikePost({ postID: postId, User }));
    }
    setLiked(!Liked);
  };

  const handleEdit = function Edit() {
  };
  const handleReblog = function ReblogwithCaption() {};

  return (
    <>
      <div className="notediv">
        <Notes
          postId={postId}
          blog_id={blogId}
          showNotes={showNotes}
          setShowNotes={setShowNotes}
        />
      </div>
      <div className="postActions">
        <IconButton aria-label="Send to message" className="action">
          <ReplyOutlinedIcon style={{ fontSize: 25 }} />
        </IconButton>

        <IconButton
          aria-label="add note"
          className="action"
          onClick={(event) => setShowNotes(event.currentTarget)}
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

        {User.id === blogId && (
          <IconButton
            aria-label="Delete"
            className="action"
            onClick={() => setShowModel(true)}
          >
            <DeleteOutlineIcon style={{ fontSize: 25 }} />
          </IconButton>
        )}

        {User.id === blogId && (
          <IconButton aria-label="Edit post" className="action" onClick={() => handleEdit()}>
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
