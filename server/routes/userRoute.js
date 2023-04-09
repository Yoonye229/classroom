const express = require('express');

//controller function
const {
  signupUser,
  signinUser,
  verifyToken,
  getCurrentUser,
  editUser,
  editAvatar,
  findUser,
} = require('../controllers/userController');

const router = express.Router();
// sign in route
router.post('/signin', signinUser);
// sign up route
router.post('/signup', signupUser);
// get an user route
router.get('/current/:id', verifyToken, getCurrentUser);
// edit user route
router.put('/:id', editUser);
router.put('/:id', editAvatar);
// find user route
router.get('/', findUser);

module.exports = router;
