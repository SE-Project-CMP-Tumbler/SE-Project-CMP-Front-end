import { pusher } from '../../../lib/pusher';

// presence channel handler
export default async function handler(req, res) {
  const { message, username, userLocation } = req.body;
  // trigger a new post event via pusher
  await pusher.trigger(`privet-channel-${chatRoom", "chat-update", {
    message,
    username,
    userLocation
  });

  res.json({ status: 200 });
}