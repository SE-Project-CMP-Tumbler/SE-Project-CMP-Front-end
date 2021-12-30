/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logOutThunk, logOutThunkR } from '../../../states/User/UserSlice';
import { MOCK, REAL, SERVICETYPE } from '../../../apis/globalAPI';
import { selectBlogs, fetchBlogs } from '../../../states/usertumblr/usertumblrSlice';
import {
  useOutsideAlerter, toggleOptions, changeTheme, fonts, colors, backgrounds, toggleDrop,
} from '../interactions';
import { selectTheme, setTheme } from '../../../states/theme/themeSlice';

/**
 * This is the component for the user profile's dropdown (last one on the right)
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function ProfileDropDown({ buttonRef }) {
  const feedValues = {
    likes: '', following: '', posts: '', followers: '', activity: '', drafts: '', queue: '',
  };
  const dispatch = useDispatch();
  const blogState = useSelector(selectBlogs);
  useEffect(() => dispatch(fetchBlogs()), []);
  const user = useSelector(selectUser);
  const profileDropRef = useRef(null);
  useOutsideAlerter(profileDropRef, buttonRef);
  return (
    <div className="drop-content user-drop-content" ref={profileDropRef} style={{ display: 'none' }}>
      <div className="drop-header user-drop-header">
        <p>Account</p>
        <Link
          to="/"
          onClick={() => {
            if (SERVICETYPE === MOCK) {
              dispatch(logOutThunk(user.accessToken));
            } else if (SERVICETYPE === REAL) {
              dispatch(logOutThunkR(user.accessToken));
            }
          }}
        >
          Log out
        </Link>
      </div>
      <UserItems feedValues={feedValues} profileDropRef={profileDropRef} />
      <div className="drop-header user-drop-header">
        <p>Tumblrs</p>
        <Link to="/new/blog">+ New</Link>
      </div>
      {(blogState.isLoading)
        ? (<UserTumblr tumblrName="Loading..." tumblrTitle="Loading..." tumblrIcon="./profile.png" feedValues={feedValues} profileDropRef={profileDropRef} />)
        : (
          (blogState.blogs).map((blog) => (
            <UserTumblr
              tumblrName={blog.username}
              tumblrTitle={blog.title}
              tumblrIcon={blog.avatar ? blog.avatar : './profile2.png'}
              feedValues={feedValues}
              profileDropRef={profileDropRef}
            />
          ))
        ) }
      <BottomBar />
    </div>
  );
}

/**
 *  This is the the component representing the user's options in the user profile drop down.
 * @component
 * @param {Object} feedValues - an object with the count of likes, following, followers,...
 * @returns {ReactJSXElement} JSX Element.
 */
function UserItems({ feedValues, profileDropRef }) {
  const themeState = useSelector(selectTheme);
  const dispatch = useDispatch();
  useEffect(() => {
    changeTheme(fonts[themeState.theme],
      colors[themeState.theme], backgrounds[themeState.theme]);
  }, [themeState.theme]);
  return (
    <>
      <Link to="/likes" onClick={() => { toggleDrop(profileDropRef); }}>
        <div className="user-item">
          <div>
            <i className="fas fa-heart text-gray-700 fa-lg" />
            <span>Likes</span>
          </div>
          <span>{feedValues.likes}</span>
        </div>
      </Link>
      <Link to="/following" onClick={() => { toggleDrop(profileDropRef); }}>
        <div className="user-item">
          <div>
            <i className="fas fa-user-plus text-gray-700 fa-lg" />
            <span>Following</span>
          </div>
          <span>{feedValues.following}</span>
        </div>
      </Link>
      <Link to="/settings/account" onClick={() => { toggleDrop(profileDropRef); }}>
        <div className="user-item">
          <div>
            <i className="fas fa-cog text-gray-700 fa-lg" />
            <span>Settings</span>
          </div>
        </div>
      </Link>
      <a href="https://tumblr.zendesk.com/hc/en-us#_=_" target="_blank" rel="noreferrer">
        <div className="user-item">
          <div>
            <i className="fas fa-question-circle text-gray-700 fa-lg" />
            <span>Help</span>
          </div>
        </div>
      </a>
      <button
        className="user-item"
        onClick={() => {
          dispatch(setTheme((themeState.theme + 1) % 7));
          changeTheme(fonts[themeState.theme], colors[themeState.theme],
            backgrounds[themeState.theme]);
        }}
        type="button"
      >
        <div>
          <i className="fas fa-palette text-gray-700 fa-lg" />
          <span>Theme</span>
        </div>
        <span>
          {themeState.theme + 1}
          /7
        </span>
      </button>
    </>
  );
}

