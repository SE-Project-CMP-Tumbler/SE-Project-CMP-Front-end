import * as React from 'react';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/FollowersPage.css';
import {
  fetchFollower, searchFollowblog,
} from '../../slices/followerspage/followerspageAPI';
import Follower from './subcomponents/Follower';
import { selectUser } from '../../states/User/UserSlice';

/**
 * component for  render  the Responsive part of the Folloerspage and not responsive one
 * @component
 * @name
 * FollowersPage
 * @example
 * return (
 *   <Followers />
 * )
 */

function FollowersPage() {
  const [isFollow, setIsFollow] = useState('');
  const followerNum = useSelector((state) => state.Follower.followerNum);
  const followers = useSelector((state) => state.Follower.followers);
  const User = useSelector(selectUser);
  const isFollowMessage = useSelector((state) => state.Follower.isFollowMessage);
  const dispatch = useDispatch();

  const handleEnterKeyPress = (e) => {
    if (e.charCode === 13) {
      dispatch(searchFollowblog({ userName: isFollow, User }));
      setIsFollow('');
    }
  };
  useEffect(() => {
    dispatch(fetchFollower(User));
  }, []);

  return (
    <main
      className="following-main"
    >
      <div
        className="following-div"
      >
        <div className="search-div">
          <div
            style={{
              margin: '10px 0',
              color: '#ffff',
              fontSize: '17px',
              fontFamily: 'sans-serif',
              width: '40%',
            }}
          >
            {followerNum}
            {' '}
            Followers
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search your follower"
              value={isFollow}
              onChange={(e) => {
                setIsFollow(e.target.value);
              }}
              onKeyPress={handleEnterKeyPress}
              className="follow-input"
              style={{
                width: '96%',
                height: '7px',
                padding: '13px 10px',
                border: 'none',
                borderRadius: '2px',
                fontSize: '15px',
                margin: '5px 10px 10px 0',
                backgroundColor: 'rgb(255, 255, 255,0.3)',
                color: '#ffff',
              }}
            />
            <div
              className="is-follow-message"
            >
              {isFollowMessage}
            </div>
          </div>
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
          {followers
          && followers.map((elem) => (
            <Follower
              key={elem.blog_id}
              id={elem.blog_id}
              blogavatarshape={elem.blog_avatar_shape}
              blogavatar={elem.blog_avatar}
              blogusername={elem.blog_username}
              followingfrom={elem.followingfrom}
            />
          ))}
        </List>
      </div>
    </main>
  );
}

export default FollowersPage;
