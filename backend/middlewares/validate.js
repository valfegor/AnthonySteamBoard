//validamos el usuario.

const mongoose = require('mongoose');
const User = require('../models/user');

const validate = async(req, res,next)=>{
    let validId = mongoose.Types.ObjectId.isValid(req.user._id);
    console.log(req.user._id);
    if (!validId) return res.status(400).send("Invalid id");

    const user = await User.findById(req.user._id);
    console.log(user);
    if(!user) return res.status(400).send("Sorry that user its invalid");

    next();

}

module.exports = validate;