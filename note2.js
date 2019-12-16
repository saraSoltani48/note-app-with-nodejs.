const fs = require("fs");

let file = JSON.parse(fs.readFileSync("./notes2.json"));
const addNote = (title, body) => {
    var note = {title, body};
    file=file.concat(note)
    fs.writeFileSync('notes2.json',JSON.stringify(file))
    console.log("file", file);
};
const removeNote = title=>{
    let newFile = file.filter(el=>el.title!=title)
    fs.writeFileSync('notes2.json',JSON.stringify(newFile))
}


const readNote=title=>{
    let NewFile = file.filter(el=>el.title===title)
    console.log(NewFile)
}
const myList=()=>{
    console.log(file)
}
module.exports =  {addNote,removeNote,readNote,myList}