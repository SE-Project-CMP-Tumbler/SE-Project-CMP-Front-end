import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Popover } from '@mui/material';
import Link from '@mui/material/Link';
import { Modal } from '@material-ui/core';
import { Box } from '@mui/system';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { deleteMessages } from '../../../slices/chatmodule/chatmoduleAPI';
import { block } from '../../../slices/followerspage/followerspageAPI';
import '../css/ChatTopBar.css';

import {
  removeChatBoxIDOnly,
  removeChatBoxID,
} from '../../../slices/chatmodule/chatmoduleSlice';
import { selectUser } from '../../../states/User/UserSlice';

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
function ChatTopBar({
  friendName, id, chatRoomId,
}) {
  const [morehorpress, morehorPressHandle] = useState(false);
  const dispatch = useDispatch();
  const User = useSelector(selectUser);
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteConvS, deleteConv] = useState(false);
  const [blockConvS, blockConv] = useState(false);

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
    dispatch(deleteMessages({ chatRoomId, User }));
  };
  useEffect(() => {
  }, []);
  return (
    <div className="top-bar1">
      <div style={{ ZIndex: 101;}}>
        <Box className="chat-participant">
          <Typography noWrap>
            <Link
              style={{
                textDecoration: 'none', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500',
              }}
              color="inherit"
              href="/"
            >
              {User.blogName}
            </Link>
            +
            <Link
              className="par-name"
              color="inherit"
              href="/"
              style={{
                textDecoration: 'none', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500',
              }}
            >
              {friendName}
            </Link>
          </Typography>
        </Box>
        <Box className="chat-buttons">
          <button className="top-bar-icons" type="button" onClick={handleMoreOpenClick}>
            <svg viewBox="0 0 17.5 3.9" width="18" height="12" fill="#ffffff">
              <path d="M17.5 1.9c0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9S14.5 0 15.6 0c1 0 1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 1.9-1.9 1.9-1.1.1-2-.8-2-1.9 0-1 .9-1.9 2-1.9s1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 2-2 2-1 0-1.9-.9-1.9-2S.9 0 1.9 0c1.1 0 2 .9 2 1.9" />
            </svg>
          </button>
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
                        variant="h4"
                        component="h4"
                        style={{ textAlign: 'center' }}
                      >
                        Permanently delete this conversation?
                      </Typography>
                      <Stack spacing={2} direction="row" sx={{ paddingTop: '20px' }}>
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
                        variant="h5"
                        component="h5"
                        style={{ textAlign: 'center' }}
                      >
                        Are you sure you want to block
                        {' '}
                        {friendName}
                        {' '}
                        from
                        {User.blogName}
                        ?
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h6"
                        style={{ textAlign: 'center' }}
                      >
                        They will not be able to follow
                        {' '}
                        {friendName}
                        {' '}
                        , send
                        {' '}
                        {friendName}
                        {' '}
                        messages, see
                        {' '}
                        {friendName}
                        {' '}
                        in search
                        results, or interact with any of
                        {' '}
                        {friendName}
                        {' '}
                        posts.
                      </Typography>
                      <Stack spacing={2} direction="row" sx={{ paddingTop: '20px' }}>
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
                          onClick={() => { dispatch(block(id)); }}
                        >
                          Block
                        </Button>
                      </Stack>
                    </Box>
                  </Modal>
                  Block
                  {' '}
                  {friendName}
                </MenuItem>
              </MenuList>
            </Popover>
          ) : null}
          <Box style={{ width: '20px', height: '20px' }}>
            <button className="top-bar-icons" type="button" onClick={() => dispatch(removeChatBoxID())}>
              <svg className="minimize-icon" viewBox="0 0 20 17" width="16" height="12" fill="#ffffff">
                <path d="M5.7 10.009l4.8 4.527c.2.2.2.603 0 .804L9 16.85c-.2.2-.6.2-.8 0L0 8.901v-.804L8.2.15c.2-.201.6-.201.8 0l1.5 1.509c.2.2.2.603 0 .804L5.7 6.991h13.4s.9.905.9 1.006v.905l-1 1.107H5.7z" />
              </svg>
            </button>
          </Box>
          <Box>
            <button className="top-bar-icons" type="button" onClick={() => dispatch(removeChatBoxIDOnly())}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="#ffffff">
                <path d="M14 2.8L11.2 0 7 4.2 2.8 0 0 2.8 4.2 7 0 11.2 2.8 14 7 9.8l4.2 4.2 2.8-2.8L9.8 7 14 2.8z" />
              </svg>
            </button>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default ChatTopBar;

ChatTopBar.propTypes = {
  id: PropTypes.number.isRequired,
  friendName: PropTypes.string.isRequired,
  chatRoomId: PropTypes.number.isRequired,
};
