const Course = require('../models/course.model')
const formidable = require('formidable')
const fs = require('fs')
const errorHandler = require('./../helpers/dbErrorHandler')

//create a course 
const create = (req, res) =>{
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files)=>{
        if(err){
            return res.status(400).json({
                error:"Image could not be uploaded"
            })
        }
        let course = new Course(fields)
        course.instructor = req.profile
        if(files.image){
            course.image.data = fs.readFileSync(files.image.path)
            course.image.contentType = files.image.contentType
        }
        try {
            let result = await course.save()
            res.json(result)
        } catch (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
    })
}