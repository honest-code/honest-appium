'use strict';

const fs = require('fs');
const config = fs.existsSync( process.cwd()+'/src/config.json') ? require('./config.json') : {};

module.exports = {
    APP_NAME : process.env.APP_NAME || config.APP_NAME,
    SAURON_HOST: process.env.SAURON_HOST || config.SAURON_HOST,
    SAURON_PORT : process.env.SAURON_PORT || config.SAURON_PORT
};
