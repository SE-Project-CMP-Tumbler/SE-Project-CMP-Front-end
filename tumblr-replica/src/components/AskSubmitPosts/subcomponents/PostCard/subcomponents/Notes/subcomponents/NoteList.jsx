import React from 'react';
import Typography from '@mui/material/Typography';
import '../css/Notes.css';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
/**
 * this function is responsible for displaying list of people who like/rebloged/replied
 * on a post
 * @returns the list of people
 */
const NoteList = function AllNotesList() {
  const { likes, reblogs } = useSelector((state) => state.PostNotes);
  return (
    <Grid container direction="coloumn">
      {likes.map((e) => (
        <Grid direction="row" container spacing={1} sx={{ mt: 0.5 }}>
          <Grid item>
            <Badge
              sx={{ pl: 1 }}
              key={e.id}
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={(
                <RepeatIcon
                  sx={{
                    width: 14,
                    height: 14,
                    bgcolor: '#00cc33',
                    fill: 'white',
                    borderRadius: '50%',
                  }}
                />
              )}
            >
              <Avatar
                src={e.blog_avatar}
                sx={{ width: 22, height: 22 }}
                alt="Travis Howard"
              />
            </Badge>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                pt: 0.5,
                fontWeight: 'bold',
                fontSize: 13,
                fontFamily: 'Monospace',
              }}
              gutterBottom
              display="block"
              variant="caption"
            >
              bla bla liked this post
            </Typography>
          </Grid>
        </Grid>
      ))}
      {reblogs.map((e) => (
        <Grid direction="row" container spacing={1} sx={{ mt: 0.5 }}>
          <Grid item>
            <Badge
              sx={{ pl: 1 }}
              key={e.id}
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={(
                <FavoriteIcon
                  sx={{
                    width: 14,
                    height: 14,
                    bgcolor: '#ff3333',
                    fill: 'white',
                    borderRadius: '50%',
                  }}
                />
              )}
            >
              <Avatar
                src={e.blog_avatar}
                sx={{ width: 22, height: 22 }}
                alt="Travis Howard"
              />
            </Badge>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                pt: 0.5,
                fontWeight: 'bold',
                fontSize: 13,
                fontFamily: 'Monospace',
              }}
              gutterBottom
              display="block"
              variant="caption"
            >
              bla bla liked this post
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default NoteList;
