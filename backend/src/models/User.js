const mongoose = require('mongoose');//Importe mongoose

const UserSchema = new mongoose.Schema({//Create a schema that contain the user information
    email: String,
});

module.exports = mongoose.model('User',UserSchema);