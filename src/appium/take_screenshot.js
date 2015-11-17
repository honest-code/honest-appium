'use strict';

module.exports = (appiumDriver) => {
    return new Promise(
        (resolve, reject) => {
            console.log('takeScreenshot');
            appiumDriver.takeScreenshot((err, screenshot) => {
                if (err) reject(err);
                resolve(screenshot);
            })
        }
    );
}
