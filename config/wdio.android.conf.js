const path = require ('path');
const {config} = require ('./wdio.shared.conf');
const { version } = require('os');

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
    // '../test/specs/android/note-app-hooks.spec.js',  
    '../test/specs/android/note-app-webview.spec.js',
];
// =====================
// Add capabilities here
// =====================
config.capabilities = [
    
    {
        // capabilities for local Appium web tests on an Android Emulator
        'appium:platformName': 'Android',
        'appium:platformVersion': '15.0',
        'appium:deviceName': 'Pixel 9',
        'appium:automationName': 'UIAutomator2',
        "appium:app": path.join(process.cwd(), "app/android/ColorNote+Notepad.apk"),
        "appium:autoGrantPermissions": true,
        "appium:chromedriverExecutable": "D:/Mobile Automation/chromedriver-win64/chromedriver-win64/chromedriver.exe",
        'appium:autoWebview': false,
        'appium:ensureWebviewsHavePages': true,
        'appium:nativeWebScreenshot': true,
        
    },  
]
// Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services= ['appium'],

    // config.services= [['appium', {
    //     args:{
    //         address: 'localhost',
    //         port: 4723,
    //         relaxedSecurity: true
    //     },
    //     logPath: './'
    // }]];

exports.config = config;