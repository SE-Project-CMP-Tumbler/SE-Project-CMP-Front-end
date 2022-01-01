/* eslint-disable no-nested-ternary */
/* eslint-disable react/self-closing-comp */
import { React, useState } from 'react';
import {
  EditorState, convertToRaw, ContentState,
} from 'draft-js';
// import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CreatePost from '../../states/features/createpost/cratepostAPI';
import { setOpened } from '../../states/features/createpost/createpostSlice';
import EditPost from '../../states/features/dashboard/editpostAPI';
import Reblog from '../../states/features/dashboard/reblogAPI';
import { selectUser } from '../../states/User/UserSlice';
import { fetchPosts } from '../../states/features/dashboard/dashboardSlice';
import uploadImage from '../../states/features/dashboard/uploadimageAPI';
import './css/MyEditor.css';

const ReactEditor = () => {
  const User = useSelector(selectUser);
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const style = {
    top: '10%',
    left: '5%',
    position: 'absolute',
    width: '90%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const create = useSelector((state) => state.CreatePostState);
  console.log(create);
  const [tags, setTags] = useState('');
  const [title, setTitle] = useState('');
  const contentBlock = htmlToDraft(create.postBody);
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(contentState),
  );
  const [content, setContent] = useState(create.postBody);
  function uploadCallBack(file) {
    return new Promise((resolve, reject) => {
      if (file) {
        const data = new FormData();
        data.append('image', file);
        dispatch(uploadImage({ img: data, User, postType: create.postType }))
          .then((res) => {
            resolve({ data: { link: res.payload.response.url } });
          })
          .catch((err) => reject(err));
      }
    });
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={style}
        spacing={0}
      >
        <Grid item xs={12}>
          <input
            className="Title"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </Grid>
        <Grid item xs={12} style={{ overflow: 'auto', height: '70%' }}>
          <Editor
            editorState={editorState}
            toolbarClassName="rdw-storybook-toolbar"
            wrapperClassName="rdw-storybook-wrapper"
            editorClassName="rdw-storybook-editor"
            toolbar={{
              image: {
                uploadCallback: uploadCallBack,
                alt: { present: true, mandatory: false },
              },
            }}
            onEditorStateChange={(event) => {
              setEditorState(event);
              setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
            }}
            placeholder={create.postType === 'quote' ? 'Quote' : create.postType === 'chat' ? 'Chat' : 'your text'}
            overflowY="scroll"
          />
        </Grid>
        <Grid item xs={12}>
          <input
            className="tags"
            type="text"
            placeholder="#tags"
            style={{ width: '100%' }}
            onChange={(e) => setTags(e.currentTarget.value)}
          />
          <Button
            onClick={() => {
              setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
              dispatch(setOpened(false));
              let cont = '';
              if (title !== '') { cont = cont.concat(`<p>${title}</p>`); }
              cont = cont.concat(content);
              if (tags !== '') { cont = cont.concat(`<p>${tags}</p>`); }
              console.log(cont);
              if (create.edit === 1) {
                dispatch(EditPost({ postBody: cont, User, postID: create.postID }));
              } else if (create.edit === 0) {
                dispatch(CreatePost({ postBody: cont, User, postType: create.postType }));
              } else if (create.edit === 2) {
                dispatch(Reblog({ postBody: cont, User, postID: create.postID }));
              }
              dispatch(fetchPosts(User));
            }}
          >
            Post
          </Button>
          <Button
            onClick={() => {
              dispatch(setOpened(false));
            }}
          >
            Close
          </Button>
        </Grid>
      </Grid>

    </>
  );
};
export default ReactEditor;
