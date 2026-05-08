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
   
cleanFile("a.txt") 
.then(function(contents) {
    console.log("Done cleaning file");
    console.log(contents);
})
.catch(function(){
    console.log("error while cleaning file");
})

