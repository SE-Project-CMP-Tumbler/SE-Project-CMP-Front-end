import * as React from 'react';
import './css/ProfileHeader.css';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import ProfileHeader from './ProfileHeader';
import {
  getBlog, fetchBlog,
} from '../../states/blogslice/blogslice';
import { AskAsynch } from '../../states/askpostslice/askpostslice';
import { getBlogId, fetchBlogId } from '../../states/blognameslice/blogNameSlice';

/**
 * Component to show profileHeader of the blog with his ask card
 * you can ask the blog annonumsly or with your real data
 * @component
 * @name
 * Ask
 * @example
 * <profileHeader BlogId={BlogId} />
 * return (
 *   <Ask />
 * )
 */

function Ask() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const [AskText, setAskText] = useState('');
  const [unknown, setUnknown] = useState(false);
  const Error = useSelector(getBlogId).error;
  const blogid = useSelector(getBlogId).response.id;
  React.useEffect(() => {
    dispatch(fetchBlogId(username));
    dispatch(fetchBlog(blogid));// will use blogId
  }, [blogid]);
  const Blog = useSelector(getBlog).response;
  const statue = useSelector(getBlogId).meta;
  const BlogStatue = useSelector(getBlog).meta;
  function handelChange(event) {
    setAskText(event.target.value);
  }
  function submit() {
    const str = '<div><p>' + AskText + '</p></div>';
    dispatch(AskAsynch({ blogid, str, unknown }));
    setAskText('');
  }
  // eslint-disable-next-line no-nested-ternary
  return statue.msg === 'ok' && BlogStatue.msg === 'ok' ? (Blog.allow_ask ? (
    <div>
      <ProfileHeader BlogId={blogid} />
      <div className="navv">
        <div className="navv-menu">
          <ul className="inline-navv">
            <li className="navv-item">
              <Link className="navv-link" to={`/profile/${Blog.username}`}>POSTS</Link>
            </li>
            {Blog.share_likes && (
              <li className="navv-item">
                <Link className="navv-link" to={`/profile/${Blog.username}/likes`}>LIKES</Link>
              </li>
            )}
            {Blog.allow_ask && (
              <li className="navv-item">
                <Link className="navv-link-selected" to={`/profile/${Blog.username}/ask`}>ASK ME ANYTHING</Link>
              </li>
            )}
            {Blog.allow_submittions && (
              <li className="navv-item">
                <Link className="navv-link" to={`/profile/${Blog.username}/submit`}>SUBMIT A POST</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="ask-container">
          <div className="ask-main">
            <div className="ask-post">
              <div className="ask-content">
                <h2 className="ask-header"><Link className="askk-header" to={`/profile/${Blog.username}/ask`}> Ask me anyhting </Link></h2>
                <div className="ask-body">
                  <div className="ask-frame">
                    <div className="ask-form">
                      <form action="">
                        <div className="ask-textarea">
                          <textarea value={AskText} onChange={handelChange} name="ask" maxLength="500" className="ask-text" />
                        </div>
                        <div className="ask-footer">
                          <div className="ask-check">
                            <input type="checkbox" onClick={() => setUnknown(!unknown)} className="ask-an" id="ask-anon" />
                            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label htmlFor="ask-anon">Ask anonymously</label>
                          </div>
                          <div className="ask-submit">
                            <button onClick={submit} className="ask-btn" type="button"> Ask </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  ) : (
    <div>
      <ProfileHeader BlogId={blogid} />
      {!Blog?.allow_ask && <div className="not-found"> This blog not allow ask </div>}
    </div>
  )) : (
    (Error && (<Navigate to="/notfound" />)) || (
      <>
        <ReactLoading type="bars" color="#fff" width={157} className="loading-block" />
      </>
    )
  );
}

export default Ask;
