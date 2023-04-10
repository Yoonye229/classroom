const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const postSchemma = new Schema({
//   title: String,
//   content: String,
//   folder: String,
// });
// mongoose.model('Post', postSchemma);
const courseSchemma = new Schema({
  coursename: {
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
  teacher: {
    type: String
  }
  
},{timestamps: true});


module.exports = mongoose.model('course', courseSchemma);