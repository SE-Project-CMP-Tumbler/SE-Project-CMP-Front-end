/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './css/dist/NavigationBar.css';
import Box from '@mui/material/Box';
// mport ChatDropDown from './subcomponents/ChatDropDown';
import ProfileDropDown from './subcomponents/ProfileDropDown';
import NotificationsDropDown from './subcomponents/NotificationsDropDown';
import LogInButton from '../LogOutHomePage/subcomponents/LogInButton/LogInButton';
import SignUpButton from '../LogOutHomePage/subcomponents/SignUpButton/SignUpButton';
import { selectUser } from '../../states/User/UserSlice';
// eslint-disable-next-line no-unused-vars
import ChatTo from '../ChatTo/ChatTo';
import ChatBoxes from '../ChatBoxes/ChatBoxes';
import {
  toggleDropDown, toggleIconColor, toggleChatIcon,
} from './interactions';
import { fetchAutocomplete, selectAutocomplete } from '../../states/search/autocompleteSlice';
/**
 * This is the navigation bar component for large view ports.
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function NavigationBar() {
  // User-related
  const initialStyle = {
    height: '34px',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    border: '0px solid rgba(255, 255, 255, 0.3)',
    placeholderColor: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem',
    borderRadius: '5px',
    iconColor: 'rgba(255, 255, 255, 0.7)',

  };

  const [searchStyle, setSearchStyle] = useState(initialStyle);
  const [iconShow, setIconShow] = useState(true);

  /**
 * If you click outside, search drop down should be hidden.
 * @method
 * * @param {MutableRefObject} ref - the HTML node representing the search bar.
 */
  function checkOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        const inputContent = ref.current.childNodes[0]
          .childNodes[0].childNodes[0].childNodes[0].value;
        if (ref.current && !ref.current.contains(event.target) && inputContent === '') {
          setSearchStyle(initialStyle);
          setIconShow(true);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
      // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }
  const history = useNavigate();
  /**
 * @method
 * Upon focus search bar style should change.
 */
  const handleOnFocus = () => {
    const newStyle = {
      height: '34px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      border: '0px solid rgba(255, 255, 255, 0.3)',
      placeholderColor: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.9rem',
      borderRadius: '5px',
    };
    setSearchStyle(newStyle);
    setIconShow(false);
  };
  const autocompleteState = useSelector(selectAutocomplete);
  const dispatch = useDispatch();
  /**
 * @method
 * Upon search, should fetch data from backend
 * * @param {String} string - the search field's content.
 */
  const handleOnSearch = (string) => {
    dispatch(fetchAutocomplete({ string }));
  };
  const searchRef = useRef(null);
  checkOutside(searchRef);
  const user = useSelector(selectUser);
  return (
    <nav className="nav-styles">
      <div className="nav-resp">
        <div className="tumblr-logo-cont">
          <Link to="/dashboard" data-testid="dashboard-button">
            <button type="button" aria-label="dashboard"><i className="fab fa-tumblr fa-2x " /></button>
          </Link>
        </div>
        <div
          className="search-bar"
          style={{ width: 490 }}
          ref={searchRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              history('/search/' + searchRef.current.childNodes[0].childNodes[0].childNodes[0].childNodes[0].value);
              searchRef.current.childNodes[0].childNodes[0].childNodes[0].childNodes[0].blur();
            }
          }}
        >
          <ReactSearchAutocomplete
            placeholder="    Search Tumblr"
            items={autocompleteState.words}
            onFocus={handleOnFocus}
            showClear={false}
            showIcon={iconShow}
            styling={searchStyle}
            key={searchStyle}
            onSearch={handleOnSearch}
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
  const [chatClicked, setChatClicked] = useState(false);
  return (
    <div className="icons-container">
      <Link
        to="/dashboard"
        className="icon-style dash-icon"
        onClick={() => {
          toggleIconColor(dashboardRef, allIconRefs);
        }}
      >
        <abbr title="Dashboard"><i className="fas fa-home  fa-lg" style={{ filter: 'brightness(100%)' }} ref={dashboardRef} /></abbr>
      </Link>
      <Link
        to="/explore/recommended-for-you"
        className="icon-style"
        onClick={() => {
          toggleIconColor(exploreRef, allIconRefs);
        }}
      >
        <abbr title="Explore"><i className="far fa-compass  fa-lg" style={{ filter: 'brightness(70%)' }} ref={exploreRef} /></abbr>
      </Link>
      <Link
        to="/inbox"
        className="icon-style"
        onClick={() => {
          toggleIconColor(inboxRef, allIconRefs);
        }}
      >
        <abbr title="Inbox"><i className="fas fa-envelope  fa-lg" style={{ filter: 'brightness(70%)' }} ref={inboxRef} /></abbr>
      </Link>
      <div className="drop chat-drop" ref={chatRef}>
        <button
          type="button"
          className="icon-style"
          onClick={() => {
            setChatClicked(!chatClicked);
            toggleChatIcon(chatRef);
          }}
        >
          <abbr title="Chat"><i className="far fa-comment-alt  fa-lg" style={{ filter: 'brightness(70%)' }} /></abbr>
        </button>
        {chatClicked && <ChatTo />}
        <ChatBoxes />
      </div>
      <div className="drop notifications-drop" ref={notificationsRef}>
        <button
          type="button"
          className="icon-style"
          onClick={() => {
            toggleDropDown(notificationsRef, allRefs);
            if (chatClicked) setChatClicked(!chatClicked);
          }}
        >
          <abbr title="Notifications"><i className="fas fa-bolt  fa-lg" style={{ filter: 'brightness(70%)' }} /></abbr>
        </button>
        <NotificationsDropDown style={{ display: 'none' }} buttonRef={notificationsRef} />
      </div>
      <div className="drop user-drop" ref={profileRef}>
        <button
          type="button"
          to="/"
          className="icon-style"
          onClick={() => {
            toggleDropDown(profileRef, allRefs);
            if (chatClicked) setChatClicked(!chatClicked);
          }}
        >
          <abbr title="My Tumblrs"><i className="fas fa-user  fa-lg" style={{ filter: 'brightness(70%)' }} /></abbr>
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
