import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Popover } from '@mui/material';
import Link from '@mui/material/Link';
import { Modal } from '@material-ui/core';
import { Box } from '@mui/system';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import CloseIcon from '@mui/icons-material/Close';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import axios from 'axios';
import {
  removeChatBoxIDOnly,
  removeChatBoxID,
} from '../../../slices/ChatModule/ChatModule';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  color: 'white',
  bgcolor: 'transparent',
  margin: '20px',
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '50vh',
    width: '100%',
    overflowY: 'auto',
  },
  inputArea: {
    height: '12vh',
    width: '100%',
  },
  topBar: {
    backgroundColor: '#008080',
    padding: '8px',
    display: 'flex',
    width: '300px',
    height: '40px',
    borderTopLeftRadius: '4px',
    borderTopReightRadius: '4px',
    color: '#ffff',
  },
  chatButtons: {
    cursor: 'pointer',
  },
});

function ChatTopBar({ id, setMessages }) {
  const [morehorpress, morehorPressHandle] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteConvS, deleteConv] = useState(false);
  const [blockConvS, blockConv] = useState(false);
  const apiBaseUrl = 'http://localhost:8000';
  const [friendnameS, setFriendName] = useState('');
  const [friendImgS, setFriendImg] = useState('');

  const myFriends = useSelector((state) => state.Chat.chats);

  const handleMoreOpenClick = (event) => {
    // dispatch(morehorpressHandle());
    morehorPressHandle(!morehorpress);
    setAnchorEl(event.currentTarget);
  };

  const handleMoreCloseClick = () => {
    // dispatch(morehorpressHandle());
    morehorPressHandle(!morehorpress);
    setAnchorEl(null);
  };
  const DeleteConversation = () => {
    axios({
      method: 'PATCH',
      url: `${apiBaseUrl}/chatsforoneuser/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: { chat_messages: [] },
    })
      .then(() => {
        // dispatch(deleteConversation());
        setMessages([]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    const friendname = myFriends.filter((elem) => elem.id === id);
    setFriendImg(friendname[0].img);
    setFriendName(friendname[0].to);
  }, []);
  return (
    <Grid container xs={12} className={classes.topBar}>
      <Grid item xs={6} className={classes.chatParticipant}>
        <Typography noWrap>
          <Link color="inherit" href="/" style={{ textDecoration: 'none', fontFamily: 'Poppins' }}>
            nadeen
          </Link>
          +
          <Link color="inherit" href="/" style={{ textDecoration: 'none' }}>
            {friendnameS}
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.chatButtons}>
        <MoreHorizIcon
          onClick={handleMoreOpenClick}
          style={{ fill: '#fff', margin: '2px', marginLeft: '40px' }}
        />
        {morehorpress ? (
          <Popover
            open={morehorpress}
            anchorEl={anchorEl}
            onClose={handleMoreCloseClick}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <MenuList
              id="composition-menu"
              aria-labelledby="composition-button"
            >
              <MenuItem>Sound settings</MenuItem>
              <MenuItem
                onClick={() => {
                  deleteConv(!deleteConvS);
                }}
              >
                <Modal
                  open={deleteConvS}
                  onClose={() => {
                    deleteConv(!deleteConvS);
                  }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h5"
                      component="h5"
                    >
                      Are you sure you want to block maryem-salah from
                      nadeen-dondon?
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h6"
                    >
                      They will not be able to follow nadeen-dondon, send
                      nadeen-dondon messages, see nadeen-dondon in search
                      results, or interact with any of nadeen-dondon  posts.
                    </Typography>

                    <Stack spacing={2} direction="row">
                      <Button
                        variant="text"
                        style={{
                          backgroundColor: '#BEC8BB',
                          color: '#FFFFFF',
                          marginLeft: '30%',
                        }}
                      >
                        Nevermind
                      </Button>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#D12C1F', color: '#FFFFFF' }}
                        onClick={DeleteConversation}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Box>
                </Modal>
                Delete conversation
              </MenuItem>
              <MenuItem
                onClick={() => {
                  blockConv(!blockConvS);
                }}
              >
                <Modal
                  open={blockConvS}
                  onClose={() => {
                    blockConv(!blockConvS);
                  }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h4"
                      component="h4"
                    >
                      Permanently delete this conversation?
                    </Typography>
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="text"
                        style={{
                          backgroundColor: '#BEC8BB',
                          color: '#FFFFFF',
                          marginLeft: '30%',
                        }}
                      >
                        Nevermind
                      </Button>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#D12C1F', color: '#FFFFFF' }}
                      >
                        Block
                      </Button>
                    </Stack>
                  </Box>
                </Modal>
                Block maryem-salah
              </MenuItem>
            </MenuList>
          </Popover>
        ) : null}
        <SouthEastIcon
          onClick={() => dispatch(removeChatBoxID({ id, img: friendImgS }))}
          style={{ fill: '#fff', margin: '2px' }}
        />
        <CloseIcon
          onClick={() => dispatch(removeChatBoxIDOnly(id))}
          style={{ fill: '#fff', margin: '2px' }}
        />
      </Grid>
    </Grid>
  );
}

export default ChatTopBar;

ChatTopBar.propTypes = {
  id: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired,
};
