describe('iOS Elements Tests', () => {
    // find element by accessibility id
    it('Find Element by Accessibility Id', async() => {
        // select the Alert Views option by using accessibility id
        const alertViewsOption = await $('~Alert Views');
        // click on the element
        await alertViewsOption.click();
        // select the Simple option by using accessibility id
        const simpleOption = await $('~Simple');
        // click on the element
        await simpleOption.click();
        // assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });
    // Find Element by Tag name
    it('Find element by Tag Name', async() => {
        // single element printout
        console.log(await $('XCUIElementTypeStaticText').getText());
        // multiple elements
        const textElements = await $$('XCUIElementTypeStaticText').getText();
        // for loop to get all the elements
        for (const element of textElements){
            console.log(await element.getText());
        }
    });
    // Find Element by Xpath & Label
    it('Find Element by xpath & label', async() => {
        // select the Alert Views option by using xpath
        const alertViewsOption1 = await $('//XCUIElementTypeStaticText[@name="Alert Views"]');
        // click on the element
        await alertViewsOption1.click();
        // select the Simple option by using label
        const simpleOption1 = await $('//XCUIElementTypeStaticText[@label="Simple"]');
        // click on the element
        await simpleOption1.click();
        // assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });
    // Find Element by @name & @label
    it('Find Element by @name & @label', async() => {
        // select the Alert Views option by using xpath
        const alertViewsOption2 = await $('//*[@name="Alert Views"]');
        // click on the element
        await alertViewsOption2.click();
        // select the Simple option by using label
        const simpleOption2 = await $('//*[@label="Simple"]');
        // click on the element
        await simpleOption2.click();
        // assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });

});