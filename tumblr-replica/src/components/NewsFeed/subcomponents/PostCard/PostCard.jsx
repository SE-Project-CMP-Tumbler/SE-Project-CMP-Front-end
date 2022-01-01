import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import { useMediaQuery } from 'react-responsive';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import PostFooter from './subcomponents/PostFooter';
import PostContent from './subcomponents/PostContent';
import './css/PostCard.css';
import ProfileHeader from '../../../ProfileTemp/ProfileTempHeader';
import MoreMenu from '../../../MoreMenu/MoreMenu';
import { FollowAsynch } from '../../../../states/followslice/followslice';

/**
 *
 * @param {Object} props props of the post are all info about this post (by whom it was posted -
 * when - who interacted on it and the content of the post)
 * @returns the component that shows everything about the post
 */
function PostCard(props) {
  const {
    postId, postTime, blogId, blogUsername, postBody, blogAvatar, small, postType, isliked, pinned,
  } = props;
  const dispatch = useDispatch();
  const [isFollowed, setIsFollowed] = useState(false);
  const handleFollow = function follow() {
    dispatch(FollowAsynch(blogId));
    setIsFollowed(true);
  };
  const isTabletOrMobile2 = useMediaQuery({ query: '(max-width: 992px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' });
  return (
    <>
      <Card
        style={{
          maxWidth: isTabletOrMobile || small ? 300 : 480,
          minWidth: isTabletOrMobile || small ? 300 : 480,
        }}
      >
        <CardHeader
          action={
            <MoreMenu postId={postId} blogId={blogId} postTime={postTime} pinned={pinned} />
          }
          title={(
            <>
              <div className="blog">
                <span className="blogspan">
                  <Link className="blogname" to={`/blog/view/${blogUsername}`}>
                    <div className="blogdata">
                      <div className="blogtitles">
                        <div className="b4">{blogUsername}</div>
                      </div>
                    </div>
                  </Link>
                  {!isFollowed
                        && (
                        <div className="followdiv">
                          <button
                            className="fb"
                            type="button"
                            onClick={handleFollow}
                          >
                            <span className="f">Follow</span>
                          </button>
                        </div>
                        )}
                </span>
              </div>
            </>
          )}
          avatar={
            (isTabletOrMobile2 || small)
            && (
              <Tooltip
                placement="right"
                title={(
                  <ProfileHeader BlogId={blogId} />
                )}
              >
                <Avatar
                  variant="square"
                  xs={2}
                  src={blogAvatar}
                  style={{
                    maxWidth: 40,
                    minWidth: 40,
                    maxHeight: 40,
                    minHeight: 40,
                  }}
                />
              </Tooltip>
            )
          }
        />
        <CardContent>
          <PostContent content={postBody} small={small} />
        </CardContent>
        <CardActions disableSpacing className="footer">
          <PostFooter
            postId={postId}
            blogId={blogId}
            content={postBody}
            postType={postType}
            isLiked={isliked}
          />
        </CardActions>
      </Card>
    </>
  );
}

export default PostCard;

PostCard.propTypes = {
  small: PropTypes.bool.isRequired,
  postId: PropTypes.number.isRequired,
  blogId: PropTypes.number.isRequired,
  postBody: PropTypes.string.isRequired,
  blogUsername: PropTypes.string.isRequired,
  postTime: PropTypes.string.isRequired,
  blogAvatar: PropTypes.string.isRequired,
  postType: PropTypes.string.isRequired,
  isliked: PropTypes.bool.isRequired,
  pinned: PropTypes.bool.isRequired,
};
