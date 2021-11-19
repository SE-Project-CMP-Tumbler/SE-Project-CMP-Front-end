import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function FollowCard({ image1, image2, tag }) {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const button = {
    backgroundColor: 'white',
    color: randomColor,
    width: '100%',
    marginTop: '10px',
  };
  const white = {
    color: 'white',
    marginBottom: '5px',
  };
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
          width: 120,
          height: 170,
          p: 1,
        },
      }}
    >
      <Paper style={{ backgroundColor: randomColor, margin: 'auto' }} elevation={3}>
        <div style={white}>
          #
          {tag}
        </div>
        <ImageList sx={{ width: 120, height: 100, borderRadius: 1 }} gap={15}>
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
        <Button style={button} variant="contained">Follow</Button>
      </Paper>
    </Box>
  );
}

FollowCard.propTypes = {
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
