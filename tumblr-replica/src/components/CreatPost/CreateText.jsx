import { React, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';

const CreateText = function CreateText() {
  // States
  const [content, setContent] = useState('');
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
  return (
    <>
      <Box sx={style}>
        <div>
          <CKEditor
            editor={ClassicEditor}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              setContent(editor.getData());
            }}
            toolbar={{
              items: [
                'heading', '|',
                'alignment', '|',
                'bold', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                'link', '|',
                'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|',
                'code', 'codeBlock', '|',
                'insertTable', '|',
                'outdent', 'indent', '|',
                'uploadImage', 'blockQuote', '|',
                'undo', 'redo',
              ],
            }}
            config={{
              ckfinder: {
                uploadUrl: '../../../public/uploads',
              },
            }}
          />
          <Button
            type="button"
            onClick={() => {
              const headers = {
                Authorization: 'Bearer my-token',
                'My-Custom-Header': 'foobar',
              };
              axios.post(
                'http://localhost:8888/posts',
                { content },
                { headers },
              );
            }}
          >
            post
          </Button>
        </div>
      </Box>
    </>
  );
};

export default CreateText;
