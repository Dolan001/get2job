const mongoose = require("mongoose");

const user_info = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    Email:{
        type:String,
        required: true
    },
    Password:{
        type:String,
        required: true
    },
    Phone:{
        type:Number,
        required: true
    },
    Country:{
        type:String,
        required: true
    },
    City:{
        type:String,
        required: true
    },
    Address:{
        type:String,
        required: true
    },
    Post_code:{
        type:Number,
        required: true
    },
    Education:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("users", user_info);