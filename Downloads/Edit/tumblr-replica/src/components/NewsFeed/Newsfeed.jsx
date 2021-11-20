import { React, useEffect, useState } from 'react';
import Axios from 'axios';
import './css/Newsfeed.css';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import PostCard from './subcomponents/PostCard/PostCard';
import CheckOut from './subcomponents/CheckOut/CheckOut';
/**
 *
 * @returns The Newfeed of dashboard which contains posts of following blogs and check out
 * these blogs.
 */
const Newsfeed = function NewsfeedPosts() {
  const [Posts, setPosts] = useState(null);
  const [isPending, setisPending] = useState(true);

  const apiBaseUrl = 'http://localhost:8008/post/3';

  useEffect(() => {
    Axios({
      method: 'GET',
      url: `${apiBaseUrl}`, //    !!! TO BE EDITED !!!    //
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setPosts(res.data.dashboard);
        setisPending(false);
      })
      .catch((err) => {
        console.log("Can't Unfollow due to : ", err);
      });
  }, []);

  return (
    <div className="NewsFeed">
      <Grid container direction="row">
        <Grid
          item
          xs={12}
          md={8}
          container
          spacing={8}
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          sx={{ pt: 10 }}
        >
          {isPending && <div>Loading... </div>}
          {Posts
            && Posts.map((post) => (
              <>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  key={post.post_id}
                  spacing={2}
                  justifyContent="center"
                  alignItems="start"
                >
                  <Grid item>
                    <Avatar
                      sx={{ bgcolor: 'orange' }}
                      variant="square"
                      xs={2}
                      style={{
                        maxWidth: 64,
                        minWidth: 64,
                        maxHeight: 64,
                        minHeight: 64,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <PostCard
                      postId={post.post_id}
                      postDate={post.post_date}
                      blogId={post.blog_id}
                      blogUsername={post.blog_username}
                      postBody={post.post_body}
                      xs={10}
                    />
                  </Grid>
                </Grid>
              </>
            ))}
        </Grid>
        <Grid item xs={0} md={4} sx={{ pt: 10 }}>
          <CheckOut />
        </Grid>
      </Grid>
    </div>
  );
};
export default Newsfeed;
