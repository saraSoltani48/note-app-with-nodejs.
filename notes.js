const noteData = require("./notes.json");
const fs = require("fs");

var title = process.argv[3];
var body = process.argv[5];
var myNote = { title, body };
if (
  process.argv[2] == "add" &&
  process.argv[3] == "--title" &&
  
  process.argv[5] == "--body"

) {
  fs.writeFileSync(
    "./notes.json",
    JSON.stringify([
      ...noteData,
      { title: process.argv[4], body: process.argv[6] }
    ]),
    "utf8"
  );
  // (error)=>{
  //     if(error){
  //         console.log(error)
  //     }
  // }
  //);
} else if (process.argv[2] == "remove") {
  fs.writeFileSync(
    "./notes.json",    JSON.stringify(noteData.filter(el => el.title !== process.argv[4]),"utf8")
  );

  console.log(noteData.filter(el => el.title !== process.argv[4]));
}

else if (process.argv[2] === "read") {
  const readNote = title => {
    JSON.stringify (noteData.filter(el => el.title === process.argv[4]),"utf8")
    console.log(noteData.filter(el => el.title === process.argv[4]));
  }
}
  else {
console.log(fs.readFileSync( "./notes.json").toString())
  }
;
