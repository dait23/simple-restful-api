
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var memberSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    profile_image_url: String,
    gender: String,
    email: String,
    photos: String,
    about: String,
    birthday: String,
    location: String,
    userId: String,
    created_at: String,
    last_login: String
});

// Return model
module.exports = restful.model('Members', memberSchema);
