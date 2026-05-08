const fd = require("fs");

// function fsReadFilePRomisified(filepath, encoding) {}

// async function main(params) {
//   fsReadFilePRomisified("a.txt", "utf-8").then(function (data) {
//     console.log(data);
//   });
//   fsReadFilePRomisified("b.txt", "utf-8").then(function (data) {
//     console.log(data);
//   });
//   fsReadFilePRomisified("c.txt", "utf-8").then(function (data) {
//     console.log(data);
//   });
// }

// main();

// CLEAN WAY

async function main() {
  let filecontents1 = await fsReadFilePRomisified("a.txt", "utf-8");
  let filecontents2 = await fsReadFilePRomisified("b.txt", "utf-8")
  let filecontents3 = await fsReadFilePRomisified("c.txt", "utf-8")
  
    console.log(filecontents1);
    console.log(filecontents2);
    console.log(filecontents3);
}

main();
console.log("HI");
console.log("HELLO");
