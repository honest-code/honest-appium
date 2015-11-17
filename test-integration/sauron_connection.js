"use strict";

const sauronConnection = require('../src/sauron/connection'),
    assert = require('assert'),
    config = require('../src/config.js')
    ;

describe("Sauron connection", function () {
    this.timeout(5000);

    before(function (done) {
        done();
    });

    it("Should receive PONG when connected with Sauron service", function (done) {
        sauronConnection(config.SAURON_HOST, config.SAURON_PORT)
            .then(conn=> {
                conn.on('error', (err) => {
                    done(err);
                });
                conn.on('data', (data) => {
                    assert.equal( data.toString(), 'PONG');
                    done();
                });
                conn.end('PING');
            })
            .catch(done)
        ;
    });

});
