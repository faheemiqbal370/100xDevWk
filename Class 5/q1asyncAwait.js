const fs = require("fs");

function cleanFile(filepath) {
    return new Promise((resolve, reject) => {
         fs.readFile(filepath,"utf-8",function(err,contents) {
            if(err){
                reject(err);
            }
            else { 
                const trimmedContent = contents.trim(); 
                fs.writeFile(filepath,trimmedContent,function(err) {
                if(err){
                reject(err);
                }
                else{
                    resolve(trimmedContent); //sends trimmed content to main function
                }
            });
            }
         });
    })
}
   
async function main() {
    try{ 
    let data = await cleanFile("a.txt");
    console.log(data);
    // console.log("Done CLeaning the File");
    }
    catch(e){
        console.log("Error while reading the file");
    }
}

main();


