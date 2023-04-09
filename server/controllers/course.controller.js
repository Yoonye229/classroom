const Course = require('../models/course.model')


const createCourse = async (req, res) => {
    const { coursename, desc, teacher,coursekey } = req.body;
    try {
      const course = await Course.create({
        coursename: coursename,
        desc: desc,
        teacher: teacher,
        coursekey : coursekey 
      });
      
      res.status(200).json(course);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //Find a course
  const findACourse = async (req, res) => {
    const { courename, desc, teacher } = req.body;
    try {
      await Course.findById(req.course._id);
  
      res.status(200).json({
        courename: courename,
        desc: desc,
        teacher: teacher,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  


const EditCourse = async (res,req)=>{
    const{coursename , teacher , coursekey , desc } = req.body;
    try {
        const course = await Course.findByIdAndUpdate(req.course._id,
            {
               coursename:coursename,
               coursekey:coursekey,
               teacher:teacher,
               desc:desc,

            });

        res.status(200).json(course);
    } catch (error) {
        res.status(400).json(Error);
    } 
}
const createPost = async (req, res) => {
  const { title, content, folder } = req.body;
  try {
    const course = await Course.create({
      title: title,
      content: content,
      folder: folder
    });

    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
    EditCourse,
    createCourse, findACourse , createPost
}