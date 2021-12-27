/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import draftToHtml from 'draftjs-to-html';

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

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  return (
    <div>
      <Box sx={style}>
        <Editor
          editorState={editorState}
          onChange={(state) => {
            setEditorState(state);
            console.log(editorState.getCurrentContent());
            console.log('as HTML:', draftToHtml(editorState.getCurrentContent()));
          }}
        />
      </Box>
    </div>
  );
}
export default MyEditor;
