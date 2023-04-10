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
    // const firstname = user.firstname
    // const educator = user.educator
    // //create a token
    // const token = createToken(user._id)
    // const id = user._id;
    res.status(200).json(user);
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

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

const getCurrentUser = async (req, res) => {
  try {
    // Find user by their ID in the JWT token payload
    const user = await User.findById(req.user._id);

    // If user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
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
  const email = req.body;
  try {
    const user = await User.findOne(req.user.email, {
      emai: email,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//Edit an user
const editUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = User.findByIdAndUpdate({id: id},{
      ...req.body
    });

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const editAvatar = async (req, res) => {
//   const { avatar } = req.body;
//   try {
//     const avatarUrl = await User.findByIdAndUpdate(User._id, {
//       avatar: avatar,
//     });

//     res.status(200).json({ avatarUrl });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
module.exports = {
  signupUser,
  signinUser,
  editUser,
  verifyToken,
  getCurrentUser,
  findUser,

};