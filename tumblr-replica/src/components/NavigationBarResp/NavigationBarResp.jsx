import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/dist/NavigationBarResp.css';

/**
 * Toggles the dropdown menu of the mobile navigation bar.
 * @method
 * @param {MutableRefObject} divRef - The ref for HTML node that should have its display toggled.
 */
function toggleDropDown(divRef) {
  const el = divRef;
  el.current.style.display = (el.current.style.display) === 'none' ? 'block' : 'none';
}
/**
 *  This is the navigation bar component for small view ports
 *  @returns {ReactJSXElement} JSX Element.
 */
function NavigationBarResp() {
  const feedValues = {
    likes: 2, following: 3, posts: 5, followers: 3, activity: 6, drafts: 3, queue: 2,
  };
  const divRef = useRef(null);
  return (
    <nav className="basic-nav">
      <div className="mobile-nav">
        <button type="button" className="menu" onClick={() => { toggleDropDown(divRef); }}>
          <i className="fas fa-bars fa-2x" />
        </button>
        <button type="button" className="tumblr">
          <i className="fab fa-tumblr fa-2x " />
        </button>
        <button type="button" className="search">
          <i className="fas fa-search fa-2x" />
        </button>
      </div>
      <div className="user-items" ref={divRef} style={{ display: 'none' }}>

        <Link to="/">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-home  fa-lg font-icon" />
              <span>Dashboard</span>
            </div>
            <span> </span>
          </div>
        </Link>
        <Link to="/explore">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="far fa-compass  fa-lg font-icon" />
              <span>Explore</span>
            </div>
            <span> </span>
          </div>
        </Link>

        <Link to="/inbox">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-envelope  fa-lg font-icon" />
              <span>Inbox</span>
            </div>
            <span> </span>
          </div>
        </Link>

        <Link to="/messaging">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="far fa-comment-alt  fa-lg font-icon" />
              <span>Messagig</span>
            </div>
            <span> </span>
          </div>
        </Link>

        <Link to="/activity">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-bolt  fa-lg fa-lg font-icon" />
              <span>Activity</span>
            </div>
            <span> </span>
          </div>
        </Link>

        <Link to="/likes">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-heart text-gray-700 fa-lg font-icon" />
              <span>Likes</span>
            </div>
            <span>{feedValues.likes}</span>
          </div>
        </Link>
        <Link to="/following">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-user-plus text-gray-700 fa-lg font-icon" />
              <span>Following</span>
            </div>
            <span>{feedValues.following}</span>
          </div>
        </Link>
        <Link to="/settings/account">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-cog text-gray-700 fa-lg font-icon" />
              <span>Settings</span>
            </div>
          </div>
        </Link>
        <a href="https://tumblr.zendesk.com/hc/en-us#_=_" target="_blank" rel="noreferrer">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-question-circle text-gray-700 fa-lg font-icon" />
              <span>Help</span>
            </div>
          </div>
        </a>
        <Link to="/">
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-palette text-gray-700 fa-lg font-icon" />
              <span>Theme</span>
            </div>
            <span>1/12</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBarResp;
