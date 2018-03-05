//console.log('Starting Notes.js');


const fs = require('fs');


var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (error) {
     return [];   
    }
}


var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}


var addNotes = (title, body) => {
    console.log('Adding Notes', title, body);
    var notes = [];
   // ES06 Feature
    var note = {
        title,
        body
    };
    notes = fetchNotes();
    var duplicateNotes = notes.filter((note) =>{
        return note.title === title;
    });
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Listing all the notes..');
    return fetchNotes();
};


var readNotes = (title) => {
    console.log('Getting note....',title);
    var notesList = fetchNotes();
    var filteredNote = notesList.filter((note) =>  note.title === title);
    return filteredNote[0];
}

var deleteNotes = (title) => {
    console.log('Deleting note....',title);
    var notesList = fetchNotes();
    var filteredNotesList =  notesList.filter((note) => note.title !== title);
    saveNotes(filteredNotesList);
    return notesList.length !== filteredNotesList.length;
}

var logNote = (note) => {
    debugger;
    console.log('------------');
    console.log('Title: ',note.title);        
    console.log('Body: ',note.body);
}


module.exports = {
    addNotes,
    getAll,
    readNotes,
    deleteNotes,
    logNote
};