const Admin = require('./auth-model');

const verifyBody = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next({ status: 400, message: 'username or password is missing' });
  } else {
    next();
  }
};

const verifyUser = async (req, res, next) => {
  const { username } = req.body;

  const [adminMaybe] = await Admin.getUserBy({ username });
  if (!adminMaybe) {
    next({ status: 404, message: 'incorrect username or password' });
  } else {
    req.user = adminMaybe;
    next();
  }
};

module.exports = {
  verifyBody,
  verifyUser,
};
