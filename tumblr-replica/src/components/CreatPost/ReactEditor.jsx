import { React, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CreatePost from '../../states/features/dashboard/cratepostAPI';
import { selectUser } from '../../states/User/UserSlice';
import uploadImage from '../../states/features/dashboard/uploadimageAPI';

const ReactEditor = () => {
  const User = useSelector(selectUser);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    overflowY: 'scroll',
  };
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  function uploadCallBack(file) {
    return new Promise((resolve, reject) => {
      if (file) {
        const data = new FormData();
        data.append('image', file);
        dispatch(uploadImage({ img: data, User }))
          .then((res) => {
            resolve({ data: { link: res.payload.response.url } });
          })
          .catch((err) => reject(err));
      }
    });
  }
  return (
    <>
      <Box sx={style}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          toolbar={{
            image: {
              uploadCallback: uploadCallBack,
              alt: { present: true, mandatory: false },
            },
          }}
          onEditorStateChange={(event) => {
            setEditorState(event);
            setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
            console.log(content);
          }}
        />
        <Button onClick={() => {
          dispatch(CreatePost({ postBody: content, User }));
        }}
        >
          Post
        </Button>
      </Box>
    </>
  );
};
export default ReactEditor;
