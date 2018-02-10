'use strict';

// Make connection
const socket = io.connect('http://localhost:4000');

/**
 * For now, I'll be hard coding the users' lat and long because
 * of the dummy data that's stored in the database
 */
socket.emit('entrants-data', {
    lat: 51.505,
    long: -0.09
});

// Listen for events
socket.on('entrants-data', (data) => {
    // Populate the map with the pins
    data.forEach(entrant => {
        let loc = entrant.location.coordinates;
        let marker = L.marker([loc[1], loc[0]]).addTo(mymap);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    });
    console.log(data);
})

// Listen for events


// Query DOM

// Emit events
// btn.addEventListener('click', () => {
//     socket.emit('vote', {
//         vote: 1,  // 1 - vote up, 0 - vote down
//         user: 'Alina'  
//     })
// });

// Listen for events
socket.on('update-votes', (data) => {
    
})