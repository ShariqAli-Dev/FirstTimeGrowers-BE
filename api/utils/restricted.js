const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    next({ status: 401, message: 'token required' });
  }
  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      next({ status: 401, message: 'token invalid' });
    } else {
      req.decodedToken = decoded;
      next();
    }
  });
};
