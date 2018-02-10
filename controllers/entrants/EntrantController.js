const Entrant = require('../../models/entrant/entrant');

module.exports = {
    /**
     * Get users' lat and long and query the database
     * on the basis of those params and send back the entrants that come
     * in that vicinity
     * Right now, I am sending back all the entrants
     */
    getEntrantsData: (lat, lng, io) => {
        Entrant
            .find({})
            .then((entrants) => {
                io.sockets.emit('entrants-data', entrants);
            }).catch((error) => {
                console.log(error);
            });
    }
}