/**
 * This is the component representing any of the tumblrs that the user controls
 * @component
 * @param {String} tumblrName - the tumblr's name
 * @param {String} tumblrTitle - the tumblr's title
 * @param {String} tumblrIcon - the tumblr's profile icon
 * @param {Object} feedValues - an object with the count of likes, following, followers,...
 * @returns {ReactJSXElement} JSX Element.
 */
export function UserTumblr({
  tumblrName, tumblrTitle, tumblrIcon, feedValues, profileDropRef,
}) {
  const optionsRef = useRef(null);
  return (
    <div className="user-tumblr">
      <div className="blog-item">
        <Link to={`/blog/${tumblrName}`} onClick={() => { toggleDrop(profileDropRef); }}>
          <div className="blog-details">
            <div className="blog-icon-box">
              <img src={tumblrIcon} alt="blog icon" />
            </div>
            <div className="blog-name-title">
              <p className="tumblr-name">{ tumblrName }</p>
              <p className="tumblr-title">{ tumblrTitle }</p>
            </div>
          </div>
        </Link>
        <button type="button" className="hide-items" onClick={() => { toggleOptions(optionsRef); }}>
          <i className="fas fa-address-card text-gray-700" />
        </button>
      </div>
      <div className="blog-options" ref={optionsRef}>
        <Link to={`/blog/${tumblrName}`} onClick={() => { toggleDrop(profileDropRef); }}>
          <div className="blog-option">
            <p>Posts</p>
            <p>{feedValues.posts}</p>
          </div>
        </Link>
        <Link to={`/blog/${tumblrName}/followers`} onClick={() => { toggleDrop(profileDropRef); }}>
          <div className="blog-option">
            <p>Followers</p>
            <p>{feedValues.followers}</p>
          </div>
        </Link>
        <Link to={`/blog/${tumblrName}/activity`} onClick={() => { toggleDrop(profileDropRef); }}>
          <div className="blog-option">
            <p>Activity</p>
            <p>{feedValues.activity}</p>
          </div>
        </Link>
        <Link to={`/blog/${tumblrName}/drafts`} onClick={() => { toggleDrop(profileDropRef); }}>
          <div className="blog-option">
            <p>Drafts</p>
            <p>{feedValues.drafts}</p>
          </div>
        </Link>
        <Link to={`/settings/blog/${tumblrName}`} onClick={() => { toggleDrop(profileDropRef); }}>
          <div className="blog-option">
            <p>Edit Appearance</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

UserTumblr.propTypes = {
  tumblrName: PropTypes.string.isRequired,
  tumblrTitle: PropTypes.string.isRequired,
  tumblrIcon: PropTypes.string.isRequired,
  feedValues: PropTypes.objectOf(PropTypes.string).isRequired,
};

UserItems.propTypes = {
  feedValues: PropTypes.objectOf(PropTypes.string).isRequired,
};

/**
 * This is the component representing the bottom bar in the user profile's drop down.
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
export function BottomBar() {
  return (
    <div className="misc-drop-header">
      <a href="https://www.tumblr.com/about" target="_blank" rel="noreferrer" className="misc-item">About</a>
      <a href="https://www.tumblr.com/apps" target="_blank" rel="noreferrer" className="misc-item">Apps</a>
      <a href="https://www.tumblr.com/policy/en/terms-of-service" target="_blank" rel="noreferrer" className="misc-item">Legal</a>
      <a href="https://www.tumblr.com/privacy" target="_blank" rel="noreferrer" className="misc-item">Privacy</a>
    </div>
  );
}
export default ProfileDropDown;
