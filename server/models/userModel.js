const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type:String
    },
    lastname: {
        type:String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    
});

userSchema.statics.signup = async function(firstname, lastname, email, password){
    //validation
    if(!firstname || !lastname || !email || !password ){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    //check if email is unique
    const exist = await this.findOne({email})
    if(exist){
        throw Error('This email already exist');
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({firstname, lastname, email, password: hash})

    return user
}
// static signin method 
userSchema.statics.signin = async function(email, password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }    

    const user = await this.findOne({email})

    if(!user){
        throw Error('incorect email')
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error ("incorect password")
    }

    return user
}

module.exports = mongoose.model('user', userSchema);
