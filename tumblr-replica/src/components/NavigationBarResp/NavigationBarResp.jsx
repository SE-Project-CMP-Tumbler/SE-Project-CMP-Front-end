/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import './css/dist/NavigationBarResp.css';
import { selectBlogs, fetchBlogs } from '../../states/usertumblr/usertumblrSlice';
import { BottomBar } from '../NavigationBar/subcomponents/ProfileDropDown';
import {
  changeTheme, fonts, colors, backgrounds, toggleOptions, toggleDropDownM,
} from '../NavigationBar/interactions';
import { selectTheme, setTheme } from '../../states/theme/themeSlice';
import { fetchAutocomplete, selectAutocomplete } from '../../states/search/autocompleteSlice';
/**
 *  This is the navigation bar component for small view ports
 *  @returns {ReactJSXElement} JSX Element.
 */
function NavigationBarResp({ pageRef }) {
  const feedValues = {
    likes: '2', following: '3', posts: '', followers: '', activity: '', drafts: '',
  };
  const [toggled, setToggled] = useState(false);
  const divRef = useRef(null);
  const dispatch = useDispatch();
  const blogState = useSelector(selectBlogs);
  useEffect(() => dispatch(fetchBlogs()), []);
  const themeState = useSelector(selectTheme);
  useEffect(() => {
    changeTheme(fonts[themeState.theme],
      colors[themeState.theme], backgrounds[themeState.theme]);
  }, [themeState.theme]);
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
  const handleOnSearch = (string) => {
    dispatch(fetchAutocomplete({ string }));
  };
  const searchRef = useRef(null);
  checkOutside(searchRef);
  return (
    <nav className="basic-nav">
      <div className="mobile-nav">
        <button type="button" className="menu" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          {(toggled) ? (<i className="fas fa-times fa-2x" />) : (<i className="fas fa-bars fa-2x" />)}
        </button>
        <button
          type="button"
          className="tumblr"
          onClick={() => {
            history('/');
            toggleDropDownM(divRef, toggled, setToggled, pageRef);
          }}
        >
          <i className="fab fa-tumblr fa-2x " />
        </button>
        <button
          type="button"
          className="search"
          onClick={() => {
            searchRef.current.style.display = (searchRef.current.style.display === 'none') ? 'block' : 'none';
          }}
        >
          <i className="fas fa-search fa-2x" />
        </button>
      </div>
      <div
        className="search-bar"
        id="search-bar"
        style={{ width: 490, display: 'none' }}
        ref={searchRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            history('/search/' + searchRef.current.childNodes[0].childNodes[0].childNodes[0].childNodes[0].value);
            searchRef.current.childNodes[0].childNodes[0].childNodes[0].childNodes[0].blur();
            searchRef.current.style.display = 'none';
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
      <div className="user-items" ref={divRef} style={{ display: 'none' }}>
        <Link to="/" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-home  fa-lg font-icon" />
              <span>Dashboard</span>
            </div>
            <span> </span>
          </div>
        </Link>
        <Link to="/explore" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="user-item">
            <div className="icon-and-text">
              <i className="far fa-compass  fa-lg font-icon" />
              <span>Explore</span>
            </div>
            <span> </span>
          </div>
        </Link>

        <Link to="/inbox" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-envelope  fa-lg font-icon" />
              <span>Inbox</span>
            </div>
            <span> </span>
          </div>
        </Link>

        <Link to="/messaging" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="user-item">
            <div className="icon-and-text">
              <i className="far fa-comment-alt  fa-lg font-icon" />
              <span>Messagig</span>
            </div>
            <span> </span>
          </div>
        </Link>

        <Link to="/activity" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-bolt  fa-lg fa-lg font-icon" />
              <span>Activity</span>
            </div>
            <span> </span>
          </div>
        </Link>

        <Link to="/likes" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-heart text-gray-700 fa-lg font-icon" />
              <span>Likes</span>
            </div>
            <span>{feedValues.likes}</span>
          </div>
        </Link>
        <Link to="/following" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-user-plus text-gray-700 fa-lg font-icon" />
              <span>Following</span>
            </div>
            <span>{feedValues.following}</span>
          </div>
        </Link>
        <Link to="/settings/account" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-cog text-gray-700 fa-lg font-icon" />
              <span>Settings</span>
            </div>
          </div>
        </Link>
        <a href="https://tumblr.zendesk.com/hc/en-us#_=_" target="_blank" rel="noreferrer" onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-question-circle text-gray-700 fa-lg font-icon" />
              <span>Help</span>
            </div>
          </div>
        </a>
        <div
          onClick={() => {
            dispatch(setTheme((themeState.theme + 1) % 7));
            changeTheme(fonts[themeState.theme], colors[themeState.theme],
              backgrounds[themeState.theme]);
          }}
        >
          <div className="user-item">
            <div className="icon-and-text">
              <i className="fas fa-palette text-gray-700 fa-lg font-icon" />
              <span>Theme</span>
            </div>
            <span>
              {themeState.theme + 1}
              /7
            </span>
          </div>
        </div>
        {(blogState.isLoading)
          ? (<UserTumblrMobile tumblrName="Loading..." tumblrTitle="Loading..." tumblrIcon="./profile.png" feedValues={feedValues} divRef={divRef} toggled={toggled} setToggled={setToggled} pageRef={pageRef} />)
          : (
            (blogState.blogs).map((blog) => (
              <UserTumblrMobile
                tumblrName={blog.username}
                tumblrTitle={blog.title}
                tumblrIcon={blog.avatar ? blog.avatar : './profile2.png'}
                feedValues={feedValues}
                divRef={divRef}
                toggled={toggled}
                setToggled={setToggled}
                pageRef={pageRef}
              />
            ))

          ) }
        <BottomBar />
      </div>
    </nav>
  );
}

function UserTumblrMobile({
  tumblrName, tumblrTitle, tumblrIcon, feedValues, divRef, toggled, setToggled, pageRef,
}) {
  const optionsRef = useRef(null);
  return (
    <div className="user-tumblr">
      <div className="blog-item" role="banner" onClick={() => { toggleOptions(optionsRef); }}>
        <div className="blog-details">
          <div className="blog-icon-box">
            <img src={tumblrIcon} alt="blog icon" />
          </div>
          <div className="blog-name-title">
            <p className="tumblr-name">{ tumblrName }</p>
            <p className="tumblr-title">{ tumblrTitle }</p>
          </div>
        </div>
        <button type="button" className="hide-items" onClick={() => { toggleOptions(optionsRef); }}>
          <i className="fas fa-chevron-down" />
        </button>
      </div>
      <div className="blog-options" ref={optionsRef}>
        <Link to={`/blog/${tumblrName}`} onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="blog-option">
            <p>Posts</p>
            <p>{feedValues.posts}</p>
          </div>
        </Link>
        <Link to={`/blog/${tumblrName}/followers`} onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="blog-option">
            <p>Followers</p>
            <p>{feedValues.followers}</p>
          </div>
        </Link>
        <Link to={`/blog/${tumblrName}/activity`} onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="blog-option">
            <p>Activity</p>
            <p>{feedValues.activity}</p>
          </div>
        </Link>
        <Link to={`/blog/${tumblrName}/drafts`} onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="blog-option">
            <p>Drafts</p>
            <p>{feedValues.drafts}</p>
          </div>
        </Link>
        <Link to={`/settings/blog/${tumblrName}`} onClick={() => { toggleDropDownM(divRef, toggled, setToggled, pageRef); }}>
          <div className="blog-option">
            <p>Edit Appearance</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBarResp;
