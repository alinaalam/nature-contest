const Entrant = require('../../models/entrant/entrant');

  /**
 * Get users' lat and long and query the database
 * on the basis of those params and send back the entrants that come
 * in that vicinity
 * Right now, I am sending back all the entrants
 */
getEntrantsData = (lat, lng, io) => {
    Entrant
        .find({})
        .then((entrants) => {
            io.sockets.emit('entrants-data', entrants);
        }).catch((error) => {
            console.log(error);
        });
}

/**
 * Vote for a particular user
 */
let voteForAnEntrant = (id, vote, io) => {
    let value = (vote == 1) ? 1 : -1;
    Entrant
        .findOneAndUpdate({_id: id}, {$inc: { votes: value }})
        .then((data) => {
            /**
             * Right now, I am getting all the entrants, however, I should
             * only be sending the entrant that has been updated so all the
             * clients can update their end likewise
             */
            // Get all entrants
            getEntrantsData(1, 1, io);
        }).catch((error) => {
            console.log(error);
        })
}

module.exports = {
    getEntrantsData: getEntrantsData,
    voteForAnEntrant: voteForAnEntrant        
};