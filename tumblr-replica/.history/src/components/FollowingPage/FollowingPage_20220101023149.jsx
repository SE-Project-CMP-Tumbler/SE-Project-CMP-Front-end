import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Carousel from 'react-multi-carousel';
import FollowingBlog from './subcomponents/FollowingBlog';
import './css/FollowingPage.css';
import {
  followBlogsearch, fetchFollowing,
} from '../../slices/followingpage/followingpageAPI';
import { selectUser } from '../../states/User/UserSlice';

/**
 * component for  render  the FollowingPage List with the search input and  number of Followings
 * @component
 * @name
 * FollowingPage
 * @example
 * return (
 *   <FollowingPage />
 * )
 */

function FollowingPage() {
  const [tofollow, setToFollow] = useState('');
  const followingNum = useSelector((state) => state.Following.followingNum);
  const following = useSelector((state) => state.Following.following);
  const User = useSelector(selectUser);
  const afterFollowMessage = useSelector((state) => state.Following.afterFollowMessage);
  const dispatch = useDispatch();
  const handleEnterKeyPress = (e) => {
    console.log(e.charCode);
    if (e.charCode === 13) {
      dispatch(followBlogsearch({ tofollow, User }));
    }
  };
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 3,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 2,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 715 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 715, min: 0 },
  //     items: 1,
  //   },
  // };
  useEffect(() => {
    dispatch(fetchFollowing(User));
  }, []);

  return (
    <main
      className="following-main"
    >
      <div
        className="following-div"
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
            onKeyPress={handleEnterKeyPress}
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
            onClick={() => { dispatch(followBlogsearch({ tofollow, User })); }}
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
          id="afterFollowMessage"
        >
          {afterFollowMessage}
        </div>
        <List
          dense
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: '7px',
          }}
        >
          {following
          && following.map((elem) => (
            <FollowingBlog
              key={elem.blog_id}
              id={elem.blog_id}
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

export default FollowingPage;
