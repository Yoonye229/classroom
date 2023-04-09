const express = require('express');
const {
  createCourse,
  findACourse,
  createPost,
} = require('../controllers/courseController');
const router = express.Router();

router.post('/create', createCourse);

router.get('/findcourse/:id', findACourse);

router.post('/createPost', createPost)

module.exports = router;
