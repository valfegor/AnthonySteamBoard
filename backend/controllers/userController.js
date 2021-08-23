const User = require('../models/user');
const Role = require('../models/role');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


const registerNormalUser = async (req, res) => {
    if(!req.body.name || !req.body.password || !req.body.email) return res.status(400).send("Sorry please check te camps");

    const existingEmail = await User.findOne({email:req.body.email})

    if(existingEmail) return res.status(400).send("The email its already created please checkout");

    const role = await Role.findOne({name:"user"});

    if(!role) return res.status(400).send("Sorry no role asigned");

    const hash = await bcrypt.hash(req.body.password,10);

    console.log(role._id);

    let user = new User({
        name: req.body.name,
        password:hash,
        email:req.body.email,
        id_Role:role._id,
        Status:true
    });

    let result = await user.save();

    if(!result) return res.status(400).send("Sorry Please try again");

    try {
        let jwtToken = user.generateJWT();
        return res.status(200).send({jwtToken});
    } catch (e) {
        return res.status(400).send("Sorry please try again");
    }

}

const login = async (req, res) => {
    if(!req.body.email || !req.body.password) return res.status(400).send("Check all the camps please");
    let user = await User.findOne({email:req.body.email});
    console.log(user);
    if(!user) return res.status(400).send("The email or the password its incorrect");

    const hash = await bcrypt.compare(req.body.password, user.password);

    if(!hash) return res.status(400).send("Sorry The email or the password its incorrect");

    try {
        const jwt = user.generateJWT();
        return res.status(200).send({jwt});
    } catch (e) {
        return res.status(400).send("Sorry please try again");
    }

}

const RegisterAdmin = async (req, res) => {

    if(!req.body.name || !req.body.password || !req.body.email || !req.body.id_Role) return res.status(400).send("Sorry Check all the camps please");

    let validId = await mongoose.Types.ObjectId.isValid(req.body.id_Role);
     if (!validId) return res.status(400).send("Invalid role ID");

    const existingEmail = await User.findOne({email:req.body.email});

    if(existingEmail) return res.status(400).send("Email already taken");

    const hash = await bcrypt.hash(req.body.password,10);

    let user = new User({
        name: req.body.name,
        email:req.body.email,
        password:hash,
        id_Role:req.body.id_Role,
        Status:true,
    })

    let result = user.save();

    if(!result) return res.status(400).send("Sorry please try again");

    try {
        let jwt = user.generateJWT();
        return res.status(200).send({jwt});
    } catch (e) {
        return res.status(400).send("Sorry please try again");
    }

}




module.exports = {registerNormalUser,login,RegisterAdmin}