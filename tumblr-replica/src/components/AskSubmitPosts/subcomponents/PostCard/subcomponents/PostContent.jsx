/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Markup } from 'interweave';
import '../css/PostContent.css';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import { useMediaQuery } from 'react-responsive';
/**
 * This function displays the content of a post and extracts mentions & hashtags
 * of the post to be do the needed logic with them & link them to the corresponding components
 * @param {Object} props the content of the post as a string of html format.
 * @returns component contains text / imgs / videos of a post
 */
const PostContent = function PostContentDisplay(props) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });
  let hashtags = [];
  const mentions = [];

  const { content, small } = props;

  let current = content;
  let i = content ? current.indexOf('#') : -1;
  if (i !== -1) {
    current = current.substring(i, current.length);
    hashtags = current.split(' ');
    hashtags[hashtags.length - 1] = hashtags[hashtags.length - 1].substring(
      0,
      hashtags[hashtags.length - 1].indexOf('<'),
    );
  }

  let postBody = i !== -1 ? content.substring(0, i - 3) : content;

  current = postBody;
  i = current ? postBody.indexOf('@') : -1;
  let j = 0;
  let cut = 0;
  while (i !== -1) {
    cut += i;
    j = current.substr(i).indexOf(' ');
    mentions.push({ strt: cut, end: j + cut });
    current = current.substr(i + j);
    cut += j;
    i = current.indexOf('@');
  }
  // console.log(mentions)

  let mentioned = '';

  for (let k = mentions.length - 1; k >= 0; k -= 1) {
    mentioned = postBody.substring(mentions[k].strt, mentions[k].end);
    postBody = postBody.replace(
      mentioned,
      `<a href="#" style="text-decoration: 'underline';color: '#AAAAAA';""> ${mentioned}</a>`,
    );
  }

  return (
    <div className="postBody" style={{ maxWidth: isTabletOrMobile || small ? 300 : 480, minWidth: isTabletOrMobile || small ? 300 : 480 }}>
      <Markup content={postBody} />
      {hashtags.map((hash) => (
        <>
          <Link href="/" underline="hover" style={{ color: 'grey' }} key={hash}>
            {' '}
            {hash}
            {' '}
          </Link>
        </>
      ))}
    </div>
  );
};

export default PostContent;

PostContent.propTypes = {
  small: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};
