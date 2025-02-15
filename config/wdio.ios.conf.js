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
    // './test/specs/ios/*.js',
    './test/specs/ios/ios-todo-list*.js',
    // './test/specs/ios/ios-todo-list2.spec.js',
];
// =====================
// Add capabilities here
// =====================
config.capabilities = [
    {
        // capabilities for local Appium App tests on an iOS Emulator
                platformName: 'iOS',
                'appium:platformVersion': '15.5',
                'appium:deviceName': 'iPhone 11 Pro',
                'appium:automationName': 'XCUITest',
                "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app"),
                "appium:noReset": true,
                "appium:fullReset": false,
                // "appium:autoGrantPermissions": true
    },
    // {
        //     // capabilities for local Appium App tests on an iOS Emulator
        //     platformName: 'iOS',
        //     'appium:platformVersion': '15.5',
        //     'appium:deviceName': 'iPhone 11 Pro',
        //     'appium:automationName': 'XCUITest',
        //     "appium:app": path.join(process.cwd(), "app/ios/UIKitCatalog.app"),
        //     "appium:noReset": true,
        //     "appium:fullReset": false,
        //     // "appium:autoGrantPermissions": true
        // },
]

exports.config = config;