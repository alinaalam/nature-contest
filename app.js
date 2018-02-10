'use strict';

const express = require('express'),
      socket = require('socket.io'),
      mongoose = require('mongoose'),
      path = require('path');

const EntrantController = require('./controllers/entrants/EntrantController');

// Determining the app-root
global.appRoot = path.resolve(__dirname);
      
// Adding dummy data in the server
const fixtures = require('./fixtures/entrants/entrants');

// Connect to mongodb
mongoose.connect('mongodb://localhost/entrant');

// App setup
const app = express();
const server = app.listen(4000, () => {
    console.log('listening to requests on port 4000');
});


// Serving static content
app.use(express.static('public'));

// Socket setup
const io = socket(server);

// Listen out for an event - connection
io.on('connection', (socket) => {
    console.log('Made socket connection', socket.id);

    // Listen for the client to give their lat and lng and ask for entrants
    socket.on('entrants-data', (data) => {
        EntrantController.getEntrantsData(data.lat, data.lng, io); 
    })

    // Listen for client events when they vote for an entrant's picture
    socket.on('vote', (data) => {
        // Save this in the database
        EntrantController.voteForAnEntrant(data.id, data.vote, io);
    })
});