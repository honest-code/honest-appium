"use strict";

const net = require('net'),
    appiumConnection = require('./appium/connection'),
    appiumTakeScreenshot = require('./appium/take_screenshot'),
    appiumDeviceTap = require('./appium/device_tap'),
    sauronConnection = require('./sauron/connection'),
    sendAndWaitForSauronResponse = require('./sauron/send_and_wait'),
    wd = require('wd')
    ;

var appiumDriver;
var settings;

function config(host, port, appiumConfig) {
    settings = {
        host: host,
        port: port,
        appiumConfig: appiumConfig
    }
}

function appiumStart() {
    return new Promise((resolve, reject) => {
        appiumConnection(settings.host, settings.port, settings.appiumConfig)
            .then(driver=> {
                console.log(driver.configUrl.href);
                console.log(driver.configUrl.href+"/session/"+driver.sessionID);
                appiumDriver = driver;
                resolve()
            })
            .catch(reject);
    });
}

function deviceTap(x, y) {
    return appiumDeviceTap(appiumDriver, x, y);
}

function findText(text) {
    return new Promise(
        (resolve, reject) => {
            appiumTakeScreenshot(appiumDriver)
                .then(screenshot=>
                    sauronConnection('home.frikiplanet.com', 6666)
                        .then(sauronConnection => sendAndWaitForSauronResponse(sauronConnection, {
                            'image': screenshot,
                            'text': text
                        }))
                )
                .then(resolve)
                .catch(reject)
            ;
        });
}

module.exports = {
    config: config,
    start: appiumStart,
    deviceTap: deviceTap,
    findText: findText
};