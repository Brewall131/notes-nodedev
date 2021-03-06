console.log('Starting notes.js');

const fs = require('fs');

////fetching and saving for all other functions
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

/////action commands for the app
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    console.log('A note with this title already exists, try a different title.');
  }
};

/////////
var getAll = () => {
  console.log('Getting all notes');
};

///////
var getNote = (title) => {
  console.log('Getting note', title);
};

//////
var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};