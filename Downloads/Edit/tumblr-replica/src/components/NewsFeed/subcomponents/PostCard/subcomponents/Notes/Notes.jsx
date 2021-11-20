import { React, useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './css/Notes.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import NoteBox from './subcomponents/NoteBox';
import NoteHeader from './subcomponents/NotesHeader';
import NoteList from './subcomponents/NoteList';
import { Display, Hide } from '../../../../../../state/displayNotesList';
import { DisplayNote, HideNote } from '../../../../../../state/NotesWindow';

const Notes = function NotesPopover() {
  // const [anchorEl, setAnchorEl] = useState(props.showNotes);

  // States
  const [reply, setReply] = useState('');
  const { showNoteList } = useSelector((state) => state.displayNotesList);

  // variables
  const apiBaseUrl = 'http://localhost:8008';

  // reducers & states
  const { likes, reblogs } = useSelector((state) => state.PostNotes);
  const { showen } = useSelector((state) => state.NoteWindow);
  const dispatch = useDispatch();

  const handleClick = function ShowNotesList(event) {
    // setAnchorEl(event.currentTarget);
    dispatch(DisplayNote(event.currentTarget));
    dispatch(Hide());
  };

  const handleClose = function HideNotesList() {
    dispatch(HideNote());
  };

  const handleReply = function AddReply() {
    Axios({
      method: 'POST',
      url: `${apiBaseUrl}/reply`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        reply_text: reply,
      },
    })
      .then(() => {
        // console.log('hello from handleReply');
        setReply('');
      })
      .catch(() => {
        // console.log('Failed to add reply due to : ', err);
      });
  };

  const open = Boolean(showen);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <button
        type="button"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        className="notebutton"
      >
        notes number
      </button>
      <Grid container direction="coloumn">
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
            style: { width: '22%' },
          }}
        >
          <NoteHeader />
          <button
            type="button"
            style={{ border: 'none', cursor: 'pointer', background: '#ffffff' }}
            onClick={() => {
              dispatch(Display());
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
            {!showNoteList && <NoteBox />}
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
                  onChange={(e) => setReply(e.currentTarget.value)}
                  autoComplete="false"
                />
              </Grid>
              <Grid item>
                <Button color="primary" onClick={() => handleReply()}>
                  Reply
                </Button>
              </Grid>
            </Grid>
          )}
        </Popover>
      </Grid>
    </>
  );
};

export default Notes;
