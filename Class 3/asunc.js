const fs = require("fs");

function fileReadCallback(err, contents) {
  console.log(contents);
}

const contents = fs.readFile("a.txt", "utf-8", fileReadCallback);

let s=3;
for(let i=0;i<1000000;i++){
    s+=1;
}
console.log(s);