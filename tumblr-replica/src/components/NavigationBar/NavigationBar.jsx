import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './css/dist/NavigationBar.css';
import Box from '@mui/material/Box';
import ChatDropDown from './subcomponents/ChatDropDown';
import ProfileDropDown from './subcomponents/ProfileDropDown';
import NotificationsDropDown from './subcomponents/NotificationsDropDown';
import LogInButton from '../LogInButton/LogInButton';
import SignUpButton from '../SignUpButton/SignUpButton';
import { selectUser } from '../../states/user/UserSlice';

/**
 * Toggles one of the three main drop down menus of the navigation bar.
 * @method
 * @param {MutableRefObject} toggleRef - The ref for HTML node that should have its display toggled.
 * @param {Array} allRefs - Array of refs for HTML nodes that should have their display set to none.
 */
function toggleDropDown(toggleRef, allRefs) {
  const el = toggleRef;
  el.current.childNodes[1].style.display = (el.current.childNodes[1].style.display) === 'none' ? 'block' : 'none';
  const els = allRefs;
  els.forEach((currentRef) => {
    const element = currentRef;
    if (element !== toggleRef) { element.current.childNodes[1].style.display = 'none'; }
  });
}
/**
 * This is the navigation bar component for large view ports.
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function NavigationBar() {
  const chatRef = useRef(null);
  const notificationsRef = useRef(null);
  const profileRef = useRef(null);
  const allRefs = [chatRef, notificationsRef, profileRef];
  const user = useSelector(selectUser);
  return (
    <nav className="nav-styles">
      <div className="nav-resp">
        <div className="tumblr-logo-cont">
          <Link to="/dashboard">
            <i className="fab fa-tumblr fa-2x  md:fa-lg " />
          </Link>
        </div>
        <div className="search-bar">
          <i className="fas fa-search search-icon" />
          <input
            className="search-bar-input"
            type="search"
            name="search"
            size="65"
            placeholder="Search Tumblr"
          />
        </div>
      </div>

      <div>
        {user.loggedin
          ? (
            <div className="icons-container">
              <Link to="/dashboard" className="icon-style">
                <abbr title="Dashboard"><i className="fas fa-home  fa-lg" /></abbr>
              </Link>
              <Link to="/explore/recommended-for-you" className="icon-style">
                <abbr title="Explore"><i className="far fa-compass  fa-lg" /></abbr>
              </Link>
              <Link to="/inbox" className="icon-style">
                <abbr title="Inbox"><i className="fas fa-envelope  fa-lg" /></abbr>
              </Link>
              <div className="drop chat-drop" ref={chatRef}>
                <button type="button" className="icon-style" onClick={() => { toggleDropDown(chatRef, allRefs); }}>
                  <abbr title="Chat"><i className="far fa-comment-alt  fa-lg" /></abbr>
                </button>
                <ChatDropDown style={{ display: 'none' }} />
              </div>
              <div className="drop notifications-drop" ref={notificationsRef}>
                <button type="button" className="icon-style" onClick={() => { toggleDropDown(notificationsRef, allRefs); }}>
                  <abbr title="Notifications"><i className="fas fa-bolt  fa-lg" /></abbr>
                </button>
                <NotificationsDropDown style={{ display: 'none' }} />
              </div>
              <div className="drop user-drop" ref={profileRef}>
                <button type="button" to="/" className="icon-style" onClick={() => { toggleDropDown(profileRef, allRefs); }}>
                  <abbr title="My Tumblrs"><i className="fas fa-user  fa-lg" /></abbr>
                </button>
                <ProfileDropDown style={{ display: 'none' }} />
              </div>
              <Link to="/new" className="icon-style">
                <abbr title="New Post"><i className="fas fa-pen-square blue-pen fa-lg" /></abbr>
              </Link>
            </div>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <LogInButton />
              <SignUpButton />
            </Box>
          )}
      </div>
    </nav>
  );
}

export default NavigationBar;
