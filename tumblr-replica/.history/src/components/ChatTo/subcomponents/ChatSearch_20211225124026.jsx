import React, { useState } from 'react';
import {
  Typography,
  ListItem,
} from '@material-ui/core';
import { Box } from '@mui/system';
import '../../ChatListResp/css/ChatNewMessageTopBar.css';

function ChatSearch() {
  const [to, setTo] = useState();
  return (
    <>
      <ListItem style={{backgroundColor: 'white'>
        <div style={{ display: 'flex', padding: '20px 5px 0 5px' }}>
          <div className="to-palceholder">
            To:
          </div>
          <input
            type="text"
            className="to-input"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          />
        </div>
      </ListItem>
      <Box
        component="div"
        sx={{
          color: 'black',
          width: '94%',
          height: '20px',
          backgroundColor: '#f5f5f5',
          padding: '10px 3%',
        }}
      >
        <Typography variant="body2" align="left" sx={{ height: '22px' }}>
          Recently Followed
        </Typography>
      </Box>
    </>
  );
}
export default ChatSearch;
