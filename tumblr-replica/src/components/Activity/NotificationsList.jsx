/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { selectBlogs } from '../../states/usertumblr/usertumblrSlice';
import { fetchNotifications } from '../../states/notifications/notificationSlice';
import { NotificationsItem } from '../NavigationBar/subcomponents/NotificationsDropDown';
/**
 * This is the notifications drop down component as can be seen in the official website
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function NotificationsList() {
  // const blogState = useSelector(selectBlogs);
  // const notifState = useSelector(selectNotifications);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchNotifications()), []);

  return (
    <div className="drop-content notifications-drop-content" style={{ display: 'none' }}>

      <div className="notifications">
        {/*
        {(notifState.isLoading || blogState.isLoading)
          ? ( */}
        <NotificationsItem action=" is loading your notifications " byTumblr="Server" byTumblrIcon="/profile3.png" content="wkjnwkj" actionIcon="/redo.png" context="whwywhwys" />
        <NotificationsItem action=" is loading your notifications " byTumblr="Server" byTumblrIcon="/profile3.png" content="wkjnwkj" actionIcon="/redo.png" context="whwywhwys" />
        <NotificationsItem action=" is loading your notifications " byTumblr="Server" byTumblrIcon="/profile3.png" content="wkjnwkj" actionIcon="/redo.png" context="whwywhwys" />
        <NotificationsItem action=" is loading your notifications " byTumblr="Server" byTumblrIcon="/profile3.png" content="wkjnwkj" actionIcon="/redo.png" context="whwywhwys" />
        <NotificationsItem action=" is loading your notifications " byTumblr="Server" byTumblrIcon="/profile3.png" content="wkjnwkj" actionIcon="/redo.png" context="whwywhwys" />
        <NotificationsItem action=" is loading your notifications " byTumblr="Server" byTumblrIcon="/profile3.png" content="wkjnwkj" actionIcon="/redo.png" context="whwywhwys" />
        <NotificationsItem action=" is loading your notifications " byTumblr="Server" byTumblrIcon="/profile3.png" content="wkjnwkj" actionIcon="/redo.png" context="whwywhwys" />
        {/* )
          : (
            <NotificationsLoader notifState="" blogState={blogState} />
          ) } */}
      </div>

    </div>
  );
}

export default NotificationsList;
