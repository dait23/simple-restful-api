
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var User = require('../models/users');
var Member = require('../models/members');
var Venue = require('../models/venues');
var Event = require('../models/events');
var Chat = require('../models/chats');


// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

///Users
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

///Members
Member.methods(['get', 'put', 'post', 'delete']);
Member.register(router, '/members');

///Venues
Venue.methods(['get', 'put', 'post', 'delete']);
Venue.register(router, '/venues');

///Events
Event.methods(['get', 'put', 'post', 'delete']);
Event.register(router, '/events');

///Chats
Chat.methods(['get', 'put', 'post', 'delete']);
Chat.register(router, '/chats');




// Return router
module.exports = router;
