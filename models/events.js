
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var eventSchema = new mongoose.Schema({
    title : String,
    description : String,
    venue_name : String,
    start_datetime_str : String,
    end_datetime_str : String,
    location : String,
    date_full : String,
    rank : Number,
    fullfillment_type : String,
    fullfillment_value : String,
    event_type : String,
    status : String,
    tags : String,
    source : String,
    photos : String
});

// Return model
module.exports = restful.model('Events', eventSchema);
