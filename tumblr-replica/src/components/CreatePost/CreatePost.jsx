import { React, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';

const CreatePost = function CreatePostComponent() {
  // States
  const [content, setContent] = useState('');
  const [showCreate, setshowCreate] = useState(false);
  // handlers
  const handleClick = function handleEditorChange(e) {
    setContent(e.target.getContent());
    console.log(content);
  };
    <Editor
      // eslint-disable-next-line no-undef
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      // eslint-disable-next-line react/no-this-in-sfc
      onEditorStateChange={this.onEditorStateChange}
    />;

    return (
      <>
        <button
          type="button"
          onClick={() => {
            setshowCreate(true);
          }}
        >
          create post
        </button>
        <div style={{ display: showCreate ? 'block' : 'none' }}>
          <Editor
            initialValue="<p>Initial content</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image',
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'insertdatetime media table paste wordcount',
                'image',
              ],
              toolbar:
              'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help | image',
            }}
            onChange={() => handleClick()}
          />
          <button
            type="button"
            onClick={() => {
              const headers = {
                Authorization: 'Bearer my-token',
                'My-Custom-Header': 'foobar',
              };
              axios.post('http://localhost:8888/posts', { content }, { headers });
              console.log(content);
            }}
          >
            post
            {' '}
          </button>
          <button type="button" onClick={() => setshowCreate(false)}>
            close
          </button>
        </div>
      </>
    );
};

export default CreatePost;
