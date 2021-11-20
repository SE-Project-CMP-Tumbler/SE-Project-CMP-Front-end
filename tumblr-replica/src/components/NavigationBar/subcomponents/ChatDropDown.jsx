import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * This handles clicking on a new message when the chat drop down is open
 * @method
 * @param {MutableRefObject} chatsRef - the ref for the HTML node of the chat items container
 * @param {MutableRefObject} followingRef - the ref for the node of the following items container
 * @param {MutableRefObject} buttonRef - the ref for the node of the button pressed
 */
function newMessageHandler(chatsRef, followingRef, buttonRef) {
  const cEl = chatsRef;
  const fEl = followingRef;
  const chatDisplay = cEl.current.style.display;
  const followingDisplay = fEl.current.style.display;
  fEl.current.style.display = 'block';
  [cEl.current.style.display, fEl.current.style.display] = [followingDisplay, chatDisplay];
  const bEl = buttonRef;
  bEl.current.innerHTML = (bEl.current.innerHTML === 'New Message') ? 'Nevermind' : 'New Message';
  bEl.current.style.color = (bEl.current.innerHTML === 'New Message') ? 'rgb(0, 184, 255)' : 'rgba(0, 0, 0, 0.65)';
}
/**
 *  This is the component for the chat dropdown
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function ChatDropDown() {
  const chatsRef = useRef(null);
  const followingRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <div className="drop-content chat-drop-content">
      <div className="drop-header chat-drop-header">
        <div className="profile">
          <div className="icon-box">
            <img src="/profile.png" alt="profile icon" />
          </div>
          <p>essamwisam</p>
          <i className="fas fa-chevron-down text-black fa-sm chevron" />
          <div className="tumblr-list">
            <TumblrItem tumblrName="Jaximus" tumblrTitle="Grandmaster" tumblrIcon="/profile2.png" />
            <TumblrItem tumblrName="Malzahar" tumblrTitle="Landlord" tumblrIcon="/profile3.png" />
          </div>
        </div>
        <button type="button" style={{ color: 'rgb(0, 184, 255)' }} ref={buttonRef} onClick={() => { newMessageHandler(chatsRef, followingRef, buttonRef); }}>New Message</button>
      </div>
      <div className="chat-items" ref={chatsRef} style={{ display: 'block' }}>
        <ChatItem senderName="Zoe" isOnline={false} senderIcon="/profile3.png" chatContent="It feels nice here in..." />
        <ChatItem senderName="Malza" isOnline={false} senderIcon="/profile.png" chatContent="Arrre we there yet?" />
        <ChatItem senderName="Nautilus" isOnline senderIcon="/profile2.png" chatContent="Okay." />
      </div>
      <div className="tumblr-list" ref={followingRef} style={{ display: 'none' }}>
        <div className="recently-followed">
          <p> Recently Followed </p>
        </div>
        <TumblrItem tumblrName="Karthus" tumblrTitle="Requiem" tumblrIcon="/profile2.png" />
        <TumblrItem tumblrName="Yoshi" tumblrTitle="Discretes" tumblrIcon="/profile3.png" />
        <TumblrItem tumblrName="Jhonny" tumblrTitle="Pepperoni" tumblrIcon="/profile.png" />
        <TumblrItem tumblrName="Waterloo" tumblrTitle="untitled" tumblrIcon="/profile2.png" />
      </div>
    </div>
  );
}

/**
 * This is the component any of the chat items (conversations) in the chat drop down
 * @component
 * @param {String} senderName - the name of the message sender
 * @param {String} senderIcon - their profile picture
 * @param {String} chatContent - their message
 * @param {Boolean} isOnline - specifies whether or not they are online
 * @returns {ReactJSXElement} JSX Element.
 */
function ChatItem({
  senderName, senderIcon, chatContent, isOnline,
}) {
  return (
    <div className="chat-item">
      <div className="chat-icon-box">
        <img src={senderIcon} alt="profile icon" />
        {
        (isOnline) ? (<img src="/online.png" alt={isOnline} className="floating-icon" />) : <div />
        }
      </div>
      <div className="chat-box">
        <p className="sender-name">{`${senderName} `}</p>
        <p className="chat-content">
          <span className="sender-name-colon">{`${senderName}: `}</span>
          {chatContent}
        </p>
      </div>
    </div>
  );
}

/**
 * This is the component responsible for switching the tumblr that the dropdown conveys info about.
 * @component
 * @param {String} tumblrName- the name of the tumlr
 * @param {String} tumblrTitle - the title of the tumblr
 * @param {String} tumblrIcon - the profile picture of the tumblr
 * @returns {ReactJSXElement} JSX Element.
 */
export function TumblrItem({ tumblrName, tumblrTitle, tumblrIcon }) {
  return (
    <div className="blog-item">
      <div className="blog-details">
        <div className="blog-icon-box">
          <img src={tumblrIcon} alt="blog icon" />
        </div>
        <div className="blog-name-title">
          <p className="tumblr-name">{ tumblrName }</p>
          <p className="tumblr-title">{ tumblrTitle }</p>
        </div>
        {/* <i className="fas fa-check" /> */}
      </div>
    </div>
  );
}

ChatItem.propTypes = {
  senderName: PropTypes.string.isRequired,
  senderIcon: PropTypes.string.isRequired,
  chatContent: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

TumblrItem.propTypes = {
  tumblrName: PropTypes.string.isRequired,
  tumblrTitle: PropTypes.string.isRequired,
  tumblrIcon: PropTypes.string.isRequired,
};

export default ChatDropDown;
