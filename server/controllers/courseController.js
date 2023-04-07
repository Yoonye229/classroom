const Course = require('../models/courseModel');

//Create a new course
const createCourse = async (req, res) => {
  const { name, desc, teacher, dateCreated } = req.body();
  try {
    await Course.push(name, desc);

    res.status(200).json({ name, desc, teacher, dateCreated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Find a course
const findACourse = async (req, res) => {
  const { name, desc, teacher } = req.body();
  try {
    await Course.findById(req.params._id);

    res.status(200).json({ name, desc, teacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createCourse, findACourse };
