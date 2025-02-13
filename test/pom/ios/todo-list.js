class TodoListPage{
    // select the create list option by using name
    get createList(){
        return $('//*[@name="Create list"]');
    }
    // select the enter list name option by using value
    get enterListName(){
        return $('//*[@value="List Name"]');
    }
    // select the create button by using accessibility id
    get createButton(){
        return $('~Create');
    }
    // select the created list by using accessibility id
    get createdList(){
        return $('~Things to do');
    }
    // select the create item option by using name
    get createItem(){
        return $('//*[@name="Create item"]');
    }
    // select the create item title option by using value
    get enterItemTitleName(){
        return $('//*[@value="Title"]');
    }
    // select the Due by using value
    get dueDate(){
        return $('//*[@value="Due"]');
    }
    // select the date picker option by using accessibility id
    get datePicker(){
        return $('~DatePicker');
    }
    // select a date by using accessibility id
    get selectDate(){
        return $("~Friday, February 21"); // Must check this Scenario & Verify it
    }
    // select the Type Window option by using type
    get typeWindow(){
        return $("//XCUIElementTypeWindow[@index=2]");
    }
    // select the create button by using accessibility id
    get createBtn(){
        return $('~Create');
    }
    // select the created item by using accessibility id
    get createdItem(){
        return $('~Buy Groceries');
    }
    // select the due date by using accessibility id
    get createdDueDate(){
        return $('~Due February 21, 2025');
    }

}

// module.exports = new TodoListPage(); // CommonJS Module

export default new TodoListPage();
