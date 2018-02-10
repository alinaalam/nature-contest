// File with dummy data
let path = appRoot + '/public/assets/images/';

module.exports = [
    {
        name: 'Sarah Paul',
        image: path + 'entry1.jpeg',
        location: {
            type: 'Point',
            coordinates: [-73.856077, 40.848447]
        },
    },
    {
        name: 'Patrick Dempsey',
        image: path + 'entry2.jpeg',
        location: {
            type: 'Point',
            coordinates: [-73.856077, 40.848447]
        },
    },
    {
        name: 'Natalia Portman',
        image: path + 'entry3.jpeg',
        location: {
            type: 'Point',
            coordinates: [-73.856077, 40.848447]
        },
    }
];