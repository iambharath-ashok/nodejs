//console.log('Starting app.js');

const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');


var arg = process.argv[2];
//console.log('Arg -> ' +arg)
//console.log('Process'  + process.argv);
//console.log('Yargs ', argv);

const titleOptions = {
    describe : 'Title of Note',
    alias: 't',
    demand : true
};

const bodyOptions = {
    describe : 'Body of Title',
    alias : 'b',
    demand: true
};

const argv = yargs
    .command('add','Add a new note',{
      title : titleOptions,
      body : bodyOptions
 })
.command('list','List all the available Notes',{
    
})
.command('read', 'Read a note',{
    title : titleOptions
})
.command('remove', 'Remove a Note',{
    title : titleOptions
})
.help()
.argv;

if(arg === 'add'){
    var note = notes.addNotes(argv.title, argv.body);
    if(note) {
        console.log('Note created');
        notes.logNote(note);
    }else {
        console.log('Note title taken');
    }
} else if(arg === 'list'){
    var notesList = notes.getAll();
    if(notesList){
        console.log(`Listing ${notesList.length} Note(s)`);
        notesList.forEach(note => {
            notes.logNote(note);
        });
    } else {
        
        console.log('No Notes found...');
    }
} else if (arg === 'remove') {
    var isDeleted = notes.deleteNotes(argv.title);
    if(isDeleted){
        console.log('Note Deleted');
        console.log('-----------');
        console.log('Title: ',argv.title);
    }
 
}else if (arg === 'read') {
    var note = notes.readNotes(argv.title);
    if(note) {
        console.log('Note details');
        console.log('-----------------');
        notes.logNote(note);
    } else {
        console.log('Title not found ',argv.title);
    }
} else {
    console.log('Wrong command');
}