const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



const UserSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minlength:[3,'firstname must be at least 3 character long']
        },
        lastname:{
            type: String,
            required: true,
            minlength:[3,'lastname must be at least 3 character long']
        },
    },
    email:{
        type:String,
        required: true,
        unique: true,
        minlength:[5, "email must be at least 5 characters long"]

    },
    password:{
        type:String,
        required: true,
    },
    socketId: {
        type:String,
    }

})

UserSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET, {expiresIn: '24h'})
    return token; // generate the token for the user
}
UserSchema.methods.comparePassword =  async function (password) {
    return await bcrypt.compare(password,this.password) // compare or match the hash password
    
}

UserSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10) // hash password
}


const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel;