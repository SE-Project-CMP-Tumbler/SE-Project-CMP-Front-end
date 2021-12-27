import Pusher from 'pusher';

export const pusher = new Pusher({
  appId: '1319013',
  key: ,
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: true,
});
