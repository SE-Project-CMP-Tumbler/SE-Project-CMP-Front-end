import React from 'react';
import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import ChatBoxes from '../ChatBoxes/ChatBoxes';
import ChatTo from '../ChatTo/ChatTo';
import OldChatList from '../OldChatList/OldChatList';
// import ChatListResp from '../ChatListResp/ChatListResp';
import ChatComponentResp from '../ChatComponentResp/ChatComponentResp';
// import ChatNewMessageResp from '../ChatNewMessageResp/ChatNewMessageResp';
/**
 * This function is for the HomePage component this is a mock page to display the chat component
 * @method
 * @returns {*} HomePage componenet
 */
function HomePage() {
  // const newMessagePress = useSelector((state) => state.Chat.newmessagepress);
  return (
    <>
      <MediaQuery maxWidth={800}>
        <ChatComponentResp />
      </MediaQuery>
      <MediaQuery minWidth={800}>
         <ChatTo />
        <ChatBoxes />
      </MediaQuery>
    </>
  );
}
export default HomePage;
