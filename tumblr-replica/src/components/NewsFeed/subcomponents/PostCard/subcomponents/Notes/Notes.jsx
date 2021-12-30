import { React, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './css/Notes.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import NoteBox from './subcomponents/NoteBox';
import NoteHeader from './subcomponents/NotesHeader';
import NoteList from './subcomponents/NoteList';
import fetchNotes from '../../../../../../states/features/dashboard/NotesAPI';
import AddReply from '../../../../../../states/features/dashboard/replyAPI';
import { selectUser } from '../../../../../../states/User/UserSlice';

/**
 * This function displays notes of a post and can switch between Re-blogs & replies content
 * and the list of people who have interacted with that post
 * @returns the popover that contains note info
 */
const Notes = function NotesPopover(props) {
  const { postId, showNotes, setShowNotes } = props;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });
  // States
  const [reply, setReply] = useState('');
  const [likes, setLikes] = useState([]);
  const [replies, setReplies] = useState([]);
  const [reblogs, setReblogs] = useState([]);
  const { showNoteList } = useSelector((state) => state.displayNotesList);
  // eslint-disable-next-line no-unused-vars
  const [pid, setpid] = useState(postId);
  // reducers & states
  const User = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = function ShowNotesList(event) {
    setShowNotes(event.currentTarget);
  };

  useEffect(() => {
    fetchNotes(postId, setLikes, setReplies, setReblogs);
  }, [showNotes]);
  const handleClose = function HideNotesList() {
    setShowNotes(null);
  };

  const handleReply = function Reply() {
    console.log(postId);
    dispatch(AddReply({ postID: postId, reply_text: reply, User }));
    setReply('');
  };

  const open = Boolean(showNotes);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      { (likes.length + replies.length + reblogs.length) > 0
        && (
        <button
          type="button"
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
          className="notebutton"
        >
          { likes.length + replies.length + reblogs.length }
          { ' ' }
          { (likes.length + replies.length + reblogs.length) > 1 ? 'notes' : 'note' }
        </button>
        )}
      <Grid container>
        <Grid item>
          <Popover
            id={id}
            open={open}
            anchorEl={showNotes}
            onClose={() => handleClose()}
            style={{ display: 'inline-block' }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            PaperProps={{
              style: { width: isTabletOrMobile ? '100%' : '22%', height: isTabletOrMobile && '100hv' },
            }}
          >
            <NoteHeader num={likes.length + replies.length + reblogs.length} />
            <button
              type="button"
              style={{ border: 'none', cursor: 'pointer', background: '#ffffff' }}
              onClick={(event) => {
                setShowNotes(event.currentTarget);
              }}
            >
              <Typography
                sx={{ pt: 0.5, pl: 1 }}
                variant="subtitle2"
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#0b0e0e',
                }}
              >
                {' '}
                {likes.length}
                {' '}
                {likes.length > 1 ? 'likes' : 'like'}
                {' '}
                and
                {' '}
                {reblogs.length}
                {' '}
                {reblogs.length > 1 ? 'reblogs' : 'reblog'}
              </Typography>
            </button>
            <Divider />
            <Paper
              style={{ height: 300, background: '#f0f0f0', overflowY: 'scroll' }}
            >
              {!showNoteList
            && (
            <NoteBox
              postID={postId}
              likes={likes}
              replies={replies}
              reblogs={reblogs}
            />
            )}
              {showNoteList && <NoteList />}
            </Paper>
            {!showNoteList && (
            <Grid container direction="row">
              <Grid item xs={10}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  placeholder="Have something to say ?"
                  multiline
                  value={reply}
                  onChange={(e) => {
                    setReply(e.currentTarget.value);
                  }}
                  autoComplete="false"
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  color="primary"
                  index={postId}
                  onClick={(event) => {
                    handleReply(event);
                  }}
                >
                  Reply
                </Button>
              </Grid>
            </Grid>
            )}
          </Popover>
        </Grid>
      </Grid>
    </>
  );
};

export default Notes;
Notes.propTypes = {
  postId: PropTypes.number.isRequired,
  showNotes: PropTypes.instanceOf(Object).isRequired,
  setShowNotes: PropTypes.func.isRequired,
};
