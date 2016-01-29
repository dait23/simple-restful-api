
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var venueSchema = new mongoose.Schema({
    address: String,
    address2: String,
    neighborhood: String,
    city: String,
    //url: String,
    //description: String,
    long: String,
    lat: String,
    rank: Number,
    //phone: Number,
    zip: Number,
    name: String,
    //created_at: String,
    //updated_at: String,
    photos: String
});

// Return model
module.exports = restful.model('Venues', venueSchema);
