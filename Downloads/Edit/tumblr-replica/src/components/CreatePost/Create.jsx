import { React, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';

export default function EditorComponent() {
  const [content, setContent] = useState('');
  const handleClick = function handleEditorChange(e) {
    setContent(e.target.getContent());
    console.log(content);
  };

  return (
    <div>
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
        }}
        onChange={(event) => handleClick(event)}
      />
      <button
        style={{ flex: 1 }}
        type="button"
        onClick={() => {
          const headers = {
            Authorization: 'Bearer my-token',
            'My-Custom-Header': 'foobar',
          };
          axios.post('http://localhost:8008/posts', { content }, { headers });
          console.log(content);
        }}
      >
        <span>
          <span>post</span>
        </span>
      </button>
      <button type="button" style={{ flex: 1 }}>
        <span>
          <span>cloooooooooooooooooooooooooooooooooooooooos</span>
        </span>
      </button>
    </div>
  );
}
