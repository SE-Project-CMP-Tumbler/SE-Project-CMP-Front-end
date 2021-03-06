import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { followtag, unfollowtag } from '../../states/features/randomtag/randomtagSlice';
import {
  AddAsyncfollowtags, DeleteAsyncfollowtags,
} from '../../states/features/tag/tagSlice';

/**
 * Component for render tag with its name and two images and the blog can follow that tag
 * that use in {@link CarouselCards}
 * @component
 * @name
 * FollowCard
 * @example
 * return (
 *   <FollowCard image1="book1.com" image2="book2.com" tag="book" />
 * )
 */

export default function FollowCard({
  image1, image2, tag, follow, randomcolor,
}) {
  // const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const button = {
    backgroundColor: 'white',
    color: randomcolor,
    width: '100%',
    marginTop: '10px',
  };
  const white = {
    color: 'white',
    marginBottom: '5px',
  };
  const linkst = { textDecoration: 'none' };
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
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
          width: 120,
          height: 175,
          p: 1,
        },
      }}
    >
      <Paper style={{ backgroundColor: randomcolor, margin: 'auto' }} elevation={3}>
        <Link to={`/tagged/${tag}`} style={linkst}>
          <div style={white}>
            #
            {tag}
          </div>
          <ImageList
            sx={{
              width: 120,
              height: 100,
              borderRadius: 1,
              overflowY: 'clip',
            }}
            gap={15}
          >
            <ImageListItem>
              <img
                src={image1}
                alt={image1}
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={image2}
                alt={image2}
              />
            </ImageListItem>
          </ImageList>
        </Link>
        {follow
          ? (<Button style={button} onClick={() => unfollowtagcard(tag)} variant="contained">Unfollow</Button>)
          : (<Button style={button} onClick={() => followtagcard(tag)} variant="contained">Follow</Button>)}
      </Paper>
    </Box>
  );
}

FollowCard.propTypes = {
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  follow: PropTypes.bool.isRequired,
  randomcolor: PropTypes.string.isRequired,
};
