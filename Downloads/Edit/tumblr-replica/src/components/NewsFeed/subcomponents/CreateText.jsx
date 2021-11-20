import { React, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const CreateText = function CreateText() {
  // States
  const [content, setContent] = useState('');
  const [showCreate, setshowCreate] = useState(false);

  return (
    <>
      {console.log('i am create post')}
      <button
        type="button"
        onClick={() => setshowCreate(true)}
      >
        create pos
      </button>
      {showCreate && (
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
          />

          <button
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
          </button>
        </div>
      )}
      <button type="button" onClick={() => setshowCreate(false)}>close</button>
    </>
  );
};

export default CreateText;
