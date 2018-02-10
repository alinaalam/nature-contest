const os = require('os'),
      expect = require('chai').expect,
      io = require('socket.io-client');

const baseUrl = `http://${os.hostname()}:4000`;
let options = {forceNew: true};

describe('async test with socket.io', () => {
    it('send out entrants', (done) => {
        let client = io(baseUrl, options);

        client.emit('entrants-data', {
            lat: 51.505,
            long: -0.09
        });

        client.on('entrants-data', (data) => {
            expect(data.length).to.equal(3);
            done();
        })
    })    
});