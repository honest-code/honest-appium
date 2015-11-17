'use strict';

module.exports = (sauronConnection, data) => {
    return new Promise(
        (resolve, reject) => {
            sauronConnection.on('error', function (err) {
                console.log('sendAndWaitForSauronResponse[error]', err);
                reject(err);
            });
            sauronConnection.on('data', function (data) {
                console.log('sendAndWaitForSauronResponse[data]', data.toString());
                resolve(JSON.parse(data.toString()));
            });
            sauronConnection.end(JSON.stringify(data));
        }
    );
}