import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TumblrItem } from './ChatDropDown';

/**
 * This chooses one of the four notification categories and sets it as blue
 * @method
 * @param {MutableRefObject} chosenRef - the ref for the HTML node of the category to be set as blue
 * @param {Array} allRefs - An array of the four refs representing the four categories
 */

function chooseBlueItem(chosenRef, allRefs) {
  const el = chosenRef;
  el.current.style.color = 'rgb(0, 184, 255)';
  el.current.style.borderBottom = '2px solid rgb(0, 184, 255)';
  const els = allRefs;
  els.forEach((currentRef) => {
    const element = currentRef;
    if (element !== chosenRef) {
      element.current.style.color = 'rgba(0, 0, 0, 0.65)';
      element.current.style.borderBottom = '0px solid rgb(0, 184, 255)';
    }
  });
}
function tumblrSelection(chevronRef) {
  const el = chevronRef;
  el.current.style.display = (el.current.style.display) === 'none' ? 'block' : 'none';
}

/**
 * This is the notifications drop down component as can be seen in the official website
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function NotificationsDropDown() {
  const allRef = useRef(null);
  // this ref is for the "all" category in the notifcation panel.
  const mentionsRef = useRef(null);
  const reblogsRef = useRef(null);
  const repliesRef = useRef(null);
  const chevronRef = useRef(null);
  const allRefs = [allRef, mentionsRef, reblogsRef, repliesRef];
  return (
    <div className="drop-content notifications-drop-content">
      <div className="drop-header notifications-drop-header">
        <div className="profile">
          <div className="icon-box">
            <img src="/profile2.png" alt="profile icon" />
          </div>
          <button type="button" aria-label="switch tumblr" className="chevron" onClick={() => { tumblrSelection(chevronRef); }}>
            <p>Malzahar</p>
            <i className="fas fa-chevron-down" />
          </button>
          <div className="tumblr-list" ref={chevronRef}>
            <TumblrItem tumblrName="Jaximus" tumblrTitle="Grandmaster" tumblrIcon="/profile2.png" />
            <TumblrItem tumblrName="Malzahar" tumblrTitle="Landlord" tumblrIcon="/profile3.png" />
          </div>
        </div>
        <button type="button" className="activity">________</button>
      </div>
      <div className="notifications-category">
        <button className="category-item all" type="button" ref={allRef} onClick={() => { chooseBlueItem(allRef, allRefs); }}>All</button>
        <button className="category-item" type="button" ref={mentionsRef} onClick={() => { chooseBlueItem(mentionsRef, allRefs); }}>Mentions</button>
        <button className="category-item" type="button" ref={reblogsRef} onClick={() => { chooseBlueItem(reblogsRef, allRefs); }}>Reblogs</button>
        <button className="category-item" type="button" ref={repliesRef} onClick={() => { chooseBlueItem(repliesRef, allRefs); }}>Replies</button>
      </div>
      <div className="notifications">
        <NotificiationTime timeOfAction={new Date()} />
        <NotificationsItem action=" reblogged your post " byTumblr="Yoshi" byTumblrIcon="/profile3.png" content="Love recursive components" actionIcon="/redo.png" />
        <NotificationsItem action=" mentioned you on a post " byTumblr="Yoshi" byTumblrIcon="/profile2.png" content="@karim" actionIcon="/at.png" />
        <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile3.png" content="Tumblr is awesome." actionIcon="/heart.png" />
        <NotificiationTime timeOfAction={new Date()} />
        <NotificationsItem action=" replied to your post " byTumblr="Swain" byTumblrIcon="/profile2.png" content="Morning Jazz just feels so good.." actionIcon="/comment.png" />
        <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile.png" content="Tumblr is awesome." actionIcon="/heart.png" />
        <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile3.png" content="Tumblr is awesome." actionIcon="/heart.png" />
        <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile3.png" content="Tumblr is awesome." actionIcon="/heart.png" />

      </div>
      <Link to="/activity">
        <div className="see-everything">
          <p>See Everything.</p>
        </div>
      </Link>
    </div>
  );
}

/**
 *  This is a simple component that logs time for notifications and is used in the drop down
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function NotificiationTime({ timeOfAction }) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = `${days[timeOfAction.getDay()]}, ${months[timeOfAction.getMonth()]} ${timeOfAction.getDate()}`;
  return (
    <div className="drop-header time-drop-header">
      <p className="time-lasted">11 days ago</p>
      <p className="actual time">{date}</p>
    </div>
  );
}

NotificiationTime.propTypes = {
  timeOfAction: PropTypes.instanceOf(Date).isRequired,
};

/**
 * This is the component representing the notification item in the drop down
 * @component
 * @param {String} action - the action associated with the notification (e.g. like, mention,...)
 * @param {String} content - the text content of th enotification
 * @param {String} actionIcon - the icon representing the action type or content
 * @param {String} byTumblr - the Tumblr that caused the action
 * @param {String} byTumblrIcon - the icon of the tumblr causing an action
 * @returns {ReactJSXElement} JSX Element.
 */
function NotificationsItem({
  action, content, actionIcon, byTumblr, byTumblrIcon,
}) {
  return (
    <Link to="/">
      <div className="notification-item">
        <div className="notification-icon-box">
          <img src={byTumblrIcon} alt="profile icon" className="profile-icon" />
          <img src={actionIcon} alt="state" className="floating-icon" />
        </div>
        <div className="notification-box">
          <p className="tumblr-name">{byTumblr}</p>
          <span>{action}</span>
          <span className="notification-content">
            &ldquo;
            {content}
            &rdquo;
          </span>
        </div>
        <div className="notification-content-icon">
          <img src="/profile.png" alt="profile icon" />
        </div>
      </div>
    </Link>
  );
}

NotificationsItem.propTypes = {
  action: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionIcon: PropTypes.string.isRequired,
  byTumblr: PropTypes.string.isRequired,
  byTumblrIcon: PropTypes.string.isRequired,
};

TumblrItem.propTypes = {
  tumblrName: PropTypes.string.isRequired,
  tumblrTitle: PropTypes.string.isRequired,
  tumblrIcon: PropTypes.string.isRequired,
};

export default NotificationsDropDown;
