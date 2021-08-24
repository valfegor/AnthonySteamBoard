const Role = require('../models/role');


const registerRole = async (req, res) => {
    if(!req.body.name || !req.body.description) return res.status(400).send("Sorry please use all the camps");

    let existing_role = await Role.findOne({name: req.body.name});

    if(existing_role) returnres.status(400).send("Sorry the role its already created");


    const role = new Role({
        name:req.body.name,
        description:req.body.description,
        Status:true,
        Users_using:0,
    });

    let result = role.save();

    if(!result) return res.status("Sorry try again");

    return res.status(200).send({role});
}


const listRoles = async (req, res) => {
    const role = await Role.find();
    if(!role) return res.status(400).send("Sorry No role Created ");
    return res.status(200).send({role})
}


const updateRole = async (req, res) => {
    if (!req.body.description || !req.body._id) return res.status(400).send("Sorry please use al the camps");

    const role = await Role.findByIdAndUpdate(req.body._id,{
        description: req.body.description,
        user_id:req.user._id,
    });


    if(!role) return res.status(400).send("Cant save please Try again");

    return res.status(200).send({role});





}

module.exports = {registerRole,listRoles,updateRole}