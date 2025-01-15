// define the class
class NoteAppPage {
    // select the skip button by using resource id
    get skipButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }
    // // select the add note button by using text
    // get addNote(){
    //     return $('//*[@text="Add note"]');
    // }
    // // select add note button by using + button
    // get plusNote(){
    //     return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    // }
    // select the text option by using text
    get textOption(){
        return $('//*[@text="Text"]');
    }
    // select the edit button by using text
    get editView(){
        return $('//*[@text="Editing"]');
    }
    // select the note title by using resource id
    get noteTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
    // select the note description by using resource id
    get noteDescription(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    // select the edit button by using resource id
    get editButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
    // select the display title by using resource id
    get displayNoteTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
    // select the more button by using accessibility id
    get moreButton(){
        return $('~More');
    }
    // select the delete button by using text
    get deleteButton(){
        return $('//*[@text="Delete"]');
    }
    // select the nav button by using resource id
    get navButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    // select the trash can button by using text
    get trashCanButton(){
        return $('//*[@text="Trash Can"]');
    }
    // select the notes button by using text
    get notesButton(){
        return $('//*[@text="Notes"]');
    }
    // select the note elements on the screen by using resource id
    get noteElements(){
        return $$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
    


}

// export the class
module.exports = new NoteAppPage();