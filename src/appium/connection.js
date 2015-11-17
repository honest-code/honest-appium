'use strict';

const wd = require('wd');

module.exports = (host, port, appiumConfig) => {
    const appiumDriver = wd.remote({hostname: host, port: port});
    return new Promise((resolve, reject)=> {
        appiumDriver.init(appiumConfig, ()=> {
            resolve(appiumDriver);
        });
    });
}