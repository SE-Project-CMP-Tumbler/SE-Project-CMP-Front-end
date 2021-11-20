import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getTaginfo, fetchAsynctag } from '../../states/features/tag/tagSlice';
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
  // console.log(taginfo);
  return (
    <Card sx={{ maxWidth: 345 }} style={cardColor}>
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
              <Button variant={taginfo.response.followed ? 'outlined' : 'contained'} size="large" style={buttonst}>{taginfo.response.followed ? 'unFollow' : 'Follow'}</Button>
              <Button variant="contained" size="large" style={buttonst}>New post</Button>
            </CardActions>
          </div>
        )
        : (<h3>{ taginfo.meta.msg }</h3>)}
    </Card>
  );
}