const bcrypt = require('bcryptjs');
const buildToken = require('../utils/buildToken');
const router = require('express').Router();
const { verifyBody, verifyUser } = require('./auth-middleware');

router.post('/login', verifyBody, verifyUser, (req, res, next) => {
  const { password } = req.body;
  const token = buildToken(req.user);

  if (bcrypt.compareSync(password, req.user.password)) {
    res.status(200).json({
      token,
      username: req.user.username,
      id: req.user.id,
    });
  } else {
    next({ status: 401, message: 'invalid username or password' });
  }
});

module.exports = router;
