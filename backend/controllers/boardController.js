const Board = require('../models/board');


const registerTask = async (req, res) => {
    if(!req.body.name || req.body.description) return res.status(400).send("Sorry please check all the camps please.");

    let validId = mongoose.Types.ObjectId.isValid(req.user._id);
    console.log(req.user._id);
    if (!validId) return res.status(400).send("Invalid id");

    const board = new Board({
        name: req.body.name,
        description: req.body.description,
        Status:"to-do",
        id_user:req.user._id,
    })

    let result = await result.save();

    if(!result.status) return res.status(400).send("Sorry please try again.");


    return res.status(200).send({board})

}


const updateBoard = async (req, res) => {

    if(!req.body._id || !req.body.Status || !req.body.description) return res.status(400).send("Sorry please check all the camps please.");

    



}