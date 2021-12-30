// import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';
import { selectUser } from '../../../states/User/UserSlice';

function MyChatFeed({
  text, photo, gif,
}) {
  const User = useSelector(selectUser);
  console.log(User.primaryBlogAvatar);
  return (
    <Box style={{ display: 'flex', margin: '5px 0px' }}>
      <Box>
        <img
          alt="../../../../public/profile.png"
          src={User.primaryBlogAvatar}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            margin: '0 15px 10px 0',
          }}
        />
      </Box>
      <Box style={{ width: '80%', padding: '10px 0px 0px 0px',back }}>
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
