const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    name:String,
    description:String,
    Status:String,
    date:{type:Date,default:Date.now},
    id_user:{ type: mongoose.Schema.ObjectId, ref: "user" }
});


const board = mongoose.model('board',boardSchema);

module.exports = board;