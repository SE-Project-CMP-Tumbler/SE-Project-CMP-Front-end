import { pusher } from '../../../lib/pusher';

// presence channel handler
export default async function handler(req, res) {
  // trigger a new post event via pusher
  await pusher.trigger(`privet-channel-${req.body.chatRoomId}`, 'chat-update', {
    req.bomessage,
    username,
    chatRoomId,
  });

  res.json({ status: 200 });
}
