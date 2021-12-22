import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getAllfollowtags, unfollowtag, followtag } from '../../states/features/followtags/followtagsSlice';
import {
  AddAsyncfollowtags, DeleteAsyncfollowtags,
} from '../../states/features/tag/tagSlice';
/**
 * Component that pop up when click Edit in {@Link FollowingList}
 *here can edit the tags blog follow
 * @component
 * @name
 * EditPopup
 * @example
 * return (
 *   <EditPopup />
 * )
 */

export default function EditPopup() {
  const followtags = useSelector(getAllfollowtags);
  const dispatch = useDispatch();
  const unfollowtagcard = (tagdis) => {
    dispatch(unfollowtag(tagdis));
    dispatch(DeleteAsyncfollowtags(tagdis));
  };
  const followtagcard = (tagdis) => {
    dispatch(followtag(tagdis));
    dispatch(AddAsyncfollowtags(tagdis));
  };
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
          <ListItem key={item.tag_description}>
            <ListItemText primary={`#${item.tag_description}`} />
            { item.follow
              ? (<Button variant="outlined" color="secondary" sx={{ textTransform: 'none' }} onClick={() => unfollowtagcard(item.tag_description)}>Unfollow</Button>)
              : (<Button variant="contained" sx={{ textTransform: 'none' }} onClick={() => followtagcard(item.tag_description)}>Follow</Button>) }

          </ListItem>
        ))}
      </ul>
    </List>
  );
}
