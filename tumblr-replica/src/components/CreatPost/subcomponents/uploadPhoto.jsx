/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useMediaQuery } from 'react-responsive';
import LanguageIcon from '@mui/icons-material/Language';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../states/User/UserSlice';
import ReactEditor from '../ReactEditor';
import uploadImage from '../../../states/features/dashboard/uploadimageAPI';

import './css/upload.css';

const UploadPhoto = function upload() {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  const [editorImgs, setEditorImgs] = useState();
  const [showEditor, setShowEditor] = useState(false);
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
    data.append('image', e.target.files[0]);
    dispatch(uploadImage({ img: data, User }))
      .then((res) => {
        setEditorImgs(res.payload.response.url);
        setShowEditor(1);
        setShowArea(0);
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
        { !showEditor
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
                <PhotoCameraIcon
                  sx={{ width: '80px', height: '80px', border: 'none' }}
                />
              </label>
            </li>
            <li>
              <p> Upload photos </p>
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
                setShowEditor(false);
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
              data.append('image', url);
              dispatch(uploadImage({ img: data, User }))
                .then((res) => {
                  setEditorImgs(res.payload.response.url);
                  setShowEditor(true);
                })
                .catch((err) => console.log(err));
            }}
          >
            Add
          </button>
        </>
        ) }
      </Box>
      { showEditor && <ReactEditor body={`<div> <img src=${editorImgs} style="width:400px;height:300px" /> </div>`} edit={0} postID={0} postType="photo" /> }
    </>
  );
};

export default UploadPhoto;
