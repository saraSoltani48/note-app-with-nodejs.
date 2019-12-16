const note = require("./note2");
const title=process.argv[3];
console.log('title', title)
const body=process.argv[4];
console.log('body', body)
const command =process.argv[2];
switch (command){
case 'add':
{
    console.log("adding note")
    note.addNote(title,body)
};
break;
case 'remove':
    {
      console.log('remove this note')  
      note.removeNote(title)
    } ;
    break;

case 'read':
    {
    console.log('reading this note')
    note.readNote(title)

}
case 'list':
   { console.log('list of note')
   note.myList()
    }
break;
default: console.log("this command is not found")
}
