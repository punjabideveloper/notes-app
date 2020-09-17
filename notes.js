const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>  {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            'title': title,
            'body': body
        })
        saveNotes(notes)
        console.log("New note added!")
    } else {
        console.log("Note title taken!")
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    
    const singleNote = notes.find((note) => note.title === title)

    if(singleNote) {
        console.log(chalk.inverse.green(singleNote.title))
        console.log(singleNote.body )
    } else {
        console.log(chalk.red("Note not found"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const removeNote = (title) =>  {
    const notes = loadNotes()
    const notesToKeep = notes.filter( (notes) => notes.title !== title )

    if(notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen("Note removed!"))
        
    } else {
        console.log(chalk.bgRed("No note found!"))
    }
    
}

const saveNotes = (notes) =>  {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)     
    } catch (error) {
        return []    
    }
        
}

module.exports =  {
    'getNotes': getNotes,
    'addNote': addNote,
    'removeNote': removeNote,
    'listNotes': listNotes,
    'readNote': readNote
}