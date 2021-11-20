import { React, useState } from 'react';
import Typography from '@mui/material/Typography';
import '../Styles/notes.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import RepeatIcon from '@mui/icons-material/Repeat';
import Axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../Styles/post.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import LoggedIn from './Login';

const NoteBox = function NoteBox() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const apiBaseUrl = 'http://localhost:8008';

  const handleClick = function ShowPopover(event) {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = function ClosePopover() {
    setAnchorEl(null);
  };

  const handleDelete = function DeleteReply() {
    Axios({
      method: 'DELETE',
      url: `${apiBaseUrl}/follow_blogs/id`, //    !!! TO BE EDITED !!!    //
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("Can't Unfollow due to : ", err);
      });
  };

  const handleBlock = function BlockBlogOfNote() {
    Axios({
      method: 'DELETE',
      url: `${apiBaseUrl}/block/id`, //    !!! TO BE EDITED !!!    //
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("Can't Block due to : ", err);
      });
  };
  return (
    <>
      <Grid container direction="row" maxWidth="100%" xs={12} spacing={2} sx={{ mt: 0.5 }}>
        <Grid item sx={{ ml: 0.9 }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={(
              <RepeatIcon
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: '#00cc33',
                  fill: 'white',
                  borderRadius: '50%',
                }}
              />
            )}
          >
            <Avatar
              src="../img/heart.png"
              sx={{ width: 25, height: 25 }}
              alt="Travis Howard"
            />
          </Badge>
        </Grid>
        <Grid item style={{ height: 'inherit' }} xs={8}>
          <Card>
            <CardHeader
              sx={{
                pr: 0, pl: 1, pt: 0, pb: 0,
              }}
              action={(
                <Button
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(e) => handleClick(e)}
                >
                  <IconButton aria-label="More">
                    <MoreHorizIcon
                      sx={{
                        pr: 0, pl: 0, pt: 0, pb: 0,
                      }}
                    />
                  </IconButton>
                </Button>
              )}
              title={
                (
                  <Typography gutterBottom display="block" variant="caption"> Note owner name</Typography>
                )
               }
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose()}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem>props.post_date</MenuItem>
              <Divider />
              {LoggedIn.blog_id === 2 && (
                <MenuItem
                  onClick={() => handleDelete()}
                  style={{ color: 'red' }}
                >
                  Delete reply
                </MenuItem>
              )}
              {LoggedIn.blog_id !== 2 && (
                <MenuItem
                  onClick={() => handleBlock()}
                  style={{ color: 'red' }}
                >
                  Block
                </MenuItem>
              )}
              <MenuItem onClick={() => handleClose()}>Close</MenuItem>
            </Menu>
            <CardContent
              sx={{
                pr: 0, pl: 1, pt: 0, pb: 0,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                <Box sx={{ fontWeight: 500 }}>Medium</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default NoteBox;
