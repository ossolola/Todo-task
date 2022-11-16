const {application} = require("express");

const mongoose = require("mongoose");

const {config} = require("dotenv")

config();


const connect = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect(
            'mongodb+srv://ossolola:Sijibomi+2000@cluster0.fwemmmt.mongodb.net/?retryWrites=true&w=majority', 
            connectionParams)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error.message);
        console.log("Database Connection Failed");
    }
}

// connect();




// async function connect(uri) {
//     try {
//         mongoose.connect(uri || 'mongodb://localhost/27017')
//         console.log("Connected to MongoDB")
//     } catch (error) {
//         console.log(error.message)
//     }
// }

module.exports = connect;