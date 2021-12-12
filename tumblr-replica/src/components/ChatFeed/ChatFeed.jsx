// import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
// import ListItemText from '@material-ui/core/ListItemText';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import FriendChatFeed from './subcomponents/FriendChatFeed';
import MyChatFeed from './subcomponents/MyChatFeed';
import User from '../../LogedInUser/DemoUser';
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
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
function ChatFeed({ id, messages }) {
  // const classes = useStyles();
  const [friendImgS, setFriendImg] = useState('');
  const [friendName, setFriendName] = useState('');
  const myFriends = useSelector((state) => state.Chat.chats);

  useEffect(() => {
    const friend = myFriends.filter((elem) => elem.id === id);
    setFriendImg(friend[0].img);
    setFriendName(friend[0].to);
  }, []);

  return (
    <Box style={{
      width: '100%', overflow: 'auto', overflowY: 'scroll', maxHeight: '260px', height: '260px', padding: '10px 0 0 0', backgroundColor: 'white',
    }}
    >
      <Box style={{ textAlign: 'center' }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar sx={{ height: '30px', width: '30px' }} alt="Remy Sharp" src={friendImgS} />
        </StyledBadge>
        <Typography
          variant="body2"
          style={{ fontWeight: 'bold' }}
        >
          {friendName}
        </Typography>
        <Typography
          variant="body2"
          style={{ color: '#c0c0c0', textAlign: 'center', margin: '10px 0' }}
        >
          Matuals for less than year
        </Typography>
      </Box>
      <Box style={{ padding: '10px 5px 0 10px' }}>
        {messages.map((value) => (value.from === User.name
          ? <MyChatFeed id={id} value={value} />
          : <FriendChatFeed id={id} value={value} />))}
      </Box>
    </Box>
  );
}

export default ChatFeed;

ChatFeed.propTypes = {
  id: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
