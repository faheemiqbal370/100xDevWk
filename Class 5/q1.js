// Q: Write a function that

// 1. Reads the contents of a file
// 2. Trims the extra space from the left and right
// 3. Writes it back to the file



Synchronous 
const fs = require("fs");

let contents=fs.readFileSync("a.txt","utf-8");
console.log(contents);
console.log(contents.trim());

fs.writeFileSync("a.txt","utf-8");