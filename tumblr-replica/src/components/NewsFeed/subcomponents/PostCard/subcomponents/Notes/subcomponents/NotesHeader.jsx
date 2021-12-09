import React from 'react';
import Typography from '@mui/material/Typography';
import '../css/Notes.css';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { Hide } from '../../../../../../../states/displayNotesList';
import { HideNote } from '../../../../../../../states/NotesWindow';

const NoteHeader = function NotesHeader() {
  const { showNoteList } = useSelector((state) => state.displayNotesList);
  const dispatch = useDispatch();
  const { likes, reblogs } = useSelector((state) => state.PostNotes);

  const handleBack = function handleBackToWhichList() {
    if (showNoteList) dispatch(Hide());
    else dispatch(HideNote());
  };
  return (
    <>
      <Grid container direction="row">
        <Grid item xs={2} sx={{ pt: 0.5 }}>
          <IconButton aria-label="back notes" onClick={() => handleBack()}>
            <ArrowBackIcon style={{ fill: 'black', fontSize: 28 }} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            pt: 2,
            pb: 2,
            pr: 7,
            pl: 7,
          }}
        >
          <Typography
            variant="subtitle2"
            fontSize="medium"
            style={{ fontWeight: 'bold' }}
          >
            {' '}
            300 notes.
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ pr: 0.5 }}>
          <IconButton aria-label="back notes">
            <Typography
              variant="subtitle2"
              style={{ fontWeight: 'bold', color: 'black', fontSize: 28 }}
            >
              #
            </Typography>
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
      <Stack
        direction="row"
        spacing={2}
        sx={{ pt: 1, pl: 1, pb: 0.5 }}
        style={{ overflow: 'hidden' }}
      >
        {likes.map((e) => (
          <Badge
            key={e.id}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={(
              <RepeatIcon
                sx={{
                  width: 15,
                  height: 15,
                  bgcolor: '#00cc33',
                  fill: 'white',
                  borderRadius: '50%',
                }}
              />
            )}
          >
            <Avatar
              src={e.blog_avatar}
              sx={{ width: 24, height: 24 }}
              alt="Travis Howard"
            />
          </Badge>
        ))}
        {reblogs.map((e) => (
          <Badge
            key={e.id}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={(
              <FavoriteIcon
                sx={{
                  fontSize: 15,
                  bgcolor: '#ff3333',
                  fill: 'white',
                  borderRadius: '50%',
                  pr: 0.05,
                  pl: 0.05,
                  pt: 0.05,
                  pb: 0.05,
                }}
              />
            )}
            cursor="pointer"
          >
            <Avatar
              cursor="pointer"
              src={e.blog_avatar}
              sx={{ width: 24, height: 24 }}
              alt="Travis Howard"
            />
          </Badge>
        ))}
      </Stack>
    </>
  );
};

export default NoteHeader;
