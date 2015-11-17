"use strict";

function prepare(settings) {
    const honestAppium = require('./honest-appium');
    honestAppium.config(settings.host,settings.port,settings.appiumConfig);
    return honestAppium;
}

module.exports = { prepare : prepare };