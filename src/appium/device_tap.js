'use strict';

const wd = require('wd');

module.exports = (appiumDriver, x, y) => {
    return new Promise(
        (resolve, reject) => {
            const action = new wd.TouchAction(appiumDriver);
            action
                .tap({x: x, y: y})
                .perform(function (err) {
                    if(err) reject(err);
                    resolve();
                })
            ;
        })
}