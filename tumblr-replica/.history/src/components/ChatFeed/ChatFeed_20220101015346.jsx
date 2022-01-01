// import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
// import ListItemText from '@material-ui/core/ListItemText';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
// import FriendChatFeed from './subcomponents/FriendChatFeed';
import MyChatFeed from './subcomponents/MyChatFeed';
import { selectUser } from '../../states/User/UserSlice';
import './css/ChatFeed.css';

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
 * Component for render the part that contain inf
 *
 * @component
 * @name
 * MyChatFeed
 * @param {string} from  the name of the chat participant
 * @param {string} img   teh img of the chat participant
 * @param {string} text message if it is text
 * @param {string} photo message if it is photo
 * @example
 * return (
 *   <MyChatFeed />
 * )
 */
function updateScroll() {
  const element = document.getElementById('chatscroll');
  element.scrollTop = element.scrollHeight;
}
function ChatFeed({ friendName, img, showImg }) {
  const chatFeed = useSelector((state) => state.Chat.chatfeed);
  console.log(chatFeed);
  const User = useSelector(selectUser);
  useEffect(() => {
    updateScroll();
  }, []);

  return (
    <Box
      id="chatscroll"
      className={showImg ? 'chatscrollp' : 'chatscrollnotp'}
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
        {chatFeed.map((value) => (
          <MyChatFeed
            from={value?.blog_id === User.primaryBlogId ? User.blogName : value?.blog_username}
            img={value?.blog_id === User.primaryBlogId
              ? User.primaryBlogAvatar : value?.blog_avatar}
            photo={value?.photo}
            text={value?.text}
            gif={value?.gif}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ChatFeed;
