import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import '../css/PostFooter.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { FaRegComment } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Notes from './Notes/Notes';
// import LoggedIn from '../../../../Login/Login';
// import { DisplayNote } from '../../../../../states/features/dashboard/NotesWindowSlice';
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
  const { postId, blogId, postType } = props;
  // States
  const [showModel, setShowModel] = useState(false);

  // reducers & states
  const dispatch = useDispatch();
  // for deleting ask or submission
  const handleDelete = function DeletePost() {
    dispatch(deletePost(postId));
    setShowModel(false);
  };

  return (
    <>
      <div className="notediv">
        <Notes postId={postId} blog_id={blogId} />
      </div>
      <div className="postActions">

        <IconButton
          aria-label="Delete"
          className="action"
          onClick={() => setShowModel(true)}
        >
          <DeleteOutlineIcon style={{ fontSize: 25 }} />
        </IconButton>

        {postType === 'ask' && (
          <IconButton
            aria-label="Answer"
            className="action"
            size="small"
            onClick={() => setShowModel(true)}
          >
            Answer
          </IconButton>
        )}
        {postType === 'submit' && (
          <IconButton
            aria-label="Answer"
            className="action"
            onClick={() => setShowModel(true)}
            size="small"
          >
            Post
          </IconButton>
        )}
        {/* {postType === 'submit' && (
          <IconButton aria-label="Edit post" className="action">
            <EditOutlinedIcon style={{ fontSize: 25 }} />
          </IconButton>
        )} */}

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
  postType: PropTypes.string.isRequired,
};
