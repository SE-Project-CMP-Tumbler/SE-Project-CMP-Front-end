import { React, useEffect } from 'react';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import './css/OldChatList.css';
import {
  newMessagePress,
  removeAvaterID,
} from '../../slices/chatmodule/chatmoduleSlice';
import {
  getAllChats, getChatRoomId,
} from '../../slices/chatmodule/chatmoduleAPI';
import { selectUser } from '../../states/User/UserSlice';

/**
 * This function is for the OldChatList component this component has all friends of the user ,
 * this component should appear when the user have no chats with his friends
 * by click on the avatar the chat will open
 * @method
 * @returns {*} ChatTo componenet
 */
function OldChatList() {
  const dispatch = useDispatch();
  const User = useSelector(selectUser);
  const chatBox = useSelector((state) => state.Chat.chatbox);
  const avatars = useSelector((state) => state.Chat.avatars);
  const myFriends = useSelector((state) => state.Chat.chats);
  useEffect(() => {
    console.log('iam here');
    dispatch(getAllChats(User));
    console.log(User.id);
  }, []);
  return (
    <Card sx={{ maxWidth: 260 }}>
      <Box style={{ display: 'flex', height: '40px' }}>
        <Box style={{ textAlign: 'center', width: '50%' }}>
          <p style={{ fontSize: '0.8em', fontWeight: '550', margin: '0px' }}>
            {User.blogName}
          </p>
        </Box>
        <Box item>
          <button
            type="button"
            onClick={() => {
              dispatch(newMessagePress());
            }}
            style={{
              marginLeft: '1px',
              color: '#00bfff',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '.78125rem',
              fontWeight: '700',
              lineHeight: '1.44',
              margin: '0',
              textAlign: 'right',
            }}
          >
            New Message
          </button>
        </Box>
      </Box>
      <Divider />
      <CardContent align="center">
        <svg
          viewBox="0 0 49 49"
          width="64"
          height="64"
          fill="rgba(var(--black), 0.65)"
        >
          <path d="M24.5 49c-3.832 0-7.64-.91-11.053-2.636l-9.185 1.412a1.607 1.607 0 0 1-1.831-1.85l1.366-8.324A24.382 24.382 0 0 1 0 24.5C0 10.99 10.99 0 24.5 0S49 10.99 49 24.5 38.01 49 24.5 49zm-10.777-5.915c.263 0 .523.065.758.19A21.32 21.32 0 0 0 24.5 45.784c11.735 0 21.283-9.548 21.283-21.283 0-11.736-9.548-21.283-21.283-21.283-11.735 0-21.283 9.547-21.283 21.283a21.18 21.18 0 0 0 3.604 11.85c.228.339.318.753.252 1.156L5.964 44.26l7.514-1.156c.082-.012.163-.019.245-.019z" />
          <path d="M17 13c-2.757 0-5 2.4-5 5.352 0 .91.69 1.648 1.54 1.648.85 0 1.54-.738 1.54-1.648 0-1.134.861-2.056 1.92-2.056s1.92.922 1.92 2.056c0 .91.69 1.648 1.54 1.648.85 0 1.54-.738 1.54-1.648C22 15.4 19.757 13 17 13m-1.424 16a1.53 1.53 0 0 0-.5.084c-.826.285-1.27 1.205-.994 2.054C15.612 35.841 19.8 39 24.5 39s8.888-3.16 10.418-7.862c.276-.85-.168-1.769-.993-2.054a1.532 1.532 0 0 0-.501-.084 1.58 1.58 0 0 0-1.494 1.107c-1.099 3.379-4.085 5.648-7.43 5.648-3.345 0-6.331-2.27-7.43-5.648A1.582 1.582 0 0 0 15.576 29M32 13c-2.757 0-5 2.4-5 5.352 0 .91.69 1.648 1.54 1.648.85 0 1.54-.738 1.54-1.648 0-1.134.861-2.056 1.92-2.056s1.92.922 1.92 2.056c0 .91.69 1.648 1.54 1.648.85 0 1.54-.738 1.54-1.648C37 15.4 34.757 13 32 13" />
        </svg>
        <Typography
          variant="h5"
          color="text.secondary"
          align="center"
        >
          Talk To a Tumblr
        </Typography>
        <Grid container spacing={1}>
          {myFriends.map((elem) => (
            <Grid item xs={2.6} key={elem.friend_id}>
              <button
                type="button"
                onClick={() => {
                  const newavatars = avatars.filter((el) => elem.friend_id === el.elem.friend_id);
                  console.log(avatars);
                  if (newavatars.length) {
                    dispatch(removeAvaterID(newavatars[0]));
                  } else
                  if ((chatBox.length
                      && chatBox[0].elem.friend_id !== elem.friend_id) || chatBox.length === 0) {
                    dispatch(getChatRoomId({
                      blogsID: {
                        from_blog_id: User.primaryBlogId,
                        to_blog_id: elem.friend_id,
                      },
                      User,
                      elem,
                    }));
                  }
                }}
                style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <img className="chat-friend-img" alt="not Fn" src={elem.friend_avatar} />
              </button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default OldChatList;
