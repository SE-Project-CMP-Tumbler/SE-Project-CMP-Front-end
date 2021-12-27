import Pusher from 'pusher';

export const pusher = new Pusher({
  appId: '',
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: true,
});
