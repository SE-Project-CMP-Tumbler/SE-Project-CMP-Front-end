/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Box } from '@mui/system';
import { ListItemButton } from '@mui/material';
import PropTypes from 'prop-types';
import {
  getChatRoomId,
} from '../../../slices/chatmodule/chatmoduleAPI';
import {
  removeAvaterID,
} from '../../../slices/chatmodule/chatmoduleSlice';
import { selectUser } from '../../../states/User/UserSlice';
import '../../ChatListResp/css/ChatListResp.css';

/**
 * Component for render the SearchList in the New message List
 *
 * @component
 * @name
 * SearchList
 * @example
 * return (
 *   <SearchList />
 * )
 */
function SearchList({ chats }) {
  console.log(chats);
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  const newMessagePress1 = useSelector((state) => state.Chat.newmessagepress);
  const chatBox = useSelector((state) => state.Chat.chatbox);
  const avatars = useSelector((state) => state.Chat.avatars);
  return (
    chats.map((chat) => (
      <div key={chat.id}>
        <ListItemButton
          sx={{ bgcolor: 'background.paper' }}
          onClick={() => {
            const newavatars = avatars.filter((el) => chat.friend_id === el.elem.friend_id);
            if (newavatars.length) {
              dispatch(removeAvaterID(newavatars[0]));
            } else
            if ((chatBox.length
                      && chatBox[0].elem.friend_id !== chat.friend_id) || chatBox.length === 0) {
              console.log(User.primaryBlogId);
              console.log(chat.friend_id);
              dispatch(getChatRoomId({
                blogsID: {
                  from_blog_id: User.primaryBlogId,
                  to_blog_id: newMessagePress1 ? chat.friend_id : chat.friend_id,
                },
                User,
                elem: chat,
              }));
            }
          }}
        >
          <ListItemAvatar>
            <Avatar src={newMessagePress1 ? chat.friend_avatar : chat.friend_avatar} style={{ margin: '5px' }} />
          </ListItemAvatar>
          {
            newMessagePress1 ? (
              <Box>
                <p className="chat-par-name">
                  {chat.friend_username}
                </p>
                <p className="lastmessage">
                  {`${chat.friend_title}`}
                </p>
              </Box>
            ) : (
              <Box>
                <p className="chat-par-name">
                  {chat.friend_username}
                </p>
                {chat.text ? (
                  <p className="lastmessage">
                    {`${chat.blog_username}:${chat.text}`}
                  </p>
                ) : null}
                {chat.photo ? (
                  <p className="lastmessage">
                    {`${chat.blog_username}:sent a post`}
                  </p>
                ) : null}
                {chat.gif ? (
                  <p className="lastmessage">
                    {`${chat.blog_username}:sent a post`}
                  </p>
                ) : null}
              </Box>
            )
          }
        </ListItemButton>
      </div>
    ))
  );
}

SearchList.propTypes = {
  chats: PropTypes.arrayOf(Object).isRequired,
};

export default SearchList;
