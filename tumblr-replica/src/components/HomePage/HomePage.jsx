import React from 'react';
import { useSelector } from 'react-redux';
import ChatBoxes from '../ChatBoxes/ChatBoxes';
import ChatTo from '../ChatTo/ChatTo';
import OldChatList from '../OldChatList/OldChatList';
/**
 * This function is for the HomePage component this is a mock page to display the chat component
 * @method
 * @returns {*} HomePage componenet
 */
function HomePage() {
  const newMessagePress = useSelector((state) => state.Chat.newmessagepress);
  return (
    <>
      {newMessagePress ? <ChatTo /> : <OldChatList />}
      <ChatBoxes />
    </>
  );
}
export default HomePage;
