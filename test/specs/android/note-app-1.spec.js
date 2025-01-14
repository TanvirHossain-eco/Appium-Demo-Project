// describe & it for the test
describe('Add Notes', () => {
    it('Skip the Tutorial', async() => {
        // access the tutorial screen by using resource id
        const skipTutorial = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
        // click on the element
        await skipTutorial.click();
        // assertion by using text
        const textNote1 = await $('//*[@text="Add note"]');
        await expect(textNote1).toBeDisplayed();
    });

    it('Adding Single Note', async() => {
        // select the add note button by using text
        const addNote_1 = await $('//*[@text="Add note"]');
        // select the add note button by using + button
        const addNote_2 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
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
        const textOption1 = await $('//*[@text="Text"]');
        // click on the element
        await textOption1.click();
        // assertion the editing text
        const editNote1 = await $('//*[@text="Editing"]');
        await expect(editNote1).toBeDisplayed();
        // select the note title by using resource id
        const noteTitle1 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
        // add the note title
        await noteTitle1.addValue("Test Note");
        // select the note description by using resource id
        const noteDescription1 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
        // add the note description
        await noteDescription1.addValue("This is a single test note created by Appium Automation");
        // save the changes by going back Once
        await driver.back();
        await driver.pause(5000);
        // select the edit button by using resource id
        const editButton1 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
        //assertion by confirming edit button to be displayed
        await expect(editButton1).toBeDisplayed();
        // get the note title text
        const noteTitle1Text = await noteTitle1.getText();
        // save the changes by going back twice
        await driver.back();    
        await driver.pause(5000);
        // assertion by confirming note title to be displayed
        const displayNoteTitle1= await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
        const displayNoteTitle1Text = await displayNoteTitle1.getText();
        await expect(noteTitle1Text).toEqual(displayNoteTitle1Text);
    });

    it('Adding Multiple Notes', async() => {
        // select the add note button by using text
        const addNote1 = await $('//*[@text="Add note"]');
        // select the add note button by using + button
        const addNote2 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
        for (let i = 1; i <= 3; i++) {
            // Check which add note element is displayed and click it
            if (await addNote1.isDisplayed()) {
                await addNote1.click();
            } else {
                await addNote2.click();
            }
        
            // Select the "Text" option
            const textOption = await $('//*[@text="Text"]');
            await textOption.click();
        
            // Assert that the editing text is displayed
            const editNote = await $('//*[@text="Editing"]');
            await expect(editNote).toBeDisplayed();
        
            // Select the note title field and add a dynamic title
            const noteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
            await noteTitle.addValue(`Test Note-${i}`);
        
            // Select the note description field and add a dynamic description
            const noteDescription = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
            await noteDescription.addValue(`This is a test note ${i} created by Appium Automation`);
        
            // Save the changes by going back once
            await driver.back();
            await driver.pause(5000);
        
            // Select the edit button and assert it is displayed
            const editButton = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
            await expect(editButton).toBeDisplayed();
            // get the note title text
            const noteTitleText = await noteTitle.getText();
        
            // Save the changes by going back twice
            await driver.back();
            await driver.pause(5000);
        
            // Assert that the created note title is displayed
            const displayNoteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
            const displayNoteTitleText = await displayNoteTitle.getText();
            await expect(noteTitleText).toEqual(displayNoteTitleText);
            
        }       
    });
    it('Delete Single Note', async() => {
        
        // select the display note by using resource id
        const displayNoteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        // grab the text of the note
        const displayNoteTitleText = await displayNoteTitle.getText();
        // click on the note
        await displayNoteTitle.click();
        // select the more icon by using the accessibility id
        const moreOption = await $('~More');
        // click on the element
        await moreOption.click();
        // select the delete option by using text
        const deleteOption = await $('//*[@text="Delete"]');
        // click on the element
        await deleteOption.click();
        //accept the alert
        await driver.acceptAlert();
        // // assertion by using text
        // await expect(noteText).not.toBeDisplayed();
        // select the nav icon by using resource id
        const navOption = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
        // click on the element
        await navOption.click();
        // select the trash can option by using text
        const trashCanOption = await $('//*[@text="Trash Can"]');
        // click on the element
        await trashCanOption.click();
        // select the text from the trash can by using resource id
        const trashCanDisplayNoteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        // grab the text of the note
        const trashCanDisplayNoteText = await trashCanDisplayNoteTitle.getText();
        console.log("Trash Can Item Text: ",trashCanDisplayNoteText);
        // assertion by using trashcanItem Text vs note Text
        console.log("Note Text: ",displayNoteTitleText);
        await expect(trashCanDisplayNoteText).toEqual(displayNoteTitleText);
        
    });

    it('Delete Multiple Notes', async () => {
         // select the nav icon by using resource id
         const navOption2 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
         // click on the element
         await navOption2.click();
         // select the Notes option by using text
         const notesOption = await $('//*[@text="Notes"]');
         // click on the element
         await notesOption.click();
         
        // Find all note elements on the screen
        const notes = await $$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        
        // Log the total number of notes
        const totalNotes = notes.length;
        console.log(`Total notes found: ${totalNotes}`);

        for (let i = 0; i < totalNotes; i++) {
            // Refresh the notes list
            const currentNotes = await $$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
            
            // Select the first note in the list
            const note = currentNotes[0];

            // Grab the text of the note for verification later
            const noteText = await note.getText();
            console.log(`Deleting note: ${noteText}`);

            // Click on the note
            await note.click();

            // Select the more icon by using the accessibility id
            const moreOption = await $('~More');
            // Click on the more option
            await moreOption.click();

            // Select the delete option by using text
            const deleteOption = await $('//*[@text="Delete"]');
            // Click on the delete option
            await deleteOption.click();

            // Accept the alert to confirm deletion
            await driver.acceptAlert();

            // Pause to allow UI to update
            await driver.pause(2000);

            // click on the nav icon
            await navOption2.click();
            // select the trash can option by using text
            const trashCanOption2 = await $('//*[@text="Trash Can"]');
            // click on the trash can element
            await trashCanOption2.click();
            // verify the deleted note is in the trash can
            const trashCanDisplayNoteTitle2 = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
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
        const remainingNotes = await $$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        console.log("All notes deleted.");
        await expect(remainingNotes.length).toBe(0);
    });
});
