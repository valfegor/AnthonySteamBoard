const Role = require("../models/role");

const Admin = async(req, res,next) =>{
    let role = await Role.findById(req.user.id_Role);

    if(!role) return res.status(400).send("Sorry That Role dont exist in the base");

    if(role.name === "user") next();
    else return res.status(400).send("Sorry you are not admin plase call the admin");

}

module.exports = Admin;
