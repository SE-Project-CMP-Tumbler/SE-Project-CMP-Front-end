import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../css/PostFooter.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DeleteSubmitAsynch } from '../../../../../states/deletesubmissionslice/deleteSubmissionSlice';
import { fetchAsyncAllMessages } from '../../../../../states/retriveallmessagesslice/retriveallmessagesslice';
import { fetchAsyncBlogMessages } from '../../../../../states/retriveblogmessagesslice/retriveblogmessagesslice';
import { DeleteAskAsynch } from '../../../../../states/deleteaskslice/deleteAskSlice';
import { PostSubmissionAsynch } from '../../../../../states/submissionslice/approveSubmissionSlice';
import { AnswerAsynch } from '../../../../../states/answerslice/answerSlice';

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
  const {
    postId, postType, userId, isAll,
  } = props;
  // States
  const [deleteState, setDelete] = useState(false);
  const [PostState, setPost] = useState(false);
  const [AnswerState, setAnswer] = useState(false);
  const [AnswerText, setAnswerText] = useState('');
  const [showModel, setShowModel] = useState(false);
  // reducers & states
  const dispatch = useDispatch();
  function handlePost() {
    // here i will post the submit then dispatch
    dispatch(PostSubmissionAsynch(postId));
    if (isAll) {
      dispatch(fetchAsyncAllMessages());
    } else {
      dispatch(fetchAsyncBlogMessages(userId));
    }

    setPost(false);
    setShowModel(false);
  }
  function handleAnswer() {
    // here i will post the Answer then dispatch
    const body = '<div><p>' + AnswerText + '</p></div>';
    const today = new Date();
    const datee = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const date = datee + ' ' + time;
    const statue = 'published';
    const type = 'answer';
    dispatch(AnswerAsynch({
      body, date, postId, statue, type,
    }));

    if (isAll) {
      dispatch(fetchAsyncAllMessages());
    } else {
      dispatch(fetchAsyncBlogMessages(userId));
    }
    setAnswer(false);
    setShowModel(false);
  }

  const handleDelete = function DeletePost() {
    if (postType === 'ask') {
      dispatch(DeleteAskAsynch(postId));
      if (!isAll) {
        dispatch(fetchAsyncBlogMessages(userId));
      } else {
        dispatch(fetchAsyncAllMessages());
      }
    } else {
      dispatch(DeleteSubmitAsynch(postId));
      if (!isAll) {
        dispatch(fetchAsyncBlogMessages(userId));
      } else {
        dispatch(fetchAsyncAllMessages());
      }
    }
    setDelete(false);
    setShowModel(false);
  };

  return (
    <>

      <div className="postActions">

        <IconButton
          aria-label="Delete"
          className="action"
          onClick={() => { setDelete(true); setShowModel(true); }}
        >
          <DeleteOutlineIcon style={{ fontSize: 25 }} />
        </IconButton>

        {postType === 'ask' && (
          <IconButton
            aria-label="Answer"
            className="action"
            size="small"
            onClick={() => { setAnswer(true); setShowModel(true); }}
          >
            Answer
          </IconButton>
        )}
        {postType === 'submission' && (
          <IconButton
            aria-label="Answer"
            className="action"
            onClick={() => { setPost(true); setShowModel(true); }}
            size="small"
          >
            Post
          </IconButton>
        )}

        {showModel && deleteState && (
          <Modal
            open={showModel}
            onClose={() => {
              setShowModel(false);
              setDelete(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ color: 'white', fontSize: '200' }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure you want to delete this post
              </Typography>
              <Button onClick={() => handleDelete()}>ok</Button>
              <Button color="error" onClick={() => { setDelete(false); setShowModel(false); }}> cancel</Button>
            </Box>
          </Modal>
        )}
        {showModel && PostState && (
          <Modal
            open={showModel}
            onClose={() => {
              setShowModel(false);
              setPost(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ color: 'white', fontSize: '200' }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Publish this post now?
              </Typography>
              <Button onClick={() => handlePost()}>Post</Button>
              <Button color="error" onClick={() => { setShowModel(false); setPost(false); }}> cancel</Button>
            </Box>
          </Modal>
        )}
        {showModel && AnswerState && (
          <Modal
            open={showModel}
            onClose={() => {
              setShowModel(false);
              setAnswer(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ color: 'white!important', fontSize: '200' }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Write your answer!
              </Typography>
              <textarea className="answer-text" onChange={(e) => setAnswerText(e.target.value)} />
              <Button onClick={() => handleAnswer()}>Answer</Button>
              <Button color="error" onClick={() => { setShowModel(false); setAnswer(false); }}> Close</Button>
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
  postType: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  isAll: PropTypes.bool.isRequired,

};
