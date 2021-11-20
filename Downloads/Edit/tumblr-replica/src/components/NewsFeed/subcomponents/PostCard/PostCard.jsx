import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import PropTypes from 'prop-types';
import PostFooter from './subcomponents/PostFooter';
import PostContent from './subcomponents/PostContent';
import './css/PostCard.css';
import MoreMenu from '../../../MoreMenu/MoreMenu';

function PostCard(props) {
  const {
    postId, blogId, postTime, blogUsername, postBody,
  } = props;
  return (
    <>
      <Card>
        <CardHeader
          action={
            <MoreMenu post_id={postId} blog_id={blogId} post_date={postTime} />
          }
          title={blogUsername}
        />
        <CardContent>
          <PostContent content={postBody} />
        </CardContent>
        <CardActions disableSpacing className="footer">
          <PostFooter id={postId} blog_id={blogId} />
        </CardActions>
      </Card>
    </>
  );
}

export default PostCard;

PostCard.propTypes = {
  postId: PropTypes.string.isRequired,
  blogId: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
  blogUsername: PropTypes.string.isRequired,
  postTime: PropTypes.string.isRequired,
};
