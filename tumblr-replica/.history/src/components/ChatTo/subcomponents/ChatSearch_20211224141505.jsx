import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import {
  Typography,
  ListItem,
  TextField,
} from '@material-ui/core';
import { Box } from '@mui/system';

function ChatSearch() {
  return (
    <>
      <ListItem>
        <TextField
          id="standard-basic"
          label="To:"
          variant="standard"
          fullWidth
          InputProps={{ disableUnderline: true }}
        />
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
