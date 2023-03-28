const User = require ('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) =>{
    return jwt.sign({_id:_id}, process.env.SECRET, {expiresIn: '3d'})
}

//Sign in controller
const signinUser = async (req, res) =>{
    const {email, password} = req.body
    try{
        const user = await User.signin(email, password)

        //create a token 
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
    
}
//Sign up controller 
const signupUser = async (req, res) =>{
    const {firstname , email, password, educator} =req.body

    try{
        const user = await User.signup(firstname, email, password, educator)

        //create a token 
        const token = createToken(user._id)

        res.status(200).json({firstname, email, token, educator})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {signupUser, signinUser}