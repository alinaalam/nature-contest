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
        let votes = entrant.votes;

        // Get the template
        let source = document.getElementById("marker-template").innerHTML;
        var template = Handlebars.compile(source);

        let marker = L.marker([loc[1], loc[0]], {
            icon: redIcon,
        }).addTo(mymap);

        marker.bindPopup(template({name: entrant.name, votes: entrant.votes, id: entrant._id})).openPopup();
    });
    console.log(data);
})

// Attach click event to dynamically created button
document.getElementById('mapid').addEventListener('click', (event) => {
    
    if (event.target.className.includes('vote')) {
       // Emit event to change the votes
       socket.emit('vote', {
           id: event.target.getAttribute('data-id'),
           vote: event.target.getAttribute('data-action')
       });
    }
});