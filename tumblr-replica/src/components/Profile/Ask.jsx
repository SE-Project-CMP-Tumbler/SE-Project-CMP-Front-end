import * as React from 'react';
import './css/ProfileHeader.css';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileHeader from './ProfileHeader';
import {
  getBlog, fetchBlog,
} from '../../states/blogslice/blogslice';
import { getAsk, AskAsynch } from '../../states/askpostslice/askpostslice';

function Ask() {
  const { blogid } = useParams();
  const dispatch = useDispatch();
  const [AskText, setAskText] = useState('');
  const [unknown, setUnknown] = useState(false);
  React.useEffect(() => {
    dispatch(fetchBlog(blogid));// will use blogId
  }, []);
  const Blog = useSelector(getBlog).response;
  const AskStatue = useSelector(getAsk).meta;
  function handelChange(event) {
    setAskText(event.target.value);
  }
  function submit() {
    const str = '<div><p>' + AskText + '</p></div>';
    dispatch(AskAsynch(blogid, str, unknown));
    if (AskStatue.statues === '200') {
      console.log('sucsses'); // will be changed after the api completed
      setAskText('');
      setUnknown(false);
    } else {
      console.log('fail');
    }
  }
  return Blog.allow_ask ? (
    <div>
      <ProfileHeader BlogId={blogid} />
      <div className="navv">
        <div className="navv-menu">
          <ul className="inline-navv">
            <li className="navv-item">
              <Link className="navv-link" to={`/profile/${blogid}`}>POSTS</Link>
            </li>
            {Blog.share_likes && (
              <li className="navv-item">
                <Link className="navv-link" to={`/profile/${blogid}/likes`}>LIKES</Link>
              </li>
            )}
            {Blog.allow_ask && (
              <li className="navv-item">
                <Link className="navv-link-selected" to={`/profile/${blogid}/ask`}>ASK ME ANYTHING</Link>
              </li>
            )}
            {Blog.allow_submittions && (
              <li className="navv-item">
                <Link className="navv-link" to={`/profile/${blogid}/submit`}>SUBMIT A POST</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="ask-container">
          <div className="ask-main">
            <div className="ask-post">
              <div className="ask-content">
                <h2 className="ask-header"><Link className="askk-header" to="/ask"> Ask me anyhting </Link></h2>
                <div className="ask-body">
                  <div className="ask-frame">
                    <div className="ask-form">
                      <form action="">
                        <div className="ask-textarea">
                          <textarea onChange={handelChange} name="ask" maxLength="500" className="ask-text" />
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
  );
}

export default Ask;
