module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    // req.method = 'GET';
    // req.query = req.body;

    if (req.body.email === 'jzimek1@stanford.edu' && req.body.password === 'vppgBhACwQYp') {
      res.status(200).json({
        id: '2',
        blog_username: 'bdoudny1',
        email: 'jzimek1@stanford.edu',
        blog_avatar: 'https://robohash.org/utautdeleniti.png?size=50x50&set=set1',
        access_token: 'P2UJLzC51ugq8DfegI7d2c9x7b3BqqrrEP0xFPNP',
        verified: false,
      });
    } else {
      res.status(404).json({ msg: 'not found' });
    }
  } else if (req.method === 'POST' && req.path === '/register') {
    if (req.body.email !== '' && req.body.email !== 'jzimek1@stanford.edu') {
      res.status(200).json({
        id: '2',
        blog_username: 'bdoudny1',
        email: 'jzimek1@stanford.edu',
        blog_avatar: 'https://robohash.org/utautdeleniti.png?size=50x50&set=set1',
        access_token: 'P2UJLzC51ugq8DfegI7d2c9x7b3BqqrrEP0xFPNP',
      });
    } else if (req.body.email === 'jzimek1@stanford.edu') {
      res.status(422).json({ msg: 'This email address is already in use' });
    } else {
      res.status(500).json({ msg: 'Internal Server error' });
    }
  } else {
    next();
  }
};
