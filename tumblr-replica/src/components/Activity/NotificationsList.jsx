/* eslint-disable max-len */
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlogs } from '../../states/usertumblr/usertumblrSlice';
import { selectNotifications, fetchNotifications } from '../../states/notifications/notificationSlice';
import { chooseBlueItem } from '../NavigationBar/interactions';

/**
 * This is the notifications list component as can be seen in the official website in the activity page
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function NotificationsDropDown() {
  const allRef = useRef(null);
  // this ref is for the "all" category in the notifcation panel.
  const mentionsRef = useRef(null);
  const reblogsRef = useRef(null);
  const repliesRef = useRef(null);
  const allRefs = [allRef, mentionsRef, reblogsRef, repliesRef];
  const blogState = useSelector(selectBlogs);
  const notifState = useSelector(selectNotifications);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchNotifications()), []);
  const [index, setIndex] = useState(0);

  return (
    <div className="drop-content notifications-drop-content">
      <div className="notifications-category">
        <button className="category-item all" type="button" ref={allRef} onClick={() => { chooseBlueItem(allRef, allRefs); setIndex(0); }}>All</button>
        <button className="category-item" type="button" ref={mentionsRef} onClick={() => { chooseBlueItem(mentionsRef, allRefs); setIndex(1); }}>Mentions</button>
        <button className="category-item" type="button" ref={reblogsRef} onClick={() => { chooseBlueItem(reblogsRef, allRefs); setIndex(2); }}>Reblogs</button>
        <button className="category-item" type="button" ref={repliesRef} onClick={() => { chooseBlueItem(repliesRef, allRefs); setIndex(3); }}>Replies</button>
      </div>
      <div className="notifications">
        {(notifState.isLoading || blogState.isLoading)
          ? (
            <NotificationsItem action=" has encountered an error loading your notificiations " byTumblr="Server" byTumblrIcon="/profile3.png" content="See if you can reproduce the error using the mock server." actionIcon="/redo.png" context="whwywhwys" />
          )
          : (
            <NotificationsLoader notifState={notifState} blogState={blogState} index={index} />
          ) }
      </div>
    </div>
  );
}

export function NotificationsLoader({ notifState, blogState, index }) {
  const actionGetter = (type) => {
    if (type === 'reply') return ' replied to your post ';
    if (type === 'like') return ' liked your post ';
    if (type === 'reblog') return ' reblogged your post ';
    if (type === 'follow') return ' started following you. ';
    if (type === 'mention') return ' mentioned you on a post ';
    return 'unknown action';
  };
  const iconGetter = (type) => {
    if (type === 'reply') return '/comment.png';
    if (type === 'like') return '/heart.png';
    if (type === 'reblog') return '/redo.png';
    if (type === 'follow') return '/plus.png';
    if (type === 'mention') return '/at.png';
    return 'unknown action';
  };
  let neededNotifs = '';
  switch (index) {
    case 0:
      neededNotifs = '';
      break;
    case 1:
      neededNotifs = 'mention';
      break;
    case 2:
      neededNotifs = 'reblog';
      break;
    case 3:
      neededNotifs = 'reply';
      break;
    default:
      neededNotifs = '';
  }
  const filteredNotifs = notifState.notifications.filter((n) => n.type.includes(neededNotifs));
  return (
  // eslint-disable-next-line no-unused-vars
    (filteredNotifs.map((notif, i, notifs) => (
      <>
        <>
          {
          (i === 0) && <NotificiationTime timeOfAction={new Date(notif.timestamp)} />
        }
        </>
        <>
          {i > 0 && (notifs[i].timestamp !== notifs[i - 1].timestamp) && <NotificiationTime timeOfAction={new Date(notif.timestamp)} /> }
          <NotificationsItem action={actionGetter(notif.type)} byTumblr={notif.from_blog_username} byTumblrIcon={notif.from_blog_avatar} content={notif.target_post_summary} actionIcon={iconGetter(notif.type)} context={(notif.type === 'mention') ? ('@' + blogState.blogs[0].username) : notif.target_reply_summary} isFollow={notif.type === 'follow'} isReply={notif.type === 'reply' || notif.type === 'mention'} />
        </>
      </>
    ))
    ));
}

/**
 *  This is a simple component that logs time for notifications and is used in the notifications list
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
export function NotificiationTime({ timeOfAction }) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = `${days[timeOfAction.getDay()]}, ${months[timeOfAction.getMonth()]} ${timeOfAction.getDate()}`;
  return (
    <div className="drop-header time-drop-header">
      <p className="time-lasted">
        {Math.ceil(Math.abs(new Date() - timeOfAction) / (1000 * 60 * 60 * 24)) }
        &nbsp;days ago
      </p>
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
export function NotificationsItem({
  action, content, actionIcon, byTumblr, byTumblrIcon, context, isFollow, isReply,
}) {
  return (
    <Link to={'/blog/view/' + byTumblr}>
      <div className="notification-item">
        <div className="notification-icon-box">
          <img src={byTumblrIcon} alt="profile icon" className="profile-icon" />
          <img src={actionIcon} alt="state" className="floating-icon" />
        </div>
        <div className="notification-box">
          <p className="tumblr-name">{byTumblr}</p>
          <span>{action}</span>
          <span className="notification-content">
            { !isFollow
            && (
            <>
              &ldquo;
              {content}
              &rdquo;
            </>
            )}
            <p className="notification-context">
              { isReply && (
              <>
                <div className="pipe"> </div>
                &nbsp;&nbsp;&nbsp;
                {context}
              </>
              )}
            </p>
          </span>
        </div>
        <div> &nbsp;</div>
        <div> &nbsp;</div>
        <div> &nbsp;</div>
        <div> &nbsp;</div>
        <div> &nbsp;</div>
        <div> &nbsp;</div>
        <div>
          {
          (!isFollow)
            ? (
              <div className="notification-content-icon">
                <img src="/profile.png" alt="profile icon" />
              </div>
            )
            : (
              <button
                type="button"
                id="follow_b"
                onClick={() => {
                  const state = document.getElementById('follow_b').childNodes[0].textContent;
                  document.getElementById('follow_b').childNodes[0].textContent = (state === 'follow') ? 'unfollow' : 'follow';
                }}
              >
                <span style={{ fontSize: '0.85rem', color: '#00b8ff', fontWeight: '400' }}>follow</span>
              </button>
            )
          }
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
