const mongoose = require('mongoose');
require('dotenv').config()

mongoose.set('strictQuery', true);
const connectDB=()=>{
    mongoose.connect(process.env.DB)
                .then(()=>{
                    console.log("Connected to Database")
                })
                .catch((error)=>{
                    console.log("Error connecting to Database",error.message)
                })
            }

module.exports=connectDB;