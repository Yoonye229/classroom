const express = require('express')
const app = express()
const mongoose = require('mongoose')

const userRoute = require('./routes/userRoute')

                //midleware//
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})
                //Route//
app.use('/api/user',userRoute)

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(process.env.PORT,function(){
        console.log(`app is listening to port http://localhost:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})    