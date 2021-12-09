import React from 'react';
import { createReactEditorJS } from 'react-editor-js';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';

const ReactEditorJS = createReactEditorJS();

export default function MakePost() {
  const editorJS = React.useRef(null);

  const handleInitialize = React.useCallback((instance) => {
    editorJS.current = instance;
  }, []);

  return (
    <ReactEditorJS
      onInitialize={handleInitialize}
      tools={
        {
          embed: Embed,
          table: Table,
          list: List,
          warning: Warning,
          code: Code,
          linkTool: LinkTool,
          image: Image,
          raw: Raw,
          header: Header,
          quote: Quote,
          marker: Marker,
          delimiter: Delimiter,
          inlineCode: InlineCode,
          simpleImage: SimpleImage,
          paragraph: Paragraph,
        }
        }
    />
  );
}
