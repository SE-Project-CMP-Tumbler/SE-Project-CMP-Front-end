import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getAllfollowtags, DeleteAsyncfollowtags } from '../../states/features/followtags/followtagsSlice';
// import ListSubheader from '@mui/material/ListSubheader';

export default function EditPopup() {
  const followtags = useSelector(getAllfollowtags);
  const dispatch = useDispatch();
  return (
    <List
      sx={{
        width: '100%',
        minWidth: 500,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 250,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      <ul>
        { followtags.response.tags.map((item) => (
          <ListItem key={`${item.tag_description}`}>
            <ListItemText primary={`#${item.tag_description}`} />
            <Button variant="outlined" color="secondary" sx={{ textTransform: 'none' }} onClick={() => dispatch(DeleteAsyncfollowtags(item.tag_description))}>Unfollow</Button>
          </ListItem>
        ))}
      </ul>
    </List>
  );
}
