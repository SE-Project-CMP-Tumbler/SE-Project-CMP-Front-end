import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Modal, Button, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@mui/material/Popover';
import PropTypes from 'prop-types';
import { block, unBlock } from '../../../slices/followerspage/followerspageAPI';

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
function MoreVertical({ blogusername, id }) {
  const [blockConvS, blockConv] = useState(false);
  const [modalInverter, setModalInverter] = useState(true);
  const [blockState, setBlockState] = useState('block');
  const dispatch = useDispatch();
  return (
    <IconButton aria-label="settings" edge="end">
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <MoreVertIcon {...bindTrigger(popupState)} />
            <Popover
                // eslint-disable-next-line react/jsx-props-no-spreading
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem
                onClick={() => {
                  if (blockState === 'Block') { blockConv(!blockConvS); } else {
                    dispatch(unBlock());
                    setBlockState('Block');
                  }
                }}
                style={{
                  color: 'red',
                  width: '200px',
                  justifyContent: 'center',
                }}
              >
                {blockState}
              </MenuItem>
              <Modal
                open={blockConvS}
                onClose={() => {
                  blockConv(!blockConvS);
                }}
                style={{ backgroundColor: 'rgba(6, 24, 51, 0.705)' }}
              >
                <Box sx={style}>
                  {modalInverter
                    ? (
                      <>
                        <Typography
                          id="modal-modal-title"
                          variant="h5"
                          component="h5"
                          style={{ textAlign: 'center' }}
                        >
                          Are you sure you want to block
                          {' '}
                          {blogusername}
                          from
                          nadeen-dondon?
                        </Typography>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h6"
                          style={{ textAlign: 'center' }}
                        >
                          They will not be able to follow, send
                          nadeen-dondon messages, see nadeen-dondon in search
                          results, or interact with any of nadeen-dondon  posts.
                        </Typography>

                      </>
                    )
                    : (
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h6"
                        style={{ textAlign: 'center' }}
                      >
                        {blogusername}
                        {' '}
                        has been blocked
                      </Typography>
                    )}
                  <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    {modalInverter
                      ? (
                        <>
                          <Button
                            variant="text"
                            style={{
                              backgroundColor: '#BEC8BB',
                              color: '#FFFFFF',
                              margin: '0 20px',
                              padding: '5px',
                              borderRadius: '5px',
                            }}
                            onClick={() => {
                              blockConv(!blockConvS);
                            }}
                          >
                            Nevermind
                          </Button>
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: '#D12C1F', color: '#FFFFFF', padding: '5px', borderRadius: '5px',
                            }}
                            onClick={() => {
                              dispatch(block(id));
                              setModalInverter(!modalInverter);
                              setBlockState('Unblock');
                            }}
                          >
                            Block
                          </Button>
                        </>
                      )
                      : (
                        <Button
                          variant="contained"
                          style={{ backgroundColor: 'rgb(31, 156, 156)', color: '#FFFFFF', padding: '5px' }}
                          onClick={() => {
                            blockConv(!blockConvS);
                            setModalInverter(!modalInverter);
                          }}
                        >
                          close
                        </Button>
                      )}
                  </Box>
                </Box>
              </Modal>
              <MenuItem
                onClick={popupState.close}
                style={{
                  width: '200px',
                  justifyContent: 'center',
                }}
              >
                Close
              </MenuItem>
            </Popover>
          </>
        )}
      </PopupState>
    </IconButton>
  );
}
export default MoreVertical;

MoreVertical.propTypes = {
  id: PropTypes.number.isRequired,
  blogusername: PropTypes.string.isRequired,
};
