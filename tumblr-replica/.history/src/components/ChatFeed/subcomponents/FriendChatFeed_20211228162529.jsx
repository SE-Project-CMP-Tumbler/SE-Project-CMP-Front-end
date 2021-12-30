// import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';

function FriendChatFeed({
  from, text, photo, gif, img,
}) {
  // const classes = useStyles();

  useEffect(() => {
  }, []);

  return (
    <Box style={{ display: 'flex', margin: '5px 0px' }}>
      <Box style={{ width: '80%', padding: '10px 0px 0px 0px', backgroundColor: 'white', borderRadius: '5px', }}>
        <Typography style={{
          fontSize: '13px', fontWeight: '200', display: 'block', wordWrap: 'break-word',
        }}
        >
          {text}
        </Typography>
        {photo ? (
          <>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {from}
              {' '}
              sent a post
            </Typography>
            <img
              alt="Not found"
              style={{
                height: '100px',
                width: '75%',
                borderRadius: '10px',
                margin: '10px',
              }}
              src={photo}
            />
          </>
        ) : null}
        {gif ? (
          <>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {from}
              {' '}
              sent a post
            </Typography>
            <img
              alt="Not found"
              style={{
                height: '100px',
                width: '100%',
                borderRadius: '10px',
                margin: '10px',
              }}
              src={gif}
            />
          </>
        ) : null}
      </Box>
      <Box>
        <img
          alt="Not found"
          src={img}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            margin: '0 0 10px 15px',
          }}
        />
      </Box>
    </Box>
  );
}

export default FriendChatFeed;

FriendChatFeed.propTypes = {
  from: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
