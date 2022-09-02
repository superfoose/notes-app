const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'

    
}

const addNote = (title, body) => {
        const notes = loadNotes()
        duplicateNote = notes.find((note) => note.title === title)

        if (!duplicateNote) {
            notes.push({
                title: title,
                body: body
            })
    
            saveNotes(notes)
            console.log(chalk.green.inverse('New note added!'))
        } else {
            console.log(chalk.red.inverse('Note title taken'))
        }
        delete JSON[title]
       
}

const removeNote = (title)  => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    saveNotes(notesToKeep)
    if (notesToKeep.length !== notes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else{
        console.log(chalk.red.inverse('No note found!'))
    }
   
}

const listNotes = () => {
    const notes  = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)

    if (!note) {
        console.log(chalk.red('Enable to find note'))
    }else {
    console.log(chalk.bold.blueBright(note.title) + note.body);
    }

}

const saveNotes = (notes)  => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

module.exports = {
    getNotes:  getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}