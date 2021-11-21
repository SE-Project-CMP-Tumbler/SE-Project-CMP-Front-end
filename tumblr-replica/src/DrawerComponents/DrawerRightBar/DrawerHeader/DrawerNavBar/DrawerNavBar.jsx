import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faSearch, faCommentMedical, faCog,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import './DrawerNavBar.css';
import Menu from './DrawerMenu/DrawerMenu';
// import { create } from '../../../../states/slices/blogSlice';

const Me = false;

/**
 * Component for showing navBar of the returned blog id
 *
 * @component
 * @example
 * <Menu />
 * const Search = false
 * const Follow=false
 * const IsTabletOrMobile=false
 * const UserAccount=User.account()
 * return (
 *   <NavBar CloseCliked={CloseCliked}) />
 * )
 */

function NavBar({ CloseClicked }) {
  const [Search, setSearch] = useState(false);
  const [Follow, setFollow] = useState(true);
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  /**
 * toggel follow state from when the user click follow button
 * @param   {hook} setFollow  hook for updating seting follow
 */
  function HandelFollow() {
    setFollow(!Follow);
  }

  return (

    <div className="nav">
      <div className="make-left">
        <IconButton className="exit-btn">
          <FontAwesomeIcon data-testid="CloseBtn" onClick={CloseClicked} icon={faTimes} color="white" className="x" />
        </IconButton>

        <a href="https://ahmad-ghareeb.tumblr.com/" className="user-account">ahmad-ghareeb.tumblr.com</a>
      </div>
      <div className="make-right">

        {Search && <input data-testid="SearchText" type="text" placeholder="Search" className="search-text" />}
        <IconButton onClick={() => setSearch(!Search)}>
          <FontAwesomeIcon icon={faSearch} color="white" className="sarch-icon" data-testid="SearchBtn" />
        </IconButton>

        <IconButton>
          <FontAwesomeIcon icon={Me ? faCog : faCommentMedical} color="white" className="messages" />
        </IconButton>
        <Menu />
        {(!IsTabletOrMobile && !Me) && <button data-testid="FollowBtn" type="button" className="btn" onClick={HandelFollow}>{Follow ? 'Follow' : 'Unfollow'}</button>}

      </div>
    </div>
  );
}
NavBar.propTypes = {
  CloseClicked: PropTypes.func.isRequired,
  /**
 * if user click the close button it will be call function HandelClose
 */
};
export default NavBar;
