const noteappWebview = require('../../pom/android/note-app-webview');
const noteAppPage = require('../../pom/android/note-app-page');

describe('Web Browser Access', () => {

    before(async() => {
        // Print out it is Before Hooks test
        console.log("Before Hooks");
        // access the tutorial screen by using resource id
        // const skipTutorial = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
        // access the tutorial screen by using resource id from the pom
        const skipTutorial = await noteAppPage.skipButton;
        // click on the element
        await skipTutorial.click();
        // assertion by using text
        // const textNote1 = await $('//*[@text="Add note"]');
        // assertion by using text from the pom
        const textNote1 = await noteAppPage.addNote;
        await expect(textNote1).toBeDisplayed();
    });

    it('Access external link and verify content in the browser', async() => {
        // select the nav icon by using resource id
        const navIcon = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
        // click on the element
        await navIcon.click();
        // select the Like us on Facebook link by using text
        const fbLink = await $('//*[@text="Like us on Facebook"]');
        // click on the element
        await fbLink.click();
        // pause for 2 seconds
        // await browser.pause(2000);
        // pause for 2 seconds
        await driver.pause(2000);
        // select the close button by using class
        // const closeButton = await $('~android.app.Dialog');
        const closeButton = await $('//*[@text="Close"]');
        // click on the element
        await closeButton.click();
        //  get the current context
        // console.log("Current Context: ",await driver.getContext());
        // get all the contexts
        // await driver.getContexts();
        // switch to webview chrome context
        // await driver.switchContext("WEBVIEW_chrome");
        // get current context
        // console.log("Current Context: ",await driver.getContext());
        // assertion
        // get the url of the current page
        // const currentUrl = await driver.getUrl();        
        // // verify current url contains facebook
        // await expect(currentUrl).toContain("facebook.com/ColorNote/");
        let contexts = await driver.getContexts();
        console.log(contexts);
        await driver.pause(2000)
        const currentContext = await driver.switchContext(contexts[1]);
        console.log(currentContext);

    });
});