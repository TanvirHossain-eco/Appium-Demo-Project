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
    // Native App to Webview Chrome
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
        await browser.pause(2000);
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
        console.log("All Contexts are:" + contexts);
        await driver.pause(2000)
        const currentContext = await driver.getContext();
        console.log("Current Context: " + currentContext)
        await driver.switchContext("WEBVIEW_chrome");
        const switchedContext = await driver.getContext();
        console.log("Switch Context: " + switchedContext);
        // assertion
        // get the url of the current page
        const currentUrl = await browser.getUrl();        
        // verify current url contains facebook
        await expect(currentUrl).toContain("facebook.com/ColorNote/");
        // // assertion-2
        // const coverImg = await $('.img.coverPhoto');
        // await expect(coverImg).toBeDisplayed();
    });
    // Webview Chrome to Native App
    it('Return to Native App', async() => {
        // switch back to Native App
        await driver.switchContext("NATIVE_APP");
        // pause for 2 seconds
        // await driver.pause(2000);
        // printout the current context
        const switchedContext = await driver.getContext();
        console.log("Switch Context: " + switchedContext);
        // return to my application
        await driver.back();
        await driver.back();
        // pause for 2 seconds
        await driver.pause(2000);
        // get the notes button by using text
        const notes = await $('//*[@text="Notes"]');
        // click on the element
        await notes.click();
        // assertion
        const textNote1 = await noteAppPage.addNote;
        await expect(textNote1).toBeDisplayed();

    });

});