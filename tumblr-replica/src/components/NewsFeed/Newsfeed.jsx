import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Newsfeed.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FontDownloadSharpIcon from '@mui/icons-material/FontDownloadSharp';
import { FaLink, FaRegCommentDots } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { getDashPosts, fetchPosts } from '../../states/features/dashboard/dashboardSlice';
import PostCard from './subcomponents/PostCard/PostCard';
import CheckOut from './subcomponents/CheckOut/CheckOut';
import {
  selectUser, selectShowReVerify, hideReVerify, resendVerificationThunk, resendVerificationThunkR,
} from '../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../apis/globalAPI';

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
  const resendVerificationMessage = 'All the finest Tumblr users verify their email address. Check your inbox for the message we just sent.';
  const [isPending, setIsPending] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useSelector(selectUser);
  const showReVerify = useSelector(selectShowReVerify);
  // const [showReVerify, setReVerify] = useState(true);
  const dispatch = useDispatch();
  const onClickHideVerify = () => {
    // setReVerify(false);
    dispatch(hideReVerify());
  };
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const Posts = useSelector(getDashPosts);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  const demo = function anyt() {
    setIsPending(false);
    console.log(Posts);
  };
  useEffect(() => {
    dispatch(fetchPosts())
      .then(demo);
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
          { user.loggedin && user.verified === false
            && (
            <Grid
            // item
              container
              justifyContent="center"
              alignItems="middle"
              sx={{ my: 3, display: showReVerify ? '' : 'none' }}
            >
              <Box
                sx={{
                  padding: '14px 16px',
                  backgroundColor: '#00B8FF',
                  width: '540px',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                }}
              >
                <Typography component="h2" color="white" fontSize="1rem" fontFamily="Favorit, Helvetica Neue, HelveticaNeue, Helvetica, Arial, sans-serif">
                  {resendVerificationMessage}
                </Typography>
                <Box
                  sx={{
                    margin: '10px 0px 0px',
                    display: 'flex',
                    flexDirection: 'row',
                    direction: 'rtl',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    disableRipple
                    disableElevation
                    variant="contained"
                    size="large"
                    font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                    style={{
                      backgroundColor: '#FFFFFF',
                      textTransform: 'none',
                      borderRadius: 3,
                    }}
                    sx={{
                      padding: '6px 12px',
                      margin: '0px 0px 0px 10px',
                    }}
                    onClick={() => {
                      if (SERVICETYPE === MOCK) {
                        dispatch(resendVerificationThunk(user.accessToken));
                      } else if (SERVICETYPE === REAL) {
                        dispatch(resendVerificationThunkR(user.accessToken));
                      }
                    }}
                  >
                    <Typography component="h2" color="#00B8FF" fontSize="1rem" font='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;' sx={{ fontWeight: 'bold' }}>
                      Resend
                    </Typography>
                  </Button>
                  <Link
                    to="/settings/account/email"
                    target="_blank"
                    style={{
                      color: '#FFFFFF',
                      fontWeight: 'normal',
                      fontFamily: "'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif",
                    }}
                    onClick={onClickHideVerify}
                  >
                    Update Email
                  </Link>
                </Box>
              </Box>
            </Grid>
            )}
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
            <div>T</div>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
};
export default Newsfeed;
