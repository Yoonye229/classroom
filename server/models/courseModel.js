const mongoose = require('mongoose');
const UserModel = require('../models/userModel');

const Schema = mongoose.Schema;

const courseSchemma = new Schema({
  courename: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  teacher: {
    type: String,
    require: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('course', courseSchemma);
