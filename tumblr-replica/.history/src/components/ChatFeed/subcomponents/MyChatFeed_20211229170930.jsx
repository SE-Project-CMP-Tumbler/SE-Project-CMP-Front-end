// import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';
import { selectUser } from '../../../states/User/UserSlice';

function MyChatFeed({
  from, img, text = '', photo, gif,
}) {
  const User = useSelector(selectUser);
  console.log(User.primaryBlogAvatar);
  return (
    <Box style={{ display: 'flex', margin: '5px 0px' }}>
      <img
        alt=""
        src={img}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          margin: '0 15px 10px 0',
        }}
      />
      <Box className={photo ? 'message-part-p' : 'message-part-notp'}>
        <p style={{ fontSize: '0.8em', fontWeight: '550', margin: '0px' }}>
          {from}
        </p>
        {text && (
        <Typography style={{ fontSize: '13px', fontWeight: '200', wordWrap: 'break-word' }}>
          {text}
        </Typography>
        )}
        {photo && (
          <>
            <img
              alt="Not found"
              style={{
                height: '100px',
                width: '100%',
                borderRadius: '10px',
              }}
              src={photo}
            />
          </>
        ) }
        {gif && (
          <>
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
        )}
      </Box>
    </Box>
  );
}

export default MyChatFeed;

MyChatFeed.propTypes = {
  from: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
  text: PropTypes.string,
  photo: PropTypes.string,
};
