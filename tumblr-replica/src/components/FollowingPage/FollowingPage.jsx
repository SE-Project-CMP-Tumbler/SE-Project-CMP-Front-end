import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FollowingBlog from './subcomponents/FollowingBlog';
import './css/FollowingPage.css';
import {
  fetchFollowing, getUsersAndFollow,
} from '../../slices/FollowingPage/FollowingPage';

function FollowingPart() {
  const [tofollow, setToFollow] = useState('');
  const followingNum = useSelector((state) => state.Follow.followingNum);
  const following = useSelector((state) => state.Follow.following);
  const afterFollowMessage = useSelector((state) => state.Follow.afterFollowMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFollowing());
  }, []);

  return (
    <main
      style={{
        padding: '0 20px',
        backgroundColor: 'rgb(6, 24, 51)',
      }}
    >
      <div
        className="following-div"
        style={{
          width: '550px',
          margin: '5% 0 0 20%',
        }}
      >
        <div
          style={{
            margin: '10px 0',
            color: '#ffff',
            fontSize: '20px',
            fontFamily: 'sans-serif',
          }}
        >
          {followingNum}
          {' '}
          Following
        </div>
        <Box
          component="div"
          sx={{
            display: 'flex',
            width: '100%',
          }}
        >
          <input
            type="text"
            placeholder="Enter a username,URL,email address to follow"
            value={tofollow}
            onChange={(e) => {
              setToFollow(e.target.value);
            }}
            className="follow-input"
            style={{
              width: '83%',
              padding: '13px 10px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '15px',
              margin: '5px 10px 10px 0',
              backgroundColor: 'rgb(255, 255, 255,0.3)',
              color: '#ffff',
            }}
          />
          <Button
            variant="outlined"
            href="#outlined-buttons"
            onClick={() => { dispatch(getUsersAndFollow(tofollow)); }}
            style={{
              backgroundColor: 'transparent',
              color: 'rgb(255, 255, 255,0.5)',
              border: '2px solid rgb(255, 255, 255,0.5)',
              fontWeight: '600',
              fontSize: '12px',
              height: '42px',
              width: '80px',
              marginTop: '5px',
              borderRadius: '5px',
            }}
          >
            Follow
          </Button>
        </Box>
        <div
          style={{
            padding: '0 0 0 20px',
            color: '#ffffff',
            fontSize: '15px',
            margin: '0 0 10px 0',
          }}
        >
          {afterFollowMessage}
        </div>
        <List
          dense
          sx={{
            width: '100%',
            maxWidth: 550,
            bgcolor: 'background.paper',
            borderRadius: '7px',
          }}
        >
          {following
          && following.map((elem) => (
            <FollowingBlog
              key={elem.id}
              id={elem.id}
              blogavatarshape={elem.blog_avatar_shape}
              blogavatar={elem.blog_avatar}
              blogusername={elem.blog_username}
              followingfrom={elem.followingfrom}
              lastupdate={elem.lastupdate}
            />
          ))}
        </List>
      </div>
    </main>
  );
}

export default FollowingPart;
