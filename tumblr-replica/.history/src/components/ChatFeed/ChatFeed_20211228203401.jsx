// import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
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
import { selectUser } from '../../states/User/UserSlice';

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
/**
 * This function is for the ChatFeed component this component is a part of the chat component
 * this component display the messages of the two chaters
 * @method
 * @param {string} friendName  friendNam is a prop
 * for this component to know the name of the chat participant
 * @param {img} img img  is a prop that contain the img of the  chat participant
 * @returns {*} ChatFeed componenet
 */
function ChatFeed({ friendName, img }) {
  const chatFeed = useSelector((state) => state.Chat.chatfeed);
  console.log(chatFeed);
  const User = useSelector(selectUser);
  useEffect(() => {
    const element = document.getElementById('chatscroll');
    element.scrollTop = element.scrollHeight;
    console.lo
  }, []);

  return (
    <Box
      id="chatscroll"
      className="chatscroll"
      style={{
        width: '100%', overflow: 'auto', overflowY: 'scroll', maxHeight: '75%', height: '75%', padding: '10px 0 0 0', backgroundColor: '#c0e1d2',
      }}
    >
      <Box style={{ textAlign: 'center' }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar sx={{ height: '30px', width: '30px' }} alt="Remy Sharp" src={img} />
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
        {chatFeed.map((value) => (value?.blog_id === User.primaryBlogId
          ? (
            <MyChatFeed
              photo={value?.photo}
              text={value?.text}
              gif={value?.gif}
            />
          )
          : (
            <FriendChatFeed
              from={value?.blog_username}
              img={value?.blog_avatar}
              photo={value?.photo}
              text={value?.text}
              gif={value?.gif}
            />
          )))}
      </Box>
    </Box>
  );
}

export default ChatFeed;

ChatFeed.propTypes = {
  friendName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
