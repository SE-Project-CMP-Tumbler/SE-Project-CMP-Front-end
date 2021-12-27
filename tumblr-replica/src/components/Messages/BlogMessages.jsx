import './css/rightContainer.css';
import './css/leftContainer.css';
import './css/Inbox.css';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import LeftContent from './LeftContainer';
import { getBlogs, fetchBlogs } from '../../states/blogslice/blogsslice';

const BlogMessages = ({ BlogId }) => {
  const dispatch = useDispatch();// use BlogId
  React.useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  const blogs = useSelector(getBlogs).response;
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  // here i should call some apis
  return (

    <div className="Base">
      <div className="container-m">
        <div className="leftContent"><LeftContent /></div>

        <div className="rightContent">
          {!IsTabletOrMobile
            && (
              <div className="allMassages">

                <ul className="blogs ul-m">

                  <li className="firstLi li-m">
                    <Link to="/inbox">
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
                    <button type="button" className="deleteBtn">Delete all massages</button>
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
BlogMessages.propTypes = {
  BlogId: PropTypes.func.isRequired,
};

export default BlogMessages;
