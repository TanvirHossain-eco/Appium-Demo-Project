const path = require ('path');
const {config} = require ('./wdio.shared.conf');

// ====================
// Add port here
// ====================
config.port = 4724; // Change it when you will run on BrowserStack

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
    {
        // capabilities for local Appium web tests on an Android Emulator
        'appium:platformName': 'Android',
        'appium:platformVersion': '15.0',
        'appium:deviceName': 'Pixel 4',
        'appium:automationName': 'UIAutomator2',
        "appium:app": path.join(process.cwd(), "app/android/ColorNote+Notepad.apk"),
        "appium:autoGrantPermissions": true
    },
]

exports.config = config;