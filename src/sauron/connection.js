'use strict';

const net = require('net');

module.exports = (host, port) => {
    return new Promise(
        (resolve, reject) => {

            console.log('sauronConnection', host, port);

            const sauronConnection = new net.Socket();
            sauronConnection.on('end', function () {
                console.log('client end')
            });
            sauronConnection.on('close', function () {
                console.log('connection closed')
            });
            sauronConnection.on('error', function (err) {
                console.log(err);
                reject(err);
            });
            sauronConnection.connect(port, host, function () {
                resolve(sauronConnection);
            });
        }
    );
}