const jwt = require('jsonwebtoken');

exports.checkCurrentUser = (req, res, next) => {
  const Authorization = req.header('authorization');

  if (!Authorization) {
    req.user = null;
    next();
  } else {
    const token = Authorization.replace('Bearer', ' ');
    //Verify token
    try {
      const { userId } = jwt.verify(token, process.env.SECRET);
      req.user = { userId };
    } catch (error) {
      req.user = null;
      next();
    }
  }
};
