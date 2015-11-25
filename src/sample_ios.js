"use strict";

var honestAppium_iPhone = require("./index")
    .prepare({
        'host': '127.0.0.1',
        'port': 4723,
        'appiumConfig': {
            browserName: '',
            'app': '/Users/{user}/honest-appium/{app}.ipa',
            'platformName': 'iOS',
            'platformVersion': '9.1',
            'deviceName': 'honestiphone6s',
            'appium-version': '1.4.14'

        }
    });

describe("Node Sample Honest Appium", function () {
    this.timeout(30000);

    before(function (done) {
        honestAppium_iPhone
            .start()
            .then(done)
            .catch(done)
        ;
    });

    it("Should Click Login Button", function (done) {
        honestAppium_iPhone
            .findText('Login')
            .then(coords => honestAppium_iPhone.deviceTap(coords.centerX, coords.centerY))
            .then(done)
            .catch(done)
        ;
    });

});

