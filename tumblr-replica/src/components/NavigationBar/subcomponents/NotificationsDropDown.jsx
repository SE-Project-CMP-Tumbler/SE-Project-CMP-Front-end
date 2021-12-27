import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectBlogs } from '../../../states/usertumblr/usertumblrSlice';
import { chooseBlueItem, tumblrSelection, useOutsideAlerter } from '../interactions';

/**
 * This is the notifications drop down component as can be seen in the official website
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function NotificationsDropDown({ buttonRef }) {
  const allRef = useRef(null);
  // this ref is for the "all" category in the notifcation panel.
  const mentionsRef = useRef(null);
  const reblogsRef = useRef(null);
  const repliesRef = useRef(null);
  const chevronRef = useRef(null);
  const allRefs = [allRef, mentionsRef, reblogsRef, repliesRef];
  const notificationsDropRef = useRef(null);
  const blogState = useSelector(selectBlogs);
  useOutsideAlerter(notificationsDropRef, buttonRef);
  return (
    <div className="drop-content notifications-drop-content" ref={notificationsDropRef} style={{ display: 'none' }}>
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
            {(blogState.isLoading)
              ? (<TumblrItem tumblrName="Jaximus" tumblrTitle="Grandmaster" tumblrIcon="/profile2.png" />
              )
              : (
                (blogState.blogs).map((blog) => (

                  <TumblrItem tumblrName={blog.username} tumblrTitle={blog.title} tumblrIcon={blog.avatar ? blog.avatar : './profile2.png'} />

                ))

              ) }
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
        <NotificationsItem action=" reblogged your post " byTumblr="Yoshi" byTumblrIcon="/profile3.png" content="Love recursive components" actionIcon="/redo.png" context="It's time for dravennn!" />
        <NotificationsItem action=" mentioned you on a post " byTumblr="Yoshi" byTumblrIcon="/profile2.png" content="@karim" actionIcon="/at.png" context="It's time for dravennn!" />
        <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile3.png" content="Tumblr is awesome." actionIcon="/heart.png" context="It's time for dravennn!" />
        <NotificiationTime timeOfAction={new Date()} />
        <NotificationsItem action=" replied to your post " byTumblr="Swain" byTumblrIcon="/profile2.png" content="Morning Jazz just feels so good.." actionIcon="/comment.png" context="It's time for dravennn!" />
        <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile.png" content="Tumblr is awesome." actionIcon="/heart.png" context="It's time for dravennn!" />
        <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile3.png" content="Tumblr is awesome." actionIcon="/heart.png" context="It's time for dravennn!" />
        <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile3.png" content="Tumblr is awesome." actionIcon="/heart.png" context="It's time for dravennn!" />

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
  action, content, actionIcon, byTumblr, byTumblrIcon, context,
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
            <br />
            <p className="notification-context">
              <div className="pipe"> </div>
              &nbsp;&nbsp;&nbsp;
              {context}
            </p>
          </span>
        </div>
        <div className="notification-content-icon">
          <img src="/profile.png" alt="profile icon" />
        </div>
      </div>
    </Link>
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

NotificationsItem.propTypes = {
  action: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionIcon: PropTypes.string.isRequired,
  byTumblr: PropTypes.string.isRequired,
  byTumblrIcon: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};

TumblrItem.propTypes = {
  tumblrName: PropTypes.string.isRequired,
  tumblrTitle: PropTypes.string.isRequired,
  tumblrIcon: PropTypes.string.isRequired,
};

export default NotificationsDropDown;
