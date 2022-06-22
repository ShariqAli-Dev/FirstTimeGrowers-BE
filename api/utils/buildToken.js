const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET;

module.exports = (user) => {
  const payload = {
    username: user.username,
  };

  const options = {
    expiresIn: '120s',
  };

  return jwt.sign(payload, TOKEN_SECRET, options);
};
