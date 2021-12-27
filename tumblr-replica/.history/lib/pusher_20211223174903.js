import Pusher from 'pusher';

export const pusher = new Pusher({
  app_id: '1319013',
  key: 'a59193c9ecc2'
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: true,
});
