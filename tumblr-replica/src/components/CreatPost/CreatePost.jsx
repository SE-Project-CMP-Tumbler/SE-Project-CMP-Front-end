/* eslint-disable no-use-before-define */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-default */
import {
  default as React, useEffect, useRef, useState,
} from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import axios from 'axios';

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

const DEFAULT_INITIAL_DATA = () => ({
  time: new Date().getTime(),
  blocks: [
    {
      type: 'header',
      data: {
        text: 'This is my awesome editor!',
        level: 1,
      },
    },
  ],
});

const EDITTOR_HOLDER_ID = 'editorjs';

const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
  const [postbody, setPostBody] = useState('');

  const handleClick = function post() {
    const headers = {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    };
    axios.post(
      'http://localhost:8000/createdpost',
      { postBody: postbody },
      { headers },
    );
  };
  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: 'ERROR',
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        const content = await this.editorjs.saver.save();
        const ay = await ejInstance.current.save();
        setPostBody(content);
        setEditorData(content);
        console.log(this.editorjs);
        console.log('mar');
      },
      autofocus: true,
      tools: {
        header: Header,
      },
    });
  };

  return (
    <>
      <Box sx={style}>
        <div id={EDITTOR_HOLDER_ID}> </div>
        <Button onClick={() => { handleClick(); }}>
          Post
        </Button>
      </Box>
    </>
  );
};

export default Editor;
