const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')
//const chalk = require('chalk')
// const add = require('./utils.js')
// const fs = require('fs')

// const sum = add(55,-5)
// console.log(sum)
// fs.writeFileSync('notes.txt','My name is Guri')
// fs.appendFileSync('notes.txt','\nI am learning node js and this is interesting')

//console.log(notes())
//console.log(validator.isEmail("guriexample.com"))
//console.log(validator.isURL("https://mead.io"))
//console.log(chalk.red.dim("This text is printe with green color"))

//const miles = 18;
//const calculateFeet = miles => miles * 5280;
 
// console.log(chalk`
//     There are {bold 5280 feet} in a mile.
//     In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
// `);

//console.log(process.argv)

// if(process.argv[2] === "add") {
//     console.log("Adding notes")
// } else if (process.argv[2] === "remove") {
//     console.log("Remove notes")
// }

//console.log(process.argv)
//console.log(yargs.argv)

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
       title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       },
       body: {
        describe: 'Note description',
        demandOption: true,
        type: 'text'
    },     
    },  
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a new note',
    builder: {
        title: {
            description: "This is a note title",
            demandOption: true,
            type: 'string'    
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//console.log(yargs.argv)
yargs.parse()