import { React, useEffect, useState } from 'react';
import Axios from 'axios';
import './css/Newsfeed.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FontDownloadSharpIcon from '@mui/icons-material/FontDownloadSharp';
import { FaLink, FaRegCommentDots } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PostCard from './subcomponents/PostCard/PostCard';
import CheckOut from './subcomponents/CheckOut/CheckOut';
import MakePost from '../CreatePost/MakePost';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
/**
 *
 * @returns The Newfeed of dashboard which contains posts of following blogs and check out
 * these blogs.
 */
const Newsfeed = function NewsfeedPosts() {
  const [Posts, setPosts] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const apiBaseUrl = 'http://localhost:8008/post/3';

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

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
          <Grid
            item
            xs
            container
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="start"
          >
            { isDesktopOrLaptop && (
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
            )}
            {isDesktopOrLaptop
            && (
              <Grid item>
                <div style={{ backgroundColor: 'white' }}>
                  <Stack direction="row" spacing={1.5}>
                    <IconButton onClick={() => handleOpen()}>
                      <FontDownloadSharpIcon sx={{ fill: '#000000', fontSize: 55 }} />
                    </IconButton>
                    <IconButton>
                      <AddAPhotoIcon style={{ fill: '#FF492F', fontSize: 50 }} />
                    </IconButton>
                    <IconButton>
                      <FormatQuoteIcon style={{ fill: '#FF8A00', fontSize: 60 }} />
                    </IconButton>
                    <IconButton>
                      <FaLink style={{ fill: '#00FA4B', fontSize: 40 }} />
                    </IconButton>
                    <IconButton>
                      <FaRegCommentDots style={{ fill: '#00CFFA', fontSize: 40 }} />
                    </IconButton>
                    <IconButton>
                      <AudiotrackIcon style={{ fill: '#A055FF', fontSize: 55 }} />
                    </IconButton>
                    <IconButton>
                      <VideoCallIcon style={{ fill: '#FF4AFF', fontSize: 55 }} />
                    </IconButton>
                  </Stack>
                </div>
              </Grid>
            )}
          </Grid>
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
                  style={{ justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}
                  sx={{ mb: 2, mt: 0 }}
                >
                  {
                    isDesktopOrLaptop
                    && (
                    <Grid item>
                      <Avatar
                        src={post.blog_avatar}
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
                    )
                  }
                  <Grid item>
                    <PostCard
                      postId={post.post_id}
                      postTime={post.post_date}
                      blogId={post.blog_id}
                      blogUsername={post.blog_username}
                      postBody={post.post_body}
                      blogAvatar={post.blog_avatar}
                      xs={10}
                      sx={{ mt: 0 }}
                    />
                  </Grid>
                </Grid>
              </>
            ))}
        </Grid>
        {
          isDesktopOrLaptop
          && (
          <Grid item xs={0} md={4} sx={{ pt: 10 }}>
            <CheckOut />
          </Grid>
          )
        }
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <MakePost />
          </Box>
        </Modal>
      </Grid>
    </div>
  );
};
export default Newsfeed;
