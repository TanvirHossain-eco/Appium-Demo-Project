describe('Android Native Features Tests', () => {
    it('Access an Activity Directly', async() => {
        // access an activity directly
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        // adding a pause
        await driver.pause(3000);
        // assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();        
    });

    it('Working with Dialog Boxes', async() => {
        // access an activity directly
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        // adding a pause
        await driver.pause(3000);
        //  access the dialog box by using resource id
        const dialogBox1 = await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]');
        // click on the first dialog box
        await dialogBox1.click();
        // get the alert text
        console.log("Alert Text -->", await driver.getAlertText());
        // alert box 
        const alertBox1 = await $('//*[@resource-id="android:id/alertTitle"]');
        // accept Alert
        // await driver.acceptAlert();
        // Ok button element
        const okButton = await $('//*[@resource-id="android:id/button1"]')
        // click on the Ok button
        await okButton.click();
        // click on the first dialog box
        await dialogBox1.click();
        // dismiss Alert
        // await driver.dismissAlert();
        // cancel button element
        const cancelButton = await $('//*[@resource-id="android:id/button2"]')
        // click on the cancel button
        await cancelButton.click();

        // assertion - alert box is no longer visibile
        await expect(alertBox1).not.toExist();
        
    });

    it('Vertical Scrolling', async() => {
        // access App option by accessibility id
        const appOption1 = await $('~App');
        // click on the element
        await appOption1.click();
        // access Activity option by accessibility id
        const activityOption1 = await $('~Activity');
        // click on the element
        await activityOption1.click();
        // access Secure Surfaces option by accessibility id
        const secureSurfacesOption1 = await $('~Secure Surfaces');
        // UI Scroll --> Scroll to End
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        // UI Scroll --> Scroll Text Into View
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');
        // UI Scroll --> Scroll Into View by using accessibility id
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("~Secure Surfaces"))');
        // UI Scroll --> Scroll Into View by using resource id
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("io.appium.android.apis:id/secure_surfaces"))');
        // click on the element
        await secureSurfacesOption1.click();
        // access Secure Dialog option by accessibility id
        const secureDialogOption1 = await $('~Secure Dialog');
        // assertion
        await expect(secureDialogOption1).toExist();
        
    });

    it('Horizontal Scrolling', async() => {
        // access the Gallery view with Driver Activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");
        // horizontal scroll -> Scroll to the Forward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000);
        // horizontal scroll -> Scroll to the Backward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(3000);
        // horizontal scroll -> Scroll to the End
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(10)');
        await driver.pause(3000);
        // horizontal scroll -> Scroll to the Beginning
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToBeginning(10)');
        await driver.pause(3000);
    });

    it.only('Scrolling Date Widget', async() => {
        // access the Date widget view with Driver Activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
        // get the current date by using the resource id
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
        console.log("Current Date -->", currentDate);
        // access the change the date button by using accessibility id
        const changeDateBtn = await $('~change the date');
        // click on the element
        await changeDateBtn.click();
        // Scroll horizontally to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        // select the 10th date by using text
        const newSetDate = await $('//*[@text="10"]');
        // click on the new set date element
        await newSetDate.click();
        // access the OK button by using text
        const okBtn = await $('//*[@text="OK"]');
        // click on the OK button
        await okBtn.click();
        // get the new date
        const newDate = await date.getText();
        console.log("New Date -->", newDate);
        // assertion
        await expect(newDate).not.toEqual(currentDate);        
    });

});