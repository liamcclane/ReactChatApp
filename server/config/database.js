let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/myChatApp', {useNewUrlParser: true});

// model files
require('./../models/InstantMsg');