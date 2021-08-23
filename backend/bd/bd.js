const mongoose = require('mongoose');

const Database_connect = async() => {
    try {
        await mongoose.connect(process.env.BD_CONNECTION,{
            useNewUrlParser:true,
            useFindAndModify:false,
            useCreateIndex:true,
            useUnifiedTopology:true
        })
        console.log('Server running with mongo DB')
    } catch (e) {
        console.log('The server no responds',e);
    }
}


module.exports = {Database_connect}