// import the page object
const EditNoteScreen = require('../../pom/android/edit-note.screen');

// describe & it for the test
describe('Add Notes', () => {
    it('Skip the Tutorial', async() => {
        await EditNoteScreen.skipTutorial();
    });

    it('Adding Multiple Notes & Save it', async() => {
        await EditNoteScreen.addAndSaveNote();            
        
    });
    
    it('Delete Multiple Notes', async () => {
        await EditNoteScreen.deleteNote();
    });
});
