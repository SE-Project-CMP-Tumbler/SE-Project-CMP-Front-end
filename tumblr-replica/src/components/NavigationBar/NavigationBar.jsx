import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './css/dist/NavigationBar.css';
import Box from '@mui/material/Box';
import ChatDropDown from './subcomponents/ChatDropDown';
import ProfileDropDown from './subcomponents/ProfileDropDown';
import NotificationsDropDown from './subcomponents/NotificationsDropDown';
import LogInButton from '../LogOutHomePage/subcomponents/LogInButton/LogInButton';
import SignUpButton from '../LogOutHomePage/subcomponents/SignUpButton/SignUpButton';
import { selectUser } from '../../states/User/UserSlice';
import { toggleDropDown, toggleIconColor } from './interactions';

/**
 * This is the navigation bar component for large view ports.
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function NavigationBar() {
  // User-related
  const user = useSelector(selectUser);
  return (
    <nav className="nav-styles">
      <div className="nav-resp">
        <div className="tumblr-logo-cont">
          <Link to="/dashboard">
            <button type="button" aria-label="dashboard"><i className="fab fa-tumblr fa-2x " /></button>
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
            <LoggedInGroup />
          ) : (
            <LoggedOutGroup />
          )}
      </div>
    </nav>
  );
}

/**
 * This is the part of the navigationbar which has icons that should only show up if logged in.
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function LoggedInGroup() {
  // refs for the dropdowns
  const chatRef = useRef(null);
  const notificationsRef = useRef(null);
  const profileRef = useRef(null);
  const allRefs = [chatRef, notificationsRef, profileRef];
  // refs for the icon colors (dashboard, explore, inbox)
  const dashboardRef = useRef(null);
  const exploreRef = useRef(null);
  const inboxRef = useRef(null);
  const allIconRefs = [dashboardRef, exploreRef, inboxRef];
  return (
    <div className="icons-container">
      <Link to="/dashboard" className="icon-style dash-icon" onClick={() => { toggleIconColor(dashboardRef, allIconRefs); }}>
        <abbr title="Dashboard"><i className="fas fa-home  fa-lg" ref={dashboardRef} /></abbr>
      </Link>
      <Link to="/explore/recommended-for-you" className="icon-style" onClick={() => { toggleIconColor(exploreRef, allIconRefs); }}>
        <abbr title="Explore"><i className="far fa-compass  fa-lg" style={{ color: 'rgba(255, 255, 255, 0.698)' }} ref={exploreRef} /></abbr>
      </Link>
      <Link to="/inbox" className="icon-style" onClick={() => { toggleIconColor(inboxRef, allIconRefs); }}>
        <abbr title="Inbox"><i className="fas fa-envelope  fa-lg" style={{ color: 'rgba(255, 255, 255, 0.698)' }} ref={inboxRef} /></abbr>
      </Link>
      <div className="drop chat-drop" ref={chatRef}>
        <button type="button" className="icon-style" onClick={() => { toggleDropDown(chatRef, allRefs); }}>
          <abbr title="Chat"><i className="far fa-comment-alt  fa-lg" style={{ color: 'rgba(255, 255, 255, 0.698)' }} /></abbr>
        </button>
        <ChatDropDown style={{ display: 'none' }} buttonRef={chatRef} />
      </div>
      <div className="drop notifications-drop" ref={notificationsRef}>
        <button type="button" className="icon-style" onClick={() => { toggleDropDown(notificationsRef, allRefs); }}>
          <abbr title="Notifications"><i className="fas fa-bolt  fa-lg" style={{ color: 'rgba(255, 255, 255, 0.698)' }} /></abbr>
        </button>
        <NotificationsDropDown style={{ display: 'none' }} buttonRef={notificationsRef} />
      </div>
      <div className="drop user-drop" ref={profileRef}>
        <button type="button" to="/" className="icon-style" onClick={() => { toggleDropDown(profileRef, allRefs); }}>
          <abbr title="My Tumblrs"><i className="fas fa-user  fa-lg" style={{ color: 'rgba(255, 255, 255, 0.698)' }} /></abbr>
        </button>
        <ProfileDropDown style={{ display: 'none' }} buttonRef={profileRef} />
      </div>
      <Link to="/new" className="icon-style">
        <abbr title="New Post"><i className="fas fa-pen-square blue-pen fa-lg" /></abbr>
      </Link>
    </div>
  );
}

/**
 * This is the part of the navigationbar which has button that should show up only if logged out.
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function LoggedOutGroup() {
  const location = useLocation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      { location.pathname.endsWith('login') === false ? (
        <Box sx={{
          spacing: 8, mr: 1, ml: 1, mb: 1,
        }}
        >
          <LogInButton />
        </Box>
      ) : (<Box />) }
      { location.pathname.endsWith('register') === false ? (
        <Box sx={{
          spacing: 8, mr: 1, ml: 1, mb: 1,
        }}
        >
          <SignUpButton />
        </Box>
      ) : (<Box />) }
    </Box>
  );
}

export default NavigationBar;
