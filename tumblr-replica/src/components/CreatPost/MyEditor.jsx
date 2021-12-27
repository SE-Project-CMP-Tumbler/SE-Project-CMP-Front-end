import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './css/MyEditor.css';

const MyEditor = function myedit() {
  // States
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
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
  };
  return (
    <>
      <Box sx={style}>
        <div>
          <input
            title="richTextEditor1"
            name="Title"
            className="Title"
            placeholder="Title"
            value={title}
            onChange={
              (e) => setTitle(e.currentTarget.value)
              }
          />
          <input
            title="richTextEditor2"
            name="Text"
            className="content"
            placeholder="Your text here"
            id="textfield1"
            value={text}
            onChange={
            (e) => {
              setText(e.currentTarget.value);
              console.log(document.getElementById('textfield1').innerHTML);
            }
            }
          />
          <input
            title="richTextEditor3"
            name="#tags"
            className="tags"
            placeholder="#tags"
            value={tags}
            onChange={
              (e) => setTags(e.currentTarget.value)
              }
          />
          <Button
            type="button"
          >
            post
          </Button>
        </div>
      </Box>
    </>
  );
};

export default MyEditor;
