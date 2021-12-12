// import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
/*
const useStyles = makeStyles({
  messageArea: {
    height: '50vh',
    width: '100%',
    overflowY: 'auto',
  },
  Myimg: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    margin: '2px 2px',
  },
  friendImg: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    margin: '2px',
    marginLeft: '82%',
  },
  myBox: {
    marginLeft: '15%',
  },
  friendBox: {
    marginRight: '10%',
    marginLeft: '2%',
  },
});
*/
function FriendChatFeed({ id, value }) {
  // const classes = useStyles();
  const [friendImgS, setFriendImg] = useState('');
  const [friendName, setFriendName] = useState('');
  const myFriends = useSelector((state) => state.Chat.chats);

  useEffect(() => {
    const friend = myFriends.filter((elem) => elem.id === id);
    console.log(myFriends);
    console.log(friend);
    setFriendImg(friend[0].img);
    setFriendName(friend[0].to);
  }, []);

  return (
    <Box style={{ display: 'flex' }}>
      <Box>
        <Typography style={{ fontSize: '13px', fontWeight: '200' }}>
          {value.text}
        </Typography>
        {value.photo ? (
          <>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {friendName}
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
              src={value.photo}
            />
          </>
        ) : null}
        {value.gif ? (
          <>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {friendName}
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
              src={value.gif}
            />
          </>
        ) : null}
      </Box>
      <Box>
        <img
          alt="Not found"
          src={friendImgS}
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
  id: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object.isRequired,
};
