const mongoose = require('mongoose');
const UserModel = require('../models/userModel');

const Schema = mongoose.Schema;

const postSchemma = new Schema({
  title: String,
  content: String,
  folder: String,
});
mongoose.model('Post', postSchemma);
const courseSchemma = new Schema({
  courename: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  coursekey:{
    type: String,
    require: true
  },
  teacher: { type: mongoose.Schema.ObjectId, ref: 'User' },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  post: postSchemma,
});

module.exports = mongoose.model('course', courseSchemma);
