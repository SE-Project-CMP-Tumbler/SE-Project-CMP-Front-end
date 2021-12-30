/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useMediaQuery } from 'react-responsive';
import LanguageIcon from '@mui/icons-material/Language';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../states/User/UserSlice';
import uploadVideo from '../../../states/features/dashboard/uploadVideoAPI';
import CreatePost from '../../../states/features/dashboard/cratepostAPI';
import './css/upload.css';

const UploadVideo = function upload() {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  const [editorImgs, setEditorImgs] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const [showArea, setShowArea] = useState(false);
  const [url, setURL] = useState();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isTabletOrMobile ? 300 : 550,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    overflowY: 'scroll',
  };
  const handleUpload = (e) => {
    console.log(e);
    const data = new FormData();
    data.append('video', e.target.files[0]);
    dispatch(uploadVideo({ img: data, User }))
      .then((res) => {
        setEditorImgs(res.payload.response.url);
        setShowVideo(true);
        setShowArea(false);
      })
      .catch((err) => console.log(err));
  };

  const handleURL = (e) => {
    console.log(e.currentTarget.value);
    setURL(e.currentTarget.value);
  };
  return (
    <>
      <Box sx={style}>
        { !showVideo
    && !showArea
    && (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <div className="imgdiv">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <label className="custom-file-upload" style={{ border: 'none' }}>
                <input type="file" onChange={handleUpload} />
                <svg className="VFP" viewBox="0 0 16 15" width="40" height="35" fill="gray">
                  <path d="M15.7 7.8c-.2-.1-.5 0-.6.1l-2.9 2.2c-.1.1-.1.1-.2.1V8H0v3h2v3.2c0 .4.3.8.8.8h8.4c.5 0 .8-.4.8-.8V12c0 .1.1.2.2.2l2.9 2.2c.2.2.4.2.6.1.2-.1.3-.3.3-.5V8.4c0-.2-.1-.5-.3-.6zM2.8 6.9c.3 0 .8.1 1.1.1h5.5c.3 0 .8-.1 1-.1 1.6-.3 2.8-1.7 2.8-3.4 0-1.9-1.6-3.5-3.5-3.5-1.2 0-2.4.6-3 1.7h-.1C5.9.6 4.8 0 3.6 0 1.6 0 0 1.6 0 3.5c0 1.7 1.2 3 2.8 3.4zM9 4.2c1 0 1.8-.8 1.8-1.8v-.3c.4.3.6.8.6 1.4 0 1-.8 1.8-1.8 1.8-.9 0-1.6-.6-1.8-1.5.3.3.7.4 1.2.4zm-6.2.1c1 0 1.8-.8 1.8-1.8v-.3c.4.2.6.7.6 1.3 0 1-.8 1.8-1.8 1.8-.9 0-1.6-.6-1.8-1.5.3.3.7.5 1.2.5z" />
                </svg>
              </label>
            </li>
            <li>
              <p> Upload Videos </p>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="imgdiv">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <IconButton onClick={() => {
                setShowArea(true);
                setShowVideo(false);
              }}
              >
                <LanguageIcon
                  sx={{ width: '80px', height: '80px' }}
                />
              </IconButton>
            </li>
            <li>
              <p> Add photo from web </p>
            </li>
          </ul>
        </div>
      </Grid>
    </Grid>
    )}
        { showArea && (
          <>
            ;
            <textarea onChange={handleURL} />
            <button
              type="button"
              onClick={() => {
                const data = new FormData();
                data.append('video', url);
                dispatch(uploadVideo({ img: data, User }))
                  .then((res) => {
                    setEditorImgs(res.payload.response.url);
                    setShowVideo(true);
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Add
            </button>
          </>
        ) }
      </Box>
      { showVideo
      && (
      <div style={{ width: '400px', height: '100px' }}>
        <video width="400" controls>
          <source src={`${editorImgs}`} type="video/mp4" />
        </video>
        <Button onClick={() => {
          dispatch(CreatePost({ postBody: `<video controls> <source src=${editorImgs} type="video/mp4"> </source> </video>`, User, postType: 'video' }));
        }}
        >
          Post
        </Button>
      </div>
      )}
    </>
  );
};

export default UploadVideo;
