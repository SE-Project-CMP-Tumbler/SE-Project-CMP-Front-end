import * as React from 'react';
import './css/ProfileHeader.css';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';

function Submit() {
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
              <Link className="navv-link" to="/profile/ask">ASK ME ANYTHING</Link>
            </li>
            <li className="navv-item">
              <Link className="navv-link-selected" to="/profile/submit">SUBMIT A POST</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Submit;
