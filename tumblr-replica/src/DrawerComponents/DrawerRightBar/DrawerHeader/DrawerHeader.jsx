import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './DrawerNavBar/DrawerNavBar';
import './DrawerHeader.css';

/**
 * Component for navbar, cover img ,profile img ,blog name and blog discription.
 *
 * @component
 * @example
 * <NavBar CloseClicked={CloseClicked} />
 * const UserProfile = User.profile()
 * const UserCover = User.cover()
 * const UserName=User.blogName()
 * const UserDiscription=User.discription()
 * return (
 *   <Header CloseClicked={CloseClicked} />
 * )
 */

function Header({ CloseClicked }) {
  return (
    <div className="Body">
      <NavBar CloseClicked={CloseClicked} />
      <div className="photos">
        <a target="blank" href="https://ahmad-ghareeb.tumblr.com/">
          <img className="cover" src="https://scontent.fcai20-3.fna.fbcdn.net/v/t1.6435-9/110317044_2680778068906885_6342427761542127472_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEswvLZKjPSatwn_ayQKxQETaZe8tBIdmtNpl7y0Eh2a5d5SnznW7t0v4QioaBBFLOVbH5EDay_dHM67irUU19-&_nc_ohc=Y9tgxuTKLigAX_VEG5R&_nc_ht=scontent.fcai20-3.fna&oh=f1c594a34f6440145ab8beea0db642bc&oe=61BAB8A1" alt="cover" />
        </a>
        <a target="blank" href="https://ahmad-ghareeb.tumblr.com/">
          <img className="profile" src="https://scontent.fcai20-3.fna.fbcdn.net/v/t1.6435-9/131377863_2819233718394652_8340224791482069975_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH77U1q39s0YwlxOoOOZpkOYAIITRUXLK1gAghNFRcsrc0lcejGuFpG42urYOWA-vxMg8xj0ct5h4d5y17wAS7Q&_nc_ohc=j6JsQBnTJoMAX9NoP63&_nc_ht=scontent.fcai20-3.fna&oh=d9724e933fbdf7ad74a921a808bd30f4&oe=61BBE0A3" alt="profile pic" />
        </a>
      </div>
      <div className="text">
        <h1 className="title">Ghraboly</h1>
        <p className="description"> saaaaaaaaaaaaaaaaaad W rab el 3bad </p>
      </div>
    </div>
  );
}
Header.propTypes = {
  CloseClicked: PropTypes.func.isRequired,
  /**
* if user click the close button it will be call function HandelClose
*/
};
export default Header;
