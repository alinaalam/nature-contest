// File with dummy data
let path = appRoot + '/public/assets/images/';

module.exports = [
    {
        name: 'Sarah Paul',
        image: path + 'entry1.jpeg',
        location: {
            type: 'Point',
            coordinates: [-0.09, 51.505]
        },
    },
    {
        name: 'Patrick Dempsey',
        image: path + 'entry2.jpeg',
        location: {
            type: 'Point',
            coordinates: [-0.068707, 51.518149]
        },
    },
    {
        name: 'John Green',
        image: path + 'entry3.jpeg',
        location: {
            type: 'Point',
            coordinates: [-0.109649, 51.49352]
        },
    }
];