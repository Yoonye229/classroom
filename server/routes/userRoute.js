const express = require('express');

//controller function
const {
  signupUser,
  signinUser,
  editUser,
  getCurrentUser,
} = require('../controllers/userController');

const router = express.Router();
// sign in route
router.post('/signin', signinUser);
// sign up route
router.post('/signup', signupUser);
// get an user route
router.get('/current', getCurrentUser);
// edit user route
router.put('/:id', editUser);

module.exports = router;
