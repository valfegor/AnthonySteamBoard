const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    date:{type:Date,default:Date.now},
    Status:Boolean,
    id_Role:{ type: mongoose.Schema.ObjectId, ref: "role" }
});

userSchema.methods.generateJWT = function (){
    return jwt.sign({
        _id:this.id,
        name:this.name,
        id_Role:this.id_Role,
        iat:moment().unix(),
    },process.env.SECRET_KEY_JWT);
};


const user = mongoose.model('user',userSchema);

module.exports = user;