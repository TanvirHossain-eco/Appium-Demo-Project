describe('Todo List', () => {
    it('Create a Todo List', async() => {
        // select the create list option by using name
        const createList = await $('//*[@name="Create list"]');
        // click on the element
        await createList.click();
        // select the create list option by using value
        const enterlistName = await $('//*[@value="List Name"]');
        // click on the element
        await enterlistName.addValue("Things to do today");
        // select the create button by using accessibility id
        const createButton = await $('~Create');
        // click on the element
        await createButton.click();
        //
        const createdList = await $("~Things to do today");
        // assertion
        await expect(createdList).toBeExisting();
        
    });
});