module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.email === 'jzimek1@stanford.edu' && req.body.password === 'vppgBhACwQYp') {
      res.status(200).json({
        msg: 'ok',
        body: {
          id: '2',
          blog_username: 'bdoudny1',
          email: 'jzimek1@stanford.edu',
          blog_avatar: 'https://robohash.org/utautdeleniti.png?size=50x50&set=set1',
          access_token: 'P2UJLzC51ugq8DfegI7d2c9x7b3BqqrrEP0xFPNP',
        },
      });
    } else {
      res.status(404).json({ message: 'not found' });
    }
  } else {
    next();
  }
};
