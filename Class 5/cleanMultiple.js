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
   
async function cleanManyFiles(prefix) {
    let d1= await cleanFile(prefix + "1.txt");
    let d2=await cleanFile(prefix + "2.txt");
   let d3= await cleanFile(prefix + "3.txt");

   return [d1,d2,d3];
    
}

// async function main() {
//     try{ 
//     let data = await cleanManyFiles("a");
//     console.log("Done CLeaning the File");
//     console.log(data);
//     }
//     catch(e){
//         console.log("Error while reading the file");
//     }
// }

cleanManyFiles("a") 
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log("Error while reading the file");
    })




