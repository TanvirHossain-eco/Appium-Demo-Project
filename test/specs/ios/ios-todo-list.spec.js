describe('Todo List', () => {
    // Create Todo List
    it('Create a Todo List', async() => {
        // select the create list option by using name
        const createList = await $('//*[@name="Create list"]');
        // click on the element
        await createList.click();
        // select the enter list name option by using value
        const enterlistName = await $('//*[@value="List Name"]');
        // Add Value
        await enterlistName.addValue("Things to do");
        // select the create button by using accessibility id
        const createButton = await $('~Create');
        // click on the element
        await createButton.click();
        // select the created list by using accessibility id
        const createdList = await $("~Things to do");
        // assertion
        await expect(createdList).toBeExisting();
        
    });
    // Create Todo Item
    it('Create a Todo Item', async() => {
        // select the create list option by using accessibility id
        const listItem = await $('~Things to do');
        // click on the element
        await listItem.click();
        // select the create item option by using name
        const createItem = await $('//*[@name="Create item"]');
        // click on the element
        await createItem.click();
        // select the create item option by using value
        const enterItemName = await $('//*[@value="Title"]');
        // click on the element
        await enterItemName.addValue("Buy Groceries");
        // select the Due by using value
        const dueDate = await $('//*[@value="Due"]');
        // click on the element
        await dueDate.click();
        // select the date picker option by using accessibility id
        const datePicker = await $('~DatePicker');
        // click on the element
        await datePicker.click();
        // select a date by using accessibility id
        const selectDate = await $("~Friday, February 21"); // Must check this Scenario & Verify it
        // click on the element
        await selectDate.click();
        // select the Type Window option by using type
        const typeWindow = await $("//XCUIElementTypeWindow[@index=2]");
        // click on the element
        await typeWindow.click();
        // select the create button by using accessibility id
        const createButton = await $('~Create');
        // click on the element
        await createButton.click();
        // Assertion Started
        // select the created item by using accessibility id
        const createdItem = await $("~Buy Groceries");
        // assertion
        await expect(createdItem).toBeExisting();
        // select the due date by using accessibility id
        const createdDueDate = await $("~Due February 21, 2025");
        // assertion
        await expect(createdDueDate).toBeExisting();
    });
});