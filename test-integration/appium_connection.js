"use strict";

const appiumConnection = require('../src/appium/connection'),
    assert = require('assert')
    ;

describe("Appium connection", function () {
    this.timeout(30000);

    before(function (done) {
        done();
    });

    it("Should connect with Appium server", function (done) {

        const appiumConnectionSettings = {
            browserName: '',
            'app': '/Users/{user}/honest-appium/{app}.ipa',
            'platformName': 'iOS',
            'platformVersion': '9.1',
            'deviceName': 'honestiphone6s',
            'appium-version': '1.4.14'
        };

        appiumConnection('127.0.0.1', 4723, appiumConnectionSettings)
            .then((driver)=>{
                driver.status(function (err, version){
                    if(err) done(err);
                    assert.notEqual(version,null);
                    done();
                });
            })
            .catch(done)
        ;
    });

});
