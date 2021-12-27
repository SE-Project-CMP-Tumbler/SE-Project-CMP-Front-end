/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LanguageIcon from '@mui/icons-material/Language';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../states/User/UserSlice';
import uploadImage from '../../../states/features/dashboard/uploadimageAPI';

import './css/upload.css';

const UploadPhoto = function upload() {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    overflowY: 'scroll',
  };
  const handleUpload = (e) => {
    console.log(e);
  };
  return (
    <Box sx={style}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <label className="custom-file-upload">
            <input type="file" />
            <PhotoCameraIcon
              sx={{ width: '150px', height: '150px' }}
            />
          </label>
        </Grid>
        <Grid item xs={6}>
          <IconButton>
            <LanguageIcon
              sx={{ width: '150px', height: '150px' }}
            />
          </IconButton>
        </Grid>
      </Grid>

    </Box>
  );
};

export default UploadPhoto;
