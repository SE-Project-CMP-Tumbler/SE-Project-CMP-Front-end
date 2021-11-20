import React from 'react';
import Typography from '@mui/material/Typography';
import '../Styles/notes.css';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../Styles/post.css';
import { useSelector } from 'react-redux';

const NoteList = function AllNotesList() {
  const { likes, reblogs } = useSelector((state) => state.PostNotes);
  return (
    <Grid container direction="coloumn">
      {
        likes.map((e) => (
          <Grid direction="row" container>
            (
            <Grid item sx={{ pl: 0.5, pt: 0.5 }}>
              <Badge
                key={e.id}
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={(
                  <RepeatIcon
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: '#00cc33',
                      fill: 'white',
                      borderRadius: '50%',
                    }}
                  />
                )}
              >
                <Avatar src={e.blog_avatar} sx={{ width: 20, height: 20 }} alt="Travis Howard" />
              </Badge>
              <Grid item>
                <Typography sx={{ pl: 2, pt: 1 }}>hello</Typography>
              </Grid>
            </Grid>
            )
          </Grid>
        ))
    }
      {
        reblogs.map((e) => (
          <Grid direction="row" container>
            <Grid item sx={{ pl: 0.5, pt: 0.5 }}>
              <Badge
                key={e.id}
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  (
                    <FavoriteIcon
                      sx={{
                        width: 12,
                        height: 12,
                        bgcolor: '#ff3333',
                        fill: 'white',
                        borderRadius: '50%',
                      }}
                    />
                  )
                }
                cursor="pointer"
              >
                <Avatar cursor="pointer" src={e.blog_avatar} sx={{ width: 24, height: 24 }} alt="Travis Howard" />
              </Badge>
              <Grid item>
                <Typography sx={{ pl: 2, pt: 1 }}> hello</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default NoteList;
