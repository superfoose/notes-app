const chalk = require('chalk'); 
const { describe, argv, demandOption } = require('yargs');
const yargs = require('yargs')
const  notes = require('./notes.js')

 //customize yargs version
 yargs.version('1.1.0');

 //Create add command
 yargs.command({
     command: 'add',
     describe: 'Add a new note',
     builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
     },
     handler(argv) {
         notes.addNote(argv.title, argv.body)
     }
 })

 yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
       title: {
           describe: 'Note title', 
           demandOption: true,
           type: 'string',
       }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe:'read a note',
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

 //create remove command
//  yargs.command({
//      command: 'remove',
//      describe: 'Remove a note',
//      handler: function () {
//          console.log('Removing the note')
//      }
//  })

 //create list command
 yargs.command({
     command: 'list',
     describe: 'List your notes',
     handler() {
         notes.listNotes()
     }

 })

 //create read command
 
 // add, remove, read list


yargs.parse()


//To stop nodemon do ctrl+c
// add, remove, read --title="" --body=""
