import { pusher } from '../../../lib/pusher';

// presence channel handler
export default async function handler(req, res) {
  const { message, username, chatRoomId } = req.body;
  // trigger a new post event via pusher
  await pusher.trigger(`privet-channel-${chatRoomId}`, "chat-update", {
    message,
    username,
    userLocation
  });

  res.json({ status: 200 });
}