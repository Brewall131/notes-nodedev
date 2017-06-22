console.log('starting app!');

const fs = require ('fs');
const _= require ('lodash');
const yargs = require ('yargs');

const notes = require ('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('yargs', argv);

var text = '';

switch (command) {
	case 'read':
		text = 'reading note';
		notes.getNote(argv.title);
		break;
	case 'list':
		text = 'listing all notes';
		notes.getAll();
		break;
	case 'add':
		text = 'adding note';
		notes.addNote(argv.title, argv.body);
		break;
	case 'delete':
		text = 'deleting note';
		notes.removeNote(argv.title);
		break;
	default:
		text = 'command is not recognized';
}

console.log('command:', text);

 




