import { React, useState } from 'react';
import {
  EditorState, convertToRaw, ContentState, convertFromHTML, CompositeDecorator,
} from 'draft-js';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CreatePost from '../../states/features/dashboard/cratepostAPI';
import EditPost from '../../states/features/dashboard/editpostAPI';
import Reblog from '../../states/features/dashboard/reblogAPI';
import { selectUser } from '../../states/User/UserSlice';
import uploadImage from '../../states/features/dashboard/uploadimageAPI';

const ReactEditor = (props) => {
  const { body, edit, postID } = props;
  const User = useSelector(selectUser);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isTabletOrMobile ? 300 : 550,
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
  const blocksFromHTML = convertFromHTML(body);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap,
  );

  function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null
          && contentState.getEntity(entityKey).getType() === 'LINK'
        );
      },
      callback,
    );
  }

  const Link = (prop) => {
    const { contentState, entityKey, children } = prop;
    const { url } = contentState.getEntity(entityKey).getData();
    return (
      <a href={url}>
        {children}
      </a>
    );
  };

  function findImageEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null
          && contentState.getEntity(entityKey).getType() === 'IMAGE'
        );
      },
      callback,
    );
  }

  const Image = (prop) => {
    const { contentState, entityKey } = prop;
    const { height, src, width } = contentState.getEntity(entityKey).getData();

    return (
      <img src={src} height={height} width={width} alt="not-found" />
    );
  };
  const decorator = new CompositeDecorator([{ strategy: findLinkEntities, component: Link },
    {
      strategy: findImageEntities,
      component: Image,
    },
  ]);
  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(state, decorator),
  );
  console.log(editorState);
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
          setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
          if (edit === 1) dispatch(EditPost({ postBody: content, User, postID }));
          else if (edit === 0) dispatch(CreatePost({ postBody: content, User }));
          else if (edit === 2) dispatch(Reblog({ postBody: content, User, postID }));
        }}
        >
          Post
        </Button>
      </Box>
    </>
  );
};
export default ReactEditor;
ReactEditor.propTypes = {
  postID: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  edit: PropTypes.number.isRequired,
};
