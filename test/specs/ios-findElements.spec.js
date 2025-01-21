// Find Elements in iOS
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
    // FInd Element by class chain
    it('Find Element by class chain', async() => {
        // select the Alert Views class chain Id
        const alertText3 = '**/XCUIElementTypeStaticText[`label =="Alert Views"`]';
        // const alertText3 = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        // select the Alert Views option by usig class chain constructor
        const alertViewsOption3 = await $(`-ios class chain:${alertText3}`);
        // click on the element
        await alertViewsOption3.click();
        // select the Simple option by using label
        const simpleOption2 = await $('//XCUIElementTypeStaticText[@label="Simple"]');
        // click on the element
        await simpleOption2.click();
        // assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });
    // Find Element by predicate string
    it('Find Element by predicate string', async() => {
        // select the Alert Views predicate string
        const alertText4 = 'label =="Alert Views"';
        // const alertText4 = 'value BEGINSWITH[c] "Alert"'
        // select the Alert Views option by usig predicate string constructor
        const alertViewsOption4 = await $(`-ios predicate string:${alertText4}`);
        // click on the element
        await alertViewsOption4.click();
        // select the Simple option by using label
        const simpleOption3 = await $('//XCUIElementTypeStaticText[@label="Simple"]');
        // click on the element
        await simpleOption3.click();
        // assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });
    // Search Input Field
    it('Search Input Field', async() => {
        // select the search input field by using accessibility id
        const searchInput = await $('~Search');
        // click on the element
        await searchInput.click();
        // select the Default option by using accessibility id
        const defaultOption = await $('~Default');
        // click on the element
        await defaultOption.click();
        // select the seach input field by using xpath
        const searchInput1 = await $('//XCUIElementTypeSearchField');
        // add text to the search input field
        await searchInput1.addValue("I love this Appium Course!");
        // assertion
        await expect(searchInput1).toHaveAttr("Value");
        // select the clear button by using accessibility id
        const clearButton = await $('~Clear text');
        // click on the element
        await clearButton.click();
        // assertion
        await expect(searchInput1).not.toHaveAttr("Value");
    });

});