const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.mongoDB_URI, {
            useUnifiedTopology: true,
        });
        console.log("mongodb connected successefully")
    } catch (error) {
        console.log(error);
        //exit processe with a failure code
        process.exit(1);
    }
   
}

module.exports = connectDB;