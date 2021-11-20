import { React, useState } from 'react';
import Typography from '@mui/material/Typography';
import '../Styles/notes.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
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
      <Grid container direction="row" maxWidth="100%">
        <Grid item>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              (
                <RepeatIcon sx={{
                  width: 16,
                  height: 16,
                  bgcolor: '#00cc33',
                  fill: 'white',
                  borderRadius: '50%',
                }}
                />
              )
            }
          >
            <Avatar src="../img/heart.png" sx={{ width: 30, height: 30 }} alt="Travis Howard" />
          </Badge>
        </Grid>
        <Grid item style={{ height: 'inherit' }} xs={8}>
          <Box bgcolor="white" style={{ display: 'inline-block', borderRadius: '5px', height: 'auto' }} sx={{ mr: 3, ml: 3 }} maxWidth="100%">
            <Grid container direction="row">
              <Grid item sx={{ pl: 2 }}>
                <a href="https://www.google.com/?hl=en" cursor="pointer" textDecoration="none">blog</a>
              </Grid>
              <Grid item xs={10}>
                <RepeatIcon fontSize="12px" sx={{ pt: 0.5 }} />
              </Grid>
              <Grid item xs={12}>
                <div sx={{ width: 320, maxWidth: '100%' }}>
                  <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(e) => handleClick(e)}
                  >
                    <IconButton aria-label="More">
                      <MoreHorizIcon />
                    </IconButton>
                  </Button>
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
                    {(LoggedIn.blog_id === 2) && <MenuItem onClick={() => handleDelete()} style={{ color: 'red' }}>Delete reply</MenuItem>}
                    {(LoggedIn.blog_id !== 2) && <MenuItem onClick={() => handleBlock()} style={{ color: 'red' }}>Block</MenuItem>}
                    <MenuItem onClick={() => handleClose()}>Close</MenuItem>
                  </Menu>
                </div>
              </Grid>
            </Grid>
            <Typography
              sx={{
                pr: 2,
                pl: 2,
                pt: 2,
                pb: 2,
              }}
              className="NoteText"
            >
              maryem
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default NoteBox;
