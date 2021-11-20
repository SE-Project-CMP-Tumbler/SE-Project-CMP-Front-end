import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

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
    margin: '2px 10px',
  },
  friendImg: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    margin: '10px',
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

function ChatFeed({ id, messages }) {
  const classes = useStyles();
  const [friendImgS, setFriendImg] = useState('');
  const [friendName, setFriendName] = useState('');
  const myFriends = useSelector((state) => state.Chat.chats);

  useEffect(() => {
    const friend = myFriends.filter((elem) => elem.id === id);
    setFriendImg(friend[0].img);
    setFriendName(friend[0].to);
  }, []);

  return (
    <List className={classes.messageArea}>
      <Box>
        <img
          alt="Not found"
          style={{
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            margin: '10px',
            marginLeft: '45%',
          }}
          src={friendImgS}
        />
        <Typography
          variant="body2"
          style={{ fontWeight: 'bold', marginLeft: '40%' }}
        >
          {friendName}
        </Typography>
        <Typography
          variant="body2"
          style={{ marginLeft: '18%', color: '#c0c0c0', marginTop: '10px' }}
        >
          Matuals for less than year
        </Typography>
      </Box>
      {messages.map((value) => (
        <Grid container key={value.id}>
          <Grid item xs={12}>
            <Box>
              <img
                alt="Not found"
                className={
                  value.from === 'nadeen' ? classes.Myimg : classes.friendImg
                }
                src={value.from === 'nadeen' ? 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' : friendImgS}
              />
              <Box
                align={value.from === 'nadeen' ? 'right' : 'left'}
                className={
                  value.from === 'nadeen' ? classes.myBox : classes.friendBox
                }
              >
                <ListItemText primary={value.text} />
                {value.photo ? (
                  <>
                    <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                      nadeen-dondon sent a post
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
                      nadeen-dondon sent a post
                    </Typography>
                    <img
                      alt="Not found"
                      style={{
                        height: '100px',
                        width: '75%',
                        borderRadius: '10px',
                        margin: '10px',
                      }}
                      src={value.gif}
                    />
                  </>
                ) : null}
              </Box>
            </Box>
          </Grid>
        </Grid>
      ))}
    </List>
  );
}

export default ChatFeed;

ChatFeed.propTypes = {
  id: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
