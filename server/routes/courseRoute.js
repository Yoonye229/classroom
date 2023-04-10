const express = require('express');
const {
  createCourse,
  findCourse,
  editCourse,
  findAllCourse,
  deleteCourse,
} = require('../controllers/course.controller');
const router = express.Router();

router.post('/create', createCourse);

router.delete('/:id', deleteCourse)

router.get('/:id', findCourse);

router.get('/', findAllCourse);

router.patch('/:id', editCourse)

module.exports = router;