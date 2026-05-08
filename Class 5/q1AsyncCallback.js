// Q: Write a function that

// 1. Reads the contents of a file
// 2. Trims the extra space from the left and right
// 3. Writes it back to the file


const fs = require("fs");

function cleanFile(filepath,callback){
    fs.readFile("a.txt","utf-8",function(err,contents)
{
    const trimmedContent = contents.trim(); 

    fs.writeFile("a.txt",trimmedContent,function()
{
    callback(trimmedContent);
});
});
}

cleanFile("a.txt",function(data){
    console.log("done");
    console.log(data);
})