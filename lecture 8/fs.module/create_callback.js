const fs = require('fs');

let filename = "song.txt";

console.log("file is being created ....");

fs.writeFileSync(filename, "hello i m coidng blocks trainer ");


console.log("file created");