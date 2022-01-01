import { useDispatch } from 'react-redux';
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
import '../../../index.css';
import '../css/ChatTopBarResp.css';
import { deleteMessages } from '../../../slices/chatmodule/chatmoduleAPI';

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

/**
 * Component for render the the top bar in the Responsive view of the chat component
 *
 * @component
 * @name
 * ChatTopBarResp
 * @param {string} friendName  name of chat participant
 * @param {number} id  id of chat participant
 * @example
 * return (
 *   <ChatTopBarResp />
 * )
 */
function ChatTopBarResp({ friendName, id }) {
  const [morehorpress, morehorPressHandle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteConvS, deleteConv] = useState(false);
  const [blockConvS, blockConv] = useState(false);

  const dispatch = useDispatch();

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
    dispatch(deleteMessages(id));
  };
  useEffect(() => {
  }, []);
  return (
    <Box className="top-bar">
      <Box>
        <a href="/messaging/nadeen-dondon">
          <svg viewBox="0 0 13 20.1" width="20" height="20" fill="#ffffff" className="back-icon">
            <path d="M0 2.9l7.2 7.2-7.1 7.1L3 20.1l7.1-7.1 2.9-2.9L2.9 0 0 2.9" />
          </svg>
        </a>
      </Box>
      <Box className="chat-participant">
        <Typography noWrap>
          <Link
            style={{
              textDecoration: 'none', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500',
            }}
            color="inherit"
            href="/"
          >
            nadeen
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
                      nadeen-dondon?
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
      </Box>
    </Box>
  );
}

export default ChatTopBarResp;

ChatTopBarResp.propTypes = {
  id: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
};
