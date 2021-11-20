import React from 'react';
import { useSelector } from 'react-redux';
import ChatBoxes from './ChatBoxes';
import ChatTo from './ChatTo';
import OldChatList from './OldChatList';

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
