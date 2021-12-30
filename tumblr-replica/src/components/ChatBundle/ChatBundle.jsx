import React from 'react';
import MediaQuery from 'react-responsive';
import ChatBoxes from '../ChatBoxes/ChatBoxes';
import ChatTo from '../ChatTo/ChatTo';
/**
 * This function is for the HomePage component this is a mock page to display the chat component
 * @method
 * @returns {*} HomePage componenet
 */
function ChatBundle() {
  return (
    <>
      <MediaQuery maxWidth={800}>
        <></>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <ChatTo />
        <ChatBoxes />
      </MediaQuery>
    </>
  );
}
export default ChatBundle;
