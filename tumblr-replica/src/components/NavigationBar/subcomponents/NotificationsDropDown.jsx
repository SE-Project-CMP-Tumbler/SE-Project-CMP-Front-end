import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TumblrItem } from './ChatDropDown';

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

function NotificationsDropDown() {
  const allRef = useRef(null);
  // this ref is for the "all" category in the notifcation panel.
  const mentionsRef = useRef(null);
  const reblogsRef = useRef(null);
  const repliesRef = useRef(null);
  const allRefs = [allRef, mentionsRef, reblogsRef, repliesRef];
  return (
    <div className="drop-content notifications-drop-content">
      <div className="drop-header notifications-drop-header">
        <div className="profile">
          <div className="icon-box">
            <img src="/profile2.png" alt="profile icon" />
          </div>
          <p>Malzahar</p>
          <i className="fas fa-chevron-down text-black fa-sm pl-1" />
          <div className="tumblr-list">
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
      <NotificiationTime timeOfAction={new Date()} />
      <NotificationsItem action=" reblogged your post " byTumblr="Yoshi" byTumblrIcon="/profile3.png" content="Love recursive..." actionIcon="/redo.png" />
      <NotificationsItem action=" mentioned you on a post " byTumblr="Yoshi" byTumblrIcon="/profile2.png" content="@karim" actionIcon="/at.png" />
      <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile3.png" content="Tumblr is awesome." actionIcon="/heart.png" />
      <NotificiationTime timeOfAction={new Date()} />
      <NotificationsItem action=" replied to your post " byTumblr="Swain" byTumblrIcon="/profile2.png" content="Morning Jazz is..." actionIcon="/comment.png" />
      <NotificationsItem action=" liked your post " byTumblr="Ivern" byTumblrIcon="/profile.png" content="Tumblr is awesome." actionIcon="/heart.png" />
      <Link to="/activity">
        <div className="see-everything">
          <p>See Everything.</p>
        </div>
      </Link>
    </div>
  );
}

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

function NotificationsItem({
  action, content, actionIcon, byTumblr, byTumblrIcon,
}) {
  return (
    <Link to="/">
      <div className="notification-item">
        <div>
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
