import Pusher from 'pusher';

export const pusher = new Pusher({
  appId: '1319',
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: true,
});
