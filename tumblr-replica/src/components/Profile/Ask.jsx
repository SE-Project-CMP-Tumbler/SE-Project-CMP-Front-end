import * as React from 'react';
import './css/ProfileHeader.css';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';

function Ask() {
  return (
    <div>
      <ProfileHeader />
      <div className="navv">
        <div className="navv-menu">
          <ul className="inline-navv">
            <li className="navv-item">
              <Link className="navv-link" to="/profile">POSTS</Link>
            </li>
            <li className="navv-item">
              <Link className="navv-link" to="/profile/likes">LIKES</Link>
            </li>
            <li className="navv-item">
              <Link className="navv-link" to="/profile/followings">FOLLOWINGS</Link>
            </li>
            <li className="navv-item">
              <Link className="navv-link-selected" to="/profile/ask">ASK ME ANYTHING</Link>
            </li>
            <li className="navv-item">
              <Link className="navv-link" to="/profile/submit">SUBMIT A POST</Link>
            </li>
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
                          <textarea name="ask" maxLength="500" className="ask-text" />
                        </div>
                        <div className="ask-footer">
                          <div className="ask-check">
                            <input type="checkbox" className="ask-an" id="ask-anon" />
                            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label htmlFor="ask-anon">Ask anonymously</label>
                          </div>
                          <div className="ask-submit">
                            <button className="ask-btn" type="submit"> Ask </button>
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
  );
}

export default Ask;
