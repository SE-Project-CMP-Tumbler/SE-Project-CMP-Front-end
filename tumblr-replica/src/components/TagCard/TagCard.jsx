import * as React from 'react';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTaginfo, fetchAsynctag, unfollowtag,
  followtag, AddAsyncfollowtags, DeleteAsyncfollowtags,
} from '../../states/features/tag/tagSlice';
/**
 * Component for render all information about specific tag
 *
 * @component
 * @name
 * TagCard
 * @example
 * return (
 *   <TagCard />
 * )
 */
export default function TagCard() {
  const buttonst = {
    width: '50%',
    // color: '#122943',
  };
  const cardColor = {
    backgroundColor: '#122943',
    color: 'white',
  };
  const tagDescription = window.location.href.split('/').pop();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsynctag(tagDescription));
  }, []);
  const taginfo = useSelector(getTaginfo);
  const followtagcard = (tag) => {
    dispatch(followtag());
    dispatch(AddAsyncfollowtags(tag));
  };
  const unfollowtagcard = (tag) => {
    dispatch(unfollowtag());
    dispatch(DeleteAsyncfollowtags(tag));
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 7, minHeight: 150 }} style={cardColor}>
      { taginfo.meta.status === '200'
        ? (
          <div>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={taginfo.response.tag_image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`#${taginfo.response.tag_description}`}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }} color="text.dark">
                { `${taginfo.response.followers_number}  followers` }
              </Typography>
            </CardContent>
            <CardActions>
              {
              taginfo.response.followed
                ? (<Button variant="outlined" onClick={() => unfollowtagcard(taginfo.response.tag_description)} size="large" style={buttonst}>Unfollow</Button>)
                : (<Button variant="contained" onClick={() => followtagcard(taginfo.response.tag_description)} size="large" style={buttonst}>Follow</Button>)
            }
              <Button variant="contained" size="large" style={buttonst}>New post</Button>
            </CardActions>
          </div>
        )
        : ((taginfo.error && (
          <Alert style={{ marginTop: '15%' }} severity="error">
            Component could not be loaded.
            This could be due to trouble fetching data from the backend server.
            Try switching to the mock server to see if the error persists.
          </Alert>
        ))
        || (taginfo.meta.msg === 'Loading' && <Box style={{ marginLeft: '30%' }}><ReactLoading TestId="loading" type="bars" color="#fff" width={157} /></Box>))}
    </Card>
  );
}
