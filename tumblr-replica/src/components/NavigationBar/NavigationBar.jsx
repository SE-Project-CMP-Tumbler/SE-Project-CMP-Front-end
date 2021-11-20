import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/dist/NavigationBar.css';
import {
  navStyles, navResp, tubmlrLogoCont, searchBar, searchBarInput, iconsContainer, iconStyle,
} from './css/Raw';
import ChatDropDown from './subcomponents/ChatDropDown';
import ProfileDropDown from './subcomponents/ProfileDropDown';
import NotificationsDropDown from './subcomponents/NotificationsDropDown';

function toggleDropDown(toggleRef, allRefs) {
  const el = toggleRef;
  el.current.childNodes[1].style.display = (el.current.childNodes[1].style.display) === 'none' ? 'block' : 'none';
  const els = allRefs;
  els.forEach((currentRef) => {
    const element = currentRef;
    if (element !== toggleRef) { element.current.childNodes[1].style.display = 'none'; }
  });
}

function NavigationBar() {
  const chatRef = useRef(null);
  const notificationsRef = useRef(null);
  const profileRef = useRef(null);
  const allRefs = [chatRef, notificationsRef, profileRef];
  return (
    <nav className={navStyles}>
      <div className={navResp}>
        <div className={tubmlrLogoCont}>
          <Link to="/dashboard">
            <i className="fab fa-tumblr fa-2x text-white md:fa-lg " />
          </Link>
        </div>
        <div className={searchBar}>
          <i className="fas fa-search text-gray-400 absolute left-2 top-2" />
          <input
            className={searchBarInput}
            type="search"
            name="search"
            size="47"
            placeholder="Search Tumblr"
          />
        </div>
      </div>

      <div>
        <div className={iconsContainer}>
          <Link to="/dashboard" className={iconStyle}>
            <abbr title="Dashboard"><i className="fas fa-home text-white fa-lg" /></abbr>
          </Link>
          <Link to="/explore/recommended-for-you" className={iconStyle}>
            <abbr title="Explore"><i className="far fa-compass text-white fa-lg" /></abbr>
          </Link>
          <Link to="/inbox" className={iconStyle}>
            <abbr title="Inbox"><i className="fas fa-envelope text-white fa-lg" /></abbr>
          </Link>
          <div className="drop chat-drop" ref={chatRef}>
            <button type="button" className={iconStyle} onClick={() => { toggleDropDown(chatRef, allRefs); }}>
              <abbr title="Chat"><i className="far fa-comment-alt text-white fa-lg" /></abbr>
            </button>
            <ChatDropDown style={{ display: 'none' }} />
          </div>
          <div className="drop notifications-drop" ref={notificationsRef}>
            <button type="button" className={iconStyle} onClick={() => { toggleDropDown(notificationsRef, allRefs); }}>
              <abbr title="Notifications"><i className="fas fa-bolt text-white fa-lg" /></abbr>
            </button>
            <NotificationsDropDown style={{ display: 'none' }} />
          </div>
          <div className="drop user-drop" ref={profileRef}>
            <button type="button" to="/" className={iconStyle} onClick={() => { toggleDropDown(profileRef, allRefs); }}>
              <abbr title="My Tumblrs"><i className="fas fa-user text-white fa-lg" /></abbr>
            </button>
            <ProfileDropDown style={{ display: 'none' }} />
          </div>
          <Link to="/new" className={iconStyle}>
            <abbr title="New Post"><i className="fas fa-pen-square text-post-blue fa-lg transform scale-150" /></abbr>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
