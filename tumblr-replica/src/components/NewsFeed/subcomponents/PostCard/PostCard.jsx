import React from 'react';
import Card from '@mui/material/Card';
import { useMediaQuery } from 'react-responsive';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import PostFooter from './subcomponents/PostFooter';
import PostContent from './subcomponents/PostContent';
import './css/PostCard.css';
import MoreMenu from '../../../MoreMenu/MoreMenu';

/**
 *
 * @param {Object} props props of the post are all info about this post (by whom it was posted -
 * when - who interacted on it and the content of the post)
 * @returns the component that shows everything about the post
 */
function PostCard(props) {
  const {
    postId, postTime, blogId, blogUsername, postBody, blogAvatar,
  } = props;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <>
      <Card
        style={{
          maxWidth: isTabletOrMobile ? 300 : 480,
          minWidth: isTabletOrMobile ? 300 : 480,
        }}
      >
        <CardHeader
          action={
            <MoreMenu postId={postId} blogId={blogId} postTime={postTime} />
          }
          title={blogUsername}
          avatar={
            isTabletOrMobile
            && (
            <Avatar
              variant="square"
              xs={2}
              src={blogAvatar}
              style={{
                maxWidth: 64,
                minWidth: 64,
                maxHeight: 64,
                minHeight: 64,
              }}
            />
            )
          }
        />
        <CardContent>
          <PostContent content={postBody} />
        </CardContent>
        <CardActions disableSpacing className="footer">
          <PostFooter postId={postId} blogId={blogId} />
        </CardActions>
      </Card>
    </>
  );
}

export default PostCard;

PostCard.propTypes = {
  postId: PropTypes.number.isRequired,
  blogId: PropTypes.number.isRequired,
  postBody: PropTypes.string.isRequired,
  blogUsername: PropTypes.string.isRequired,
  postTime: PropTypes.string.isRequired,
  blogAvatar: PropTypes.string.isRequired,
};
