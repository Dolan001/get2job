const mongoose= require('mongoose');
//require("dotenv").config();

mongoose.Promise = global.Promise;

//mongoose.connect('mongodb+srv://Get2JobPortal:jobportal001@get2job-uu3nu.mongodb.net/admin?retryWrites=true&w=majority');
const conn = mongoose.connect('mongodb://127.0.0.1:27017');
if(!conn){
    console.log("Connection failed")
}else {
    console.log('Successfully Connected to the database');
}