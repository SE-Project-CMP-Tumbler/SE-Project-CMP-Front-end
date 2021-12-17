import { React, useState } from 'react';
import Typography from '@mui/material/Typography';
import '../css/Notes.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { FaComment } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import RepeatIcon from '@mui/icons-material/Repeat';
import Axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import LoggedIn from '../../../../../../Login/Login';

/**
 * This function is focused on creating the notes content on a post which includes profile picture
 * of the blog and badge of type of interactions they've done and the content of their note.
 * @returns A list of notes on a post
 */
const NoteBox = function NoteBox(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const {
    postID, replies, reblogs,
  } = props;
  const open = Boolean(anchorEl);
  const apiBaseUrl = 'http://localhost:8000';

  const handleClick = function ShowPopover(event) {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = function ClosePopover() {
    setAnchorEl(null);
  };

  const handleDelete = function DeleteReply() {
    Axios({
      method: 'DELETE',
      url: `${apiBaseUrl}/follow_blogs/${postID}`, //    !!! TO BE EDITED !!!    //
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("Can't Unfollow due to : ", err);
      });
  };

  const handleBlock = function BlockBlogOfNote(id) {
    Axios({
      method: 'DELETE',
      url: `${apiBaseUrl}/block/${id}`, //    !!! TO BE EDITED !!!    //
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
      <Grid
        container
        direction="row"
        maxWidth="100%"
        xs={12}
        spacing={2}
        sx={{ mt: 0.5 }}
      >
        {
          replies.map((reply) => (
            <>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item sx={{ ml: 0.9, mr: 0 }}>
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
                <Grid item style={{ height: 'inherit' }} minWidth="auto" maxWidth="350px">
                  <Card>
                    <CardHeader
                      sx={{
                        pr: 0,
                        pl: 1,
                        pt: 0,
                        pb: 0,
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
                                pr: 0,
                                pl: 0,
                                pt: 0,
                                pb: 0,
                              }}
                            />
                          </IconButton>
                        </Button>
                    )}
                      title={(
                        <Typography gutterBottom display="block" variant="caption">
                          { reply.blog_username }
                        </Typography>
                    )}
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
                      {LoggedIn.blog_id === 2 && (
                      <MenuItem
                        onClick={() => handleDelete(reply.reply_id)}
                        style={{ color: 'red' }}
                      >
                        Delete reply
                      </MenuItem>
                      )}
                      {LoggedIn.blog_id !== 2 && (
                      <MenuItem
                        onClick={() => handleBlock(reply.blog_id)}
                        style={{ color: 'red' }}
                      >
                        Block
                      </MenuItem>
                      )}
                      <MenuItem onClick={() => handleClose()}>Close</MenuItem>
                    </Menu>
                    <CardContent
                      sx={{
                        pr: 0,
                        pl: 1,
                        pt: 0,
                        pb: 0,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        <Box sx={{ fontWeight: 500 }}>{ reply.reply_text }</Box>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          ))
        }
        {
          reblogs.map((reply) => (
            <>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item sx={{ ml: 0.9 }}>
                  <Badge
                    color="primary"
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={(
                      <FaComment
                        style={{ fontSize: '10px' }}
                        color="white"
                      />
                )}
                  >
                    <Avatar
                      sx={{ width: 25, height: 25 }}
                      alt="Travis Howard"
                      variant="square"
                    />
                  </Badge>
                </Grid>
                <Grid item style={{ height: 'inherit' }} xs={8}>
                  <Card>
                    <CardHeader
                      sx={{
                        pr: 0,
                        pl: 1,
                        pt: 0,
                        pb: 0,
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
                                pr: 0,
                                pl: 0,
                                pt: 0,
                                pb: 0,
                              }}
                            />
                          </IconButton>
                        </Button>
                    )}
                      title={(
                        <Typography gutterBottom display="block" variant="caption">
                          { reply.blog_username }
                        </Typography>
                    )}
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
                      <Divider />
                      {LoggedIn.blog_id === 2 && (
                      <MenuItem
                        onClick={() => handleDelete(reply.reply_id)}
                        style={{ color: 'red' }}
                      >
                        Delete reply
                      </MenuItem>
                      )}
                      {LoggedIn.blog_id !== 2 && (
                      <MenuItem
                        onClick={() => handleBlock(reply.blog_id)}
                        style={{ color: 'red' }}
                      >
                        Block
                      </MenuItem>
                      )}
                      <MenuItem onClick={() => handleClose()}>Close</MenuItem>
                    </Menu>
                    <CardContent
                      sx={{
                        pr: 0,
                        pl: 1,
                        pt: 0,
                        pb: 0,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        <Box sx={{ fontWeight: 500 }}>{ reply.reply_text }</Box>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          ))
        }
      </Grid>
    </>
  );
};

export default NoteBox;
NoteBox.propTypes = {
  replies: PropTypes.instanceOf(Array).isRequired,
  reblogs: PropTypes.instanceOf(Array).isRequired,
  postID: PropTypes.number.isRequired,
};
