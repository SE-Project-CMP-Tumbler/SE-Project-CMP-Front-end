// import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';
import { selectUser } from '../../../states/User/UserSlice';

function MyChatFeed({
  from, img, text, photo, gif,
}) {
  const User = useSelector(selectUser);
  console.log(User.primaryBlogAvatar);
  return (
    <Box style={{ display: 'flex', margin: '5px 0px' }}>
      <img
        alt="../../../../public/profile.png"
        src={img}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          margin: '0 15px 10px 0',
        }}
      />
      <Box style={{
        width: 'fitContent', maxWidth: '' padding: '15px', backgroundColor: 'white', borderRadius: '7px', paddingLeft: '5px', margin: '3px 0',
      }}
      >
        <p style={{ fontSize: '0.8em', fontWeight: '550', margin: '0px' }}>
          {from}
        </p>
        <Typography style={{ fontSize: '13px', fontWeight: '200', wordWrap: 'break-word' }}>
          {text}
        </Typography>
        {photo ? (
          <>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {User.blogName}
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
              {User.blogName}
              {' '}
              sent a post
            </Typography>
            <img
              alt="../../../../public/profile.png"
              style={{
                height: '100px',
                width: '75%',
                borderRadius: '10px',
                margin: '10px',
              }}
              src={gif}
            />
          </>
        ) : null}
      </Box>
    </Box>
  );
}

export default MyChatFeed;

MyChatFeed.propTypes = {
  gif: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
