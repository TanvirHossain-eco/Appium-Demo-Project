require('dotenv').config()
const path = require ('path');
const {config} = require ('./wdio.shared.conf');


// Adding User & Key for BrowserStack
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
// config.user = 'tanvirhossain_1shukE';
// config.key = '5RYXipXpzYxGxzaUEthg';
// check npm list @wdio/browserstack-service
// if not found then uninstall this service -> npm uninstall @wdio/browserstack-service
// reinstall this service -> npm install --save-dev @wdio/browserstack-service

// ====================
// Add spec files here
// ====================
config.specs = [
    // '../test/specs/android/note-app.spec.js',
    // '../test/specs/android/note-app-1.spec.js',
    // '../test/specs/android/note-app-3.spec.js',
    '../test/specs/android/note-app-hooks.spec.js',  
];
// =====================
// Add capabilities here
// =====================
config.capabilities = [
    // {
    //     // capabilities for local Appium web tests on an Android Emulator
    //     'appium:platformName': 'Android',
    //     'appium:platformVersion': '15.0',
    //     'appium:deviceName': 'Pixel 4',
    //     'appium:automationName': 'UIAutomator2',
    //     "appium:app": path.join(process.cwd(), "app/android/ApiDemos-debug.apk"),
    //     "appium:autoGrantPermissions": true
    // },
    // {
    //     // capabilities for local Appium web tests on an Android Emulator
    //     'appium:platformName': 'android',
    //     'appium:platformVersion': '11.0',
    //     'appium:deviceName': 'Google Pixel 4',
    //     'appium:automationName': 'UIAutomator2',
    //     "appium:app": "bs://b72304723e291312ed28addf7cad2f0bc0e844ce",
    //     "appium:autoGrantPermissions": true
    // },
    {
        // capabilities for BrowserStack on an Android Emulator
        'platformName': 'android',
        'platformVersion': '11.0',
        'deviceName': 'Google Pixel 4',
        'automationName': 'UIAutomator2',
        "app": "bs://b72304723e291312ed28addf7cad2f0bc0e844ce",
        "autoGrantPermissions": true
    },

    
    
]

// Configuration for Android on BrowserStack - Same as for iOS as well.
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services= ['browserstack'],

exports.config = config;