// import the page object model
const noteAppPage = require('./note-app-page');
// create a class
class EditNoteScreen{
    // select add note button by using + button
    get plusNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }
    // select the add note button by using text
    get addNote(){
        return $('//*[@text="Add note"]');
    }
    // skip the tutorial
    async skipTutorial(){
        // access the tutorial screen by using resource id from the pom
        const skipTutorial = await noteAppPage.skipButton;
        // click on the element
        await skipTutorial.click();
        // assertion by using text from the pom
        const textNote1 = await this.addNote;
        await expect(textNote1).toBeDisplayed();
    }
    // add & save multiple note
    async addAndSaveNote (){
        // select the add note button by using text from the pom
        const addNote1 = await this.addNote;
        // select the add note button by using + button from the pom
        const addNote2 = await this.plusNote;
        for (let i = 1; i <= 3; i++) {
            // Check which add note element is displayed and click it
            if (await addNote1.isDisplayed()) {
                await addNote1.click();
            } else {
                await addNote2.click();
            }
        
            // Select the "Text" option from the pom
            const textOption = await noteAppPage.textOption;
            await textOption.click();
        
            // Assert that the editing button from the pom is displayed
            const editNote = await noteAppPage.editView;
            await expect(editNote).toBeDisplayed();
        
            // Select the note title field and add a dynamic title from the pom
            const noteTitle = await noteAppPage.noteTitle;
            await noteTitle.addValue(`Test Note-${i}`);
            // await noteTitle.addValue(noteHeading);
        
            // Select the note description field and add a dynamic description from the pom
            const noteDescription = await noteAppPage.noteDescription;
            await noteDescription.addValue(`This is a test note ${i} created by Appium Automation`);
            // await noteDescription.addValue(noteBody);
        
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

    }
    // delete multiple notes
    async deleteNote(){
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
    }
}
// export the class
module.exports = new EditNoteScreen();