import { Post } from "../models/course.model";
const express = require('express')
;
const {
  createCourse,
  findACourse,EditCourse,createPost
} = require('../controllers/course.controller');
const router = express.Router();

router.post('/create', createCourse);
router.post("/", async (req, res) => {
  try {
    const post = new Post({
      coursename: req.body.coursename,
      content: req.body.teacher,
    });
    await post.save();

    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get('/findcourse/:id', findACourse);

router.put('/edit',EditCourse);
router.post('/createPost', createPost)

module.exports = router;