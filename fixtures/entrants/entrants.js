// Fixture file to create dummy entrants in the database
const Entrant = require('../../models/entrant/entrant'),
      fixtures = require('node-mongoose-fixtures'),
      data = require('./data');

// Reset database
fixtures.reset('entrant', (err, data) => {
    if (err) {
        console.log(err); 
    }
});

// Naming a dataset so this can be used later
fixtures.save('entrant', {
    entrant: data
});

// // Populating data
fixtures('entrant', (err, data) => {
    if (err) { 
        console.log(err); 
    }
});

console.log('Populating dummy entrants');