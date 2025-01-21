// Native Actions in iOS
describe('iOS Native Actions', () => {
    // working with dialog/alert box by clicking Okay Button
    it('Alert Box', async() => {
        // select the alert views option by using accessibility id
        const alertViewsOption = await $('~Alert Views');
        // click on the alert views element
        await alertViewsOption.click();
        // select the Okay/Cancel option by using accessibility id
        const okayCancelOption = await $('~Okay / Cancel');
        // click on the okay/cancel element
        await okayCancelOption.click();
        // get the alert text
        console.log("Alert Text 1 -->", await driver.getAlertText());
        // select the Ok button by using accessibility id
        const okButton = await $('~OK');
        // click on the ok button element
        await okButton.click();
        // assertion
        await expect(okButton).not.toExist();
        
    });
    // working with dialog/alert box 2 by dismissing Alert
    it('Alert Box', async() => {
        // select the alert views option by using accessibility id
        const alertViewsOption = await $('~Alert Views');
        // click on the alert views element
        await alertViewsOption.click();
        // select the Okay/Cancel option by using accessibility id
        const okayCancelOption = await $('~Okay / Cancel');
        // click on the okay/cancel element
        await okayCancelOption.click();
        // get the alert text
        console.log("Alert Text 1 -->", await driver.getAlertText());
        // select the Ok button by using accessibility id
        const okButton = await $('~OK');
        // accept/dismiss Alert
        await driver.dismissAlert();
        // assertion
        await expect(okButton).not.toExist();
        
    });
    // Scroll Up/Down in iOS
    it('iOS Scroll', async() => {
        // On opening the app scrolling down
        await driver.execute('mobile: scroll', {
            direction: 'down'
        });
        // On opening the app scrolling up
        await driver.execute('mobile: scroll', {
            direction: 'up'
        })

    });
    // Scrolling until find the element on pick view
    it('pick view scrolling', async() => {
        // select the picker view option by using accessibility id
        const pickerView = await $('~Picker View');
        // click on the picker view element
        await pickerView.click();
        // select the red picker color option
        const redPicker = await $('~Red color component value');
        // scroll down via red picker element id 
        await driver.execute('mobile: scroll', {
            element: redPicker.elementID,
            direction: 'down'
        });
        // select the blue picker color option
        const bluePicker = await $('~Blue color component value');
        // scroll down via blue picker element id 
        await driver.execute('mobile: scroll', {
            element: bluePicker.elementID,
            direction: 'up'
        });
        await driver.pause(2000);
    });
    // Find & Set RGB color code with Picker View
    it('Find & Select Scrollable Picker', async() => {
        // select the picker view option by using accessibility id
        const pickerView = await $('~Picker View');
        // click on the picker view element
        await pickerView.click();
        // select the red picker color option
        const redPicker1 = await $('~Red color component value');
        // select the green picker color option
        const greenPicker1 = await $('~Green color component value');
        // select the blue picker color option
        const bluePicker1 = await $('~Blue color component value');
        // set the purple color code (125, 0, 125)
        await redPicker1.addValue('125');
        await greenPicker1.addValue('0');
        await bluePicker1.addValue('125');
        // pause for 2 seconds
        await driver.pause(2000);
    });
});