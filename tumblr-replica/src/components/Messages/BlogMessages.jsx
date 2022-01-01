import './css/rightContainer.css';
import './css/leftContainer.css';
import './css/Inbox.css';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import LeftContent from './BlogLeftContainer';
import { getBlogs, fetchBlogs } from '../../states/blogslice/blogsslice';
import { fetchAsyncBlogMessages, getBlogMessages } from '../../states/retriveblogmessagesslice/retriveblogmessagesslice';
import { DeleteBlogMsgAsynch } from '../../states/deleteblogmessagesslice/deleteblogmessagesslice';
import { getBlogId, fetchBlogId } from '../../states/blognameslice/blogNameSlice';

/**
 * Component called from app.jsx to show rightpart of messages page
 * then it dispatch the ask and submit posts of this blog to be viewd in left part
 * it view all messages
 * it view the blogs of this user that allow ask or submission
 * @component
 * @name
 * BlogMessages
 * @example
 * <LeftContent BlogId={BlogId} />
 * return (
 *   <BlogMessages />
 * )
 */

const BlogMessages = () => {
  const { username } = useParams();
  const dispatch = useDispatch();// use BlogId
  const BlogId = useSelector(getBlogId).response.id;
  React.useEffect(() => {
    dispatch(fetchBlogId(username));
    dispatch(fetchBlogs());
    dispatch(fetchAsyncBlogMessages(BlogId));
  }, [BlogId, username]);
  const blogs = useSelector(getBlogs).response;
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  function handelDelete() {
    dispatch(DeleteBlogMsgAsynch(BlogId));
    dispatch(fetchAsyncBlogMessages(BlogId));
  }
  const PostStatue = useSelector(getBlogMessages).meta;
  // here i should call some apis
  return (

    <div className="Base">
      <div className="container-m">
        {PostStatue.status === '200' ? <div className="leftContent"><LeftContent BlogId={BlogId} /></div> : (
          <>
            <ReactLoading type="bars" color="#fff" width={157} className="loading-block" />
          </>
        )}

        <div className="rightContent">
          {!IsTabletOrMobile
            && (
              <div className="allMassages">

                <ul className="blogs ul-m">

                  <li className="firstLi li-m">
                    <Link to="/inbox" className="a-m">
                      <FontAwesomeIcon className="icon" icon={faEnvelope} color="white" size="lg" />
                      All massages
                    </Link>
                  </li>
                  {blogs.blogs?.map((blog) => ((blog.allow_ask || blog.allow_submittions) ? (
                    <li className={blog.id === BlogId ? 'secondLi-shaded li-m' : 'secondLi li-m'}>
                      <Link to={'/blog/' + blog.username + '/messages'}>
                        <span className="userName">{blog.username}</span>
                      </Link>
                    </li>
                  ) : <></>))}
                  <li className="thirdLi li-m">
                    <button type="button" onClick={handelDelete} className="deleteBtn">Delete all massages</button>
                  </li>
                </ul>
                <div className="info">
                  Your Inbox is an aggregate view of questions and submissions
                  that any of your blogs receive.
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BlogMessages;
