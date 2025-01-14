describe('Android Element Tests', () => {
    it('Find Element by Accessibility Id', async() => {
        // find element by accessibility id
        const appOption = await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
        
    });
    it('Find element by class name', async() => {
        // find element by class name
        const className = await $('android.widget.TextView');

        console.log(await className.getText());

        // assertion
        await expect(className).toHaveText('API Demos');
        
    });
    it('Find Element by xpath', async() => {
        // find element by xpath
        const xpathName1 = await $('//android.widget.TextView[@content-desc="App"]');
        // click on the element
        await xpathName1.click();
        // find element by xpath
        const xpathName1_1 = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        // click on the element
        await xpathName1_1.click();
        // find the element by resource id
        const resourceId1 = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');
        // click on the element
        await resourceId1.click();
        // find element by text
        const commandText = await $('//android.widget.TextView[@text="Command two"]');
        // click on the element
        await commandText.click();
        // Text assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText('You selected: 1 , Command two');
        
    });

    it('Find Element by UIAutomator', async() => {
        // find element by text matches
        const textMatches1 = await $('android=new UiSelector().textMatches("App")');
        // click on the element
        await textMatches1.click();
        // find element by text contains
        const textContains1 = await $('android=new UiSelector().textContains("Alert")');
        // click on the element
        await textContains1.click();
                
    });

    it('Find Multiple Elements', async() => {
        //  expected array
        const expectedList = ['API Demos', 'Accessibility', 
            'Animation', 'App', 'Content', 'Graphics', 'Media', 
            'NFC', 'OS', 'Preference', 'Text', 'Views'];
        const actualList = [];
        // find multiple elements
        const textList1 = await $$('.android.widget.TextView');
        
        // loop through the elements
        for (const element of textList1) {
            actualList.push(await element.getText());
        }
        // assertion
        await expect(actualList).toEqual(expectedList);
    });

    it('Working with Text Field', async() => {
        // access the auto complete screen        
        // acces the views option by using accessibility id
        const idOption1 = await $('~Views');
        // click on the element
        await idOption1.click();
        // access the auto complete option by text
        const idOption2 = await $('//*[@text="Auto Complete"]');
        // click on the element
        await idOption2.click();
        // access the screen top option by xpath
        const idOption3 = await $('//*[@content-desc="1. Screen Top"]');
        // click on the element
        await idOption3.click();

        // enter the country name on text field
        // access the text field by using the resource id
        const textfield1 = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        // enter the country name
        await textfield1.addValue('Bangladesh');
        
        // Verify the country name
        await expect(textfield1).toHaveText('Bangladesh');
        
    });

});