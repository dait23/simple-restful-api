
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    profile_image_url: String,
    gender: String,
    email: String,
    photos: String,
    about: String,
    birthday: String,
    location: String,
    created_at: String
});

// Return model
module.exports = restful.model('Users', userSchema);
