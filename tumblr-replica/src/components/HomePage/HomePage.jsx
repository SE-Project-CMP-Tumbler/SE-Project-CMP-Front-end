import React from 'react';
import { useSelector } from 'react-redux';
import ChatBoxes from '../ChatBoxes/ChatBoxes';
import ChatTo from '../ChatTo/ChatTo';
import OldChatList from '../OldChatList/OldChatList';

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
