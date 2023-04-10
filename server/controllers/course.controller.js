const { Mongoose, default: mongoose } = require('mongoose');
const Course = require('../models/course.model');
const jwt = require('jsonwebtoken')


//POST a new course
const createCourse = async (req, res) => {
  const { coursename, desc, coursekey } = req.body;
  try {
    const existKey = await Course.findOne({coursekey: coursekey})
    if(existKey){
      throw Error ("Đã tồn tại key lớp")
    }
    const course = await Course.create({coursename: coursename, coursekey: coursekey, desc: desc});
    
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Find a course
const findCourse = async (req, res) => {
  const { id } = req.params;
    const course = await Course.findOne({_id: id})
    if(!course){
      res.status(404).json({msg: "Không tồn tại lớp này"})
    }
    res.status(200).json(course);
  
};

//GET all course
const findAllCourse = async (req, res) => {
    const course = await Course.find({}).sort({createdAt: -1})
    
    res.status(200).json(course);
};
//EDIT a course
const editCourse = async (req, res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "Khong co lop nay"})
  }
    const course = await Course.findByIdAndUpdate({_id: id},{
      ...req.body
    })
    res.status(200).json(course)
  if(!course){
    return res.status(404).json({error: "Khong co lop nay"})
  }

}
//DELETE a course
const deleteCourse = async (req, res) =>{
  const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
      res.json({msg: "Không tồn tại lớp này"})
    }
    const course = await Course.findByIdAndDelete({_id: id})
    
    res.status(200).json(course);
}
module.exports = { createCourse, findCourse, editCourse, findAllCourse, deleteCourse };