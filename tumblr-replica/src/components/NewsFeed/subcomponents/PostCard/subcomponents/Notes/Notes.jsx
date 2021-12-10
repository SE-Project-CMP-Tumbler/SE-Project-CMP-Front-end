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
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import NoteBox from './subcomponents/NoteBox';
import NoteHeader from './subcomponents/NotesHeader';
import NoteList from './subcomponents/NoteList';
import { Display } from '../../../../../../states/displayNotesList';
import { DisplayNote, HideNote } from '../../../../../../states/NotesWindow';
import { SetNotes } from '../../../../../../states/PostNotes';
/**
 * This function displays notes of a post and can switch between Re-blogs & replies content
 * and the list of people who have interacted with that post
 * @returns the popover that contains note info
 */
const Notes = function NotesPopover(props) {
  const { postId } = props;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  // States
  const [reply, setReply] = useState('');
  const { showNoteList } = useSelector((state) => state.displayNotesList);
  const { likes, replies, reblogs } = useSelector((state) => state.PostNotes);

  // variables
  const apiBaseUrl = 'http://localhost:8000';

  // reducers & states
  const { showen } = useSelector((state) => state.NoteWindow);
  const dispatch = useDispatch();

  const getNotes = function GetNotesList() {
    Axios({
      method: 'GET',
      url: `${apiBaseUrl}/post_notes/${postId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        dispatch(
          SetNotes(
            {
              likes: res.data.note.likes,
              replies: res.data.note.replies,
              reblogs: res.data.note.reblogs,
            },
          ),
        );
      })
      .catch((err) => {
        console.log("Can't get notes of post : ", err);
      });
  };
  const handleClick = function ShowNotesList(event) {
    getNotes();
    dispatch(DisplayNote(event.currentTarget));
  };

  useEffect(() => {
    getNotes();
  }, []);
  const handleClose = function HideNotesList() {
    dispatch(HideNote());
  };

  const handleReply = function AddReply(event) {
    Axios({
      method: 'POST',
      url: `${apiBaseUrl}/reply`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        reply_text: reply,
        post_id: event.currentTarget.key,
      },
    })
      .then(() => {
        setReply('');
      })
      .catch(() => {
      });
  };

  const open = Boolean(showen);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      { likes.length + replies.length + reblogs.length
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
            anchorEl={showen}
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
                dispatch(Display((event.currentTarget)));
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
            <Grid container direction="row" fullWidth>
              <Grid item>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  placeholder="Have something to say ?"
                  value={reply}
                  onChange={(e) => {
                    setReply(e.currentTarget.value);
                  }}
                  autoComplete="false"
                />
              </Grid>
              <Grid item>
                <Button color="primary" index={postId} onClick={(event) => handleReply(event)}>
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
};
