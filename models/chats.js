
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var chatSchema = new mongoose.Schema({
    address: String,
    address2: String,
    neighborhood: String,
    city: String,
    url: String,
    description: String,
    long: Number,
    lat: String,
    rank: Number,
    phone: Number,
    zip: Number,
    name: String,
    photos: String
});

// Return model
module.exports = restful.model('Chats', chatSchema);
