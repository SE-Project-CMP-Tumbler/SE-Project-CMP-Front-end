/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../states/User/UserSlice';
import { getRadar } from '../../states/features/radar/radarSlice';
import fetchRadar from '../../states/features/radar/radarAPI';
import PostCard from '../NewsFeed/subcomponents/PostCard/PostCard';
import './css/Radar.css';

const Radar = function RadarPost() {
  const post = useSelector(getRadar);
  const dispatch = useDispatch();
  const User = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchRadar(User));
    console.log(post);
  }, []);
  return (
    <>
      {post
      && (
      <>
        <h1 className="header">Radar</h1>
        <PostCard
          small
          postId={post.post_id}
          postTime={post.post_time}
          blogId={post.blog_id}
          blogUsername={post.blog_username}
          postBody={post.post_body}
          blogAvatar={post.blog_avatar}
          xs={10}
          sx={{ mt: 0 }}
        />
      </>
      )}
    </>
  );
};
export default Radar;
