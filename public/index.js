'use strict';

// Make connection
const socket = io.connect('http://localhost:4000');

// Listen for events
/**
 * For now, I'll be hard coding the users' lat and long because
 * of the dummy data that's stored in the database
 */
socket.emit('entrants-data', {
    lat: 1,
    long: 1
})

// Query DOM

// Emit events
btn.addEventListener('click', () => {
    socket.emit('vote', {
        vote: 1,  // 1 - vote up, 0 - vote down
        user: 'Alina'  
    })
});

// Listen for events
socket.on('update-votes', (data) => {
    
})