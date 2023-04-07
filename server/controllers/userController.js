const User = require('../models/userModel');
const jwt = require('jsonwebtoken');


const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: '3d' });
};

//Sign in controller
const signinUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signin(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//Sign up controller
const signupUser = async (req, res) => {
  const { firstname, email, password, educator } = req.body;

  try {
    const user = await User.signup(firstname, email, password, educator);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ firstname, email, token, educator });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//get current user
const getCurrentUser = async (req, res) => {
  try {
    // Find user by their ID in the JWT token payload
    const user = await User.findById(req.user.id);

    // If user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Otherwise, return the user information
    res.json({
      firstname: user.firstname,
      email: user.email,
      educator: user.educator,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

//Find user
const findUser = async (req, res) => {
  const { firstname, email } = req.body;
  try {
    const user = await User.findByIdAnd(req.params._id, {
      firstname: firstname,
      email : email,
    });

    res.status(200).json({ user }).then(res.rederection('/profile'));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Edit an user
const editUser = async (req, res) => {
  const { firstname, password, educator } = req.body;

  try {
    const user = User.findByIdAndUpdate(User.params._id, {
      firstname: firstname,
      password: password,
      educator: educator,
    });

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editAvatar = async (req, res) => {
  const { avatarUrl } = req.body;
  try {
    const avatar = await User.findByIdAndUpdate(User._id, {
      avatar: avatarUrl,
    });

    res.status(200).json({ avatar });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  signupUser,
  signinUser,
  editUser,
  getCurrentUser,
  findUser,
  editAvatar,
};
