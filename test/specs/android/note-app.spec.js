// import the page object
const noteAppPage = require('../../pom/android/note-app-page');

// describe & it for the test
describe('Add Notes', () => {
    it('Skip the Tutorial', async() => {
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

    it('Adding Single Note', async() => {
        // select the add note button by using text
        // const addNote_1 = await $('//*[@text="Add note"]');
        // select the add note button by using text from the pom
        const addNote_1 = await noteAppPage.addNote;
        // select the add note button by using + button
        // const addNote_2 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
        // select the add note button by using + button from the pom
        const addNote_2 = await noteAppPage.plusNote;
        // conditions
        if (await addNote_1.isDisplayed()) {
            // click on the element
            await addNote_1.click();
        }
        else {
            // click on the element
            await addNote_2.click();
        }
        
        // select the text option by using text
        // const textOption1 = await $('//*[@text="Text"]');
        // select the text option by using text from the pom
        const textOption1 = await noteAppPage.textOption;
        // click on the element
        await textOption1.click();
        // assertion the editing text
        // const editNote1 = await $('//*[@text="Editing"]');
        // assertion the editing button from the pom
        const editNote1 = await noteAppPage.editView;
        await expect(editNote1).toBeDisplayed();
        // select the note title by using resource id
        // const noteTitle1 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
        // select the note title by using resource id from the pom
        const noteTitle1 = await noteAppPage.noteTitle;
        // add the note title
        await noteTitle1.addValue("Test Note");
        // select the note description by using resource id
        // const noteDescription1 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
        // select the note description by using resource id from the pom
        const noteDescription1 = await noteAppPage.noteDescription;
        // add the note description
        await noteDescription1.addValue("This is a single test note created by Appium Automation");
        // save the changes by going back Once
        await driver.back();
        await driver.pause(5000);
        // select the edit button by using resource id
        // const editButton1 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
        // select the edit button by using resource id from the pom
        const editButton1 = await noteAppPage.editButton;
        //assertion by confirming edit button to be displayed
        await expect(editButton1).toBeDisplayed();
        // get the note title text
        const noteTitle1Text = await noteTitle1.getText();
        // save the changes by going back twice
        await driver.back();    
        await driver.pause(5000);
        // assertion by confirming note title to be displayed
        const displayNoteTitle1= await noteAppPage.displayNoteTitle;
        const displayNoteTitle1Text = await displayNoteTitle1.getText();
        await expect(noteTitle1Text).toEqual(displayNoteTitle1Text);
    });

    it('Adding Multiple Notes', async() => {
        // select the add note button by using text
        // const addNote1 = await $('//*[@text="Add note"]');
        // select the add note button by using text from the pom
        const addNote1 = await noteAppPage.addNote;
        // select the add note button by using + button
        // const addNote2 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
        // select the add note button by using + button from the pom
        const addNote2 = await noteAppPage.plusNote;
        for (let i = 1; i <= 3; i++) {
            // Check which add note element is displayed and click it
            if (await addNote1.isDisplayed()) {
                await addNote1.click();
            } else {
                await addNote2.click();
            }
        
            // Select the "Text" option
            // const textOption = await $('//*[@text="Text"]');
            // Select the "Text" option from the pom
            const textOption = await noteAppPage.textOption;
            await textOption.click();
        
            // Assert that the editing text is displayed
            // const editNote = await $('//*[@text="Editing"]');
            // Assert that the editing button from the pom is displayed
            const editNote = await noteAppPage.editView;
            await expect(editNote).toBeDisplayed();
        
            // Select the note title field and add a dynamic title
            // const noteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
            // Select the note title field and add a dynamic title from the pom
            const noteTitle = await noteAppPage.noteTitle;
            await noteTitle.addValue(`Test Note-${i}`);
        
            // Select the note description field and add a dynamic description
            // const noteDescription = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
            // Select the note description field and add a dynamic description from the pom
            const noteDescription = await noteAppPage.noteDescription;
            await noteDescription.addValue(`This is a test note ${i} created by Appium Automation`);
        
            // Save the changes by going back once
            await driver.back();
            await driver.pause(5000);
        
            // Select the edit button and assert it is displayed
            const editButton = await noteAppPage.editButton;
            await expect(editButton).toBeDisplayed();
            // get the note title text
            const noteTitleText = await noteTitle.getText();
        
            // Save the changes by going back twice
            await driver.back();
            await driver.pause(5000);
        
            // Assert that the created note title is displayed
            const displayNoteTitle = await noteAppPage.displayNoteTitle;
            const displayNoteTitleText = await displayNoteTitle.getText();
            await expect(noteTitleText).toEqual(displayNoteTitleText);
            
        }       
    });
    it('Delete Single Note', async() => {
        
        // select the display note by using resource id
        // const displayNoteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        // select the display note by using resource id from the pom
        const displayNoteTitle = await noteAppPage.displayNoteTitle;
        // grab the text of the note
        const displayNoteTitleText = await displayNoteTitle.getText();
        // click on the note
        await displayNoteTitle.click();
        // select the more icon by using the accessibility id
        // const moreIcon = await $('~More');
        // select the more option by using the accessibility id from the pom
        const moreOption = await noteAppPage.moreButton;
        // click on the element
        await moreOption.click();
        // select the delete option by using text
        // const deleteOption = await $('//*[@text="Delete"]');
        // select the delete option by using text from the pom
        const deleteOption = await noteAppPage.deleteButton;
        // click on the element
        await deleteOption.click();
        //accept the alert
        await driver.acceptAlert();
        // // assertion by using text
        // await expect(noteText).not.toBeDisplayed();
        // select the nav icon by using resource id
        // const navIcon = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
        // select the nav option by using resource id from the pom
        const navOption = await noteAppPage.navButton;
        // click on the element
        await navOption.click();
        // select the trash can option by using text
        // const trashCan = await $('//*[@text="Trash Can"]');
        // select the trash can option by using text from the pom
        const trashCanOption = await noteAppPage.trashCanButton;
        // click on the element
        await trashCanOption.click();
        // select the text from the trash can by using resource id
        // const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        // select the text from the trash can display note title by using resource id from the pom
        const trashCanDisplayNoteTitle = await noteAppPage.displayNoteTitle;
        // grab the text of the note
        const trashCanDisplayNoteText = await trashCanDisplayNoteTitle.getText();
        console.log("Trash Can Item Text: ",trashCanDisplayNoteText);
        // assertion by using trashcanItem Text vs note Text
        console.log("Note Text: ",displayNoteTitleText);
        await expect(trashCanDisplayNoteText).toEqual(displayNoteTitleText);
        
    });

    it('Delete Multiple Notes', async () => {
         // select the nav icon by using resource id
        //  const navIcon2 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
         // select the nav option by using resource id from the pom
         const navOption2 = await noteAppPage.navButton;
         // click on the element
         await navOption2.click();
         // select the Notes option by using text
        //  const notesOption = await $('//*[@text="Notes"]');
         // select the Notes option by using text from the pom
         const notesOption = await noteAppPage.notesButton;
         // click on the element
         await notesOption.click();
         
        // Find all note elements on the screen
        // const notes = await $$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        // Find all note elements on the screen from the pom
        const notes = await noteAppPage.noteElements;

        // Log the total number of notes
        const totalNotes = notes.length;
        console.log(`Total notes found: ${totalNotes}`);

        for (let i = 0; i < totalNotes; i++) {
            // Refresh the notes list
            // const currentNotes = await $$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
            // Refresh the notes list from the pom
            const currentNotes = await noteAppPage.noteElements;

            // Select the first note in the list
            const note = currentNotes[0];

            // Grab the text of the note for verification later
            const noteText = await note.getText();
            console.log(`Deleting note: ${noteText}`);

            // Click on the note
            await note.click();

            // Select the more icon by using the accessibility id
            // const moreIcon = await $('~More');
            // Select the more icon by using the accessibility id from the pom
            const moreOption = await noteAppPage.moreButton;
            // Click on the more option
            await moreOption.click();

            // Select the delete option by using text
            // const deleteOption = await $('//*[@text="Delete"]');
            // Select the delete option by using text from the pom
            const deleteOption = await noteAppPage.deleteButton;
            // Click on the delete option
            await deleteOption.click();

            // Accept the alert to confirm deletion
            await driver.acceptAlert();

            // Pause to allow UI to update
            await driver.pause(2000);

            // click on the nav icon
            await navOption2.click();
            // select the trash can option by using text
            // const trash2Can = await $('//*[@text="Trash Can"]');
            // select the trash can option by using text from the pom
            const trashCanOption2 = await noteAppPage.trashCanButton;
            // click on the trash can element
            await trashCanOption2.click();
            // verify the deleted note is in the trash can
            // const trash2CanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
            // verify the deleted note is in the trash can from the pom
            const trashCanDisplayNoteTitle2 = await noteAppPage.displayNoteTitle;
            // grab the text of the note
            const trashCanDisplayNoteText2 = await trashCanDisplayNoteTitle2.getText();
            console.log(`Trash Can Item Text: ${trashCanDisplayNoteText2}`);

            // assertion to confirm the note text matches in trash
            await expect(trashCanDisplayNoteText2).toEqual(noteText);

            // click on the nav icon
            await navOption2.click();
            // click on the notes option
            await notesOption.click();

        }

        // Assert that no notes are left
        // const remainingNotes = await $$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        // Assert that no notes are left from the pom
        const remainingNotes = await noteAppPage.noteElements;
        console.log("All notes deleted.");
        await expect(remainingNotes.length).toBe(0);
    });
});
