const todoListPage = require('../../pom/ios/todo-list');
describe('Todo List', () => {
    // Create Todo List
    it('Create a Todo List', async() => {
        // select the create list option by using name
        // const createList = await $('//*[@name="Create list"]');
        // select the create list option by using name from the pom
        const createList = await todoListPage.createList;
        // click on the element
        await createList.click();
        // select the enter list name option by using value
        // const enterlistName = await $('//*[@value="List Name"]');
        // select the enter list name option by using value from the pom
        const enterlistName = await todoListPage.enterListName;
        // Add Value
        await enterlistName.addValue("Things to do");
        // select the create button by using accessibility id
        // const createButton = await $('~Create');
        // select the create button by using accessibility id from the pom
        const createButton = await todoListPage.createButton;
        // click on the element
        await createButton.click();
        // select the created list by using accessibility id
        // const createdList = await $("~Things to do");
        // select the created list by using accessibility id from the pom
        const createdList = await todoListPage.createdList;
        // assertion
        await expect(createdList).toBeExisting();
        
    });
    // Create Todo Item
    it('Create a Todo Item', async() => {
        // select the create list option by using accessibility id
        // const createdListItem = await $('~Things to do');
        // select the create list option by using accessibility id from the pom
        const listItem = await todoListPage.createdList;
        // click on the element
        await listItem.click();
        // select the create item option by using name
        // const createItem = await $('//*[@name="Create item"]');
        // select the create item option by using name from the pom
        const createItem = await todoListPage.createItem;
        // click on the element
        await createItem.click();
        // select the create item title option by using value
        // const enterItemTitleName = await $('//*[@value="Title"]');
        // select the create item title option by using value from the pom
        const enterItemTitleName = await todoListPage.enterItemTitleName;
        // click on the element
        await enterItemTitleName.addValue("Buy Groceries");
        // select the Due by using value
        // const dueDate = await $('//*[@value="Due"]');
        // select the Due by using value from the pom
        const dueDate = await todoListPage.dueDate;
        // click on the element
        await dueDate.click();
        // select the date picker option by using accessibility id
        // const datePicker = await $('~DatePicker');
        // select the date picker option by using accessibility id from the pom
        const datePicker = await todoListPage.datePicker;
        // click on the element
        await datePicker.click();
        // select a date by using accessibility id
        // const selectDate = await $("~Friday, February 21"); // Must check this Scenario & Verify it
        // select a date by using accessibility id from the pom
        const selectDate = await todoListPage.selectDate;
        // click on the element
        await selectDate.click();
        // select the Type Window option by using type
        // const typeWindow = await $("//XCUIElementTypeWindow[@index=2]");
        // select the Type Window option by using type from the pom
        const typeWindow = await todoListPage.typeWindow;
        // click on the element
        await typeWindow.click();
        // select the create button by using accessibility id
        // const createButton = await $('~Create');
        // select the create button by using accessibility id from the pom
        const createBtn = await todoListPage.createBtn;
        // click on the element
        await createBtn.click();
        // Assertion Started
        // select the created item by using accessibility id
        // const createdItem = await $("~Buy Groceries");
        // select the created item by using accessibility id from the pom
        const createdItem = await todoListPage.createdItem;
        // assertion 1
        await expect(createdItem).toBeExisting();
        // select the due date by using accessibility id
        // const createdDueDate = await $("~Due February 21, 2025");
        // select the due date by using accessibility id from the pom
        const createdDueDate = await todoListPage.createdDueDate;
        // assertion 2
        await expect(createdDueDate).toBeExisting();
    });
});