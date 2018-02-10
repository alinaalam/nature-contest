const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      GeoJSON = require('mongoose-geojson-schema');

// Create Entrant Schema and Model
const EntrantSchema = new Schema({
    name: {
        type: String,
        required: [true, "Entrant's name is required"]
    },
    image: {
        type: String,
        required: [true, "Entrant's image is required"]
    },
    votes: {
        type: Number,
        default: 0
    },
    location: mongoose.Schema.Types.Point
});

const Entrant = mongoose.model('entrant', EntrantSchema);

module.exports = Entrant